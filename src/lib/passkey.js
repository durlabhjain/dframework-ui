// Browser side of the passkey (WebAuthn) ceremonies served by the framework's
// ExtJSHelper.Controllers.Passkey and PasskeyRequest (#67161). The server speaks base64url,
// while the WebAuthn API speaks ArrayBuffers, so every binary field is converted on the way in
// and out. Used by a login page and a passkey management dialog.

const fromBase64Url = (value) => {
    const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
    const binary = atob(base64 + '='.repeat((4 - (base64.length % 4)) % 4));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index++) {
        bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
};

const toBase64Url = (buffer) => {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let index = 0; index < bytes.length; index++) {
        binary += String.fromCharCode(bytes[index]);
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

const toDescriptor = (descriptor) => ({ ...descriptor, id: fromBase64Url(descriptor.id) });

/** True when this browser can run a passkey ceremony at all. */
export const isPasskeySupported = () => typeof window !== 'undefined'
    && typeof window.PublicKeyCredential === 'function'
    && typeof navigator.credentials?.create === 'function';

const detectPasskeyDeviceSupport = async () => {
    if (!isPasskeySupported()) return { usable: false, platform: false, hybrid: false, reason: 'browser' };
    const credentialApi = window.PublicKeyCredential;
    // Windows Hello, Touch ID, a phone's screen lock, or a browser password manager acting as one.
    const builtIn = await credentialApi.isUserVerifyingPlatformAuthenticatorAvailable()
        .then(available => available === true, () => false);
    const capabilities = typeof credentialApi.getClientCapabilities === 'function'
        ? await credentialApi.getClientCapabilities().then(result => result || {}, () => ({}))
        : {};
    const platform = builtIn || capabilities.userVerifyingPlatformAuthenticator === true || capabilities.passkeyPlatformAuthenticator === true;
    // Signing in with a phone by QR code; browsers report it only when this computer has Bluetooth.
    const hybrid = capabilities.hybridTransport === true;
    const usable = platform || hybrid;
    return { usable, platform, hybrid, reason: usable ? null : 'device' };
};

let passkeyDeviceSupport = null;

/**
 * Whether this device can create and use passkeys, decided once per page load. A device with no
 * built-in authenticator and no way to reach a phone would only show confusing browser prompts, so
 * passkey options are offered only when this reports `usable`.
 * @returns {Promise<{ usable: boolean, platform: boolean, hybrid: boolean, reason: 'browser'|'device'|null }>}
 */
export const getPasskeyDeviceSupport = () => {
    if (!passkeyDeviceSupport) passkeyDeviceSupport = detectPasskeyDeviceSupport();
    return passkeyDeviceSupport;
};

/** The step that gives this kind of device a place to keep passkeys. */
export const passkeySetupHint = () => {
    const agent = typeof navigator === 'undefined' ? '' : navigator.userAgent || '';
    if (/iPhone|iPad|iPod/.test(agent)) return { key: 'message.passkey-setup-ios', text: 'Set a device passcode and turn on iCloud Keychain in Settings, then try again.' };
    if (/Android/.test(agent)) return { key: 'message.passkey-setup-android', text: 'Set a screen lock (PIN, pattern or fingerprint) in your phone settings, then try again.' };
    if (/Macintosh|Mac OS X/.test(agent)) return { key: 'message.passkey-setup-mac', text: 'Turn on Touch ID or iCloud Keychain in System Settings, then try again.' };
    if (/Windows/.test(agent)) return { key: 'message.passkey-setup-windows', text: 'Set up Windows Hello (Settings > Accounts > Sign-in options > PIN), then reopen this page.' };
    return { key: 'message.passkey-setup-other', text: 'Use a phone, tablet or computer with a fingerprint, face or screen-lock sign-in.' };
};

/**
 * A label for the passkey so the user can tell their devices apart later. The user can
 * edit it before saving, and the server accepts an empty one.
 */
export const describeCurrentDevice = () => {
    const agent = navigator.userAgent || '';
    if (/iPhone|iPad|iPod/.test(agent)) return 'iPhone or iPad';
    if (/Android/.test(agent)) return 'Android device';
    if (/Macintosh|Mac OS X/.test(agent)) return 'Mac';
    if (/Windows/.test(agent)) return 'Windows device';
    return 'This device';
};

/** True when the user dismissed the operating system prompt rather than hitting a real error. */
export const isPasskeyCancelled = (error) => error?.name === 'NotAllowedError' || error?.name === 'AbortError';

/** Runs navigator.credentials.create and returns the credential in the shape the server expects. */
export const createPasskey = async (options) => {
    const credential = await navigator.credentials.create({
        publicKey: {
            ...options,
            challenge: fromBase64Url(options.challenge),
            user: { ...options.user, id: fromBase64Url(options.user.id) },
            excludeCredentials: (options.excludeCredentials || []).map(toDescriptor)
        }
    });
    if (!credential) {
        throw new Error('No passkey was created.');
    }
    return {
        id: credential.id,
        rawId: toBase64Url(credential.rawId),
        type: credential.type,
        // Recorded so a later sign in prompt can go straight to the right kind of device.
        transports: credential.response.getTransports ? credential.response.getTransports() : [],
        response: {
            clientDataJSON: toBase64Url(credential.response.clientDataJSON),
            attestationObject: toBase64Url(credential.response.attestationObject)
        }
    };
};

/** Runs navigator.credentials.get and returns the assertion in the shape the server expects. */
export const getPasskeyAssertion = async (options) => {
    const assertion = await navigator.credentials.get({
        publicKey: {
            ...options,
            challenge: fromBase64Url(options.challenge),
            allowCredentials: (options.allowCredentials || []).map(toDescriptor)
        }
    });
    if (!assertion) {
        throw new Error('No passkey was used.');
    }
    return {
        id: assertion.id,
        rawId: toBase64Url(assertion.rawId),
        type: assertion.type,
        response: {
            clientDataJSON: toBase64Url(assertion.response.clientDataJSON),
            authenticatorData: toBase64Url(assertion.response.authenticatorData),
            signature: toBase64Url(assertion.response.signature),
            userHandle: assertion.response.userHandle ? toBase64Url(assertion.response.userHandle) : null
        }
    };
};
