import { afterEach, expect, it, vi } from 'vite-plus/test';
import { createPasskey, getPasskeyAssertion, isPasskeyCancelled } from '../src/lib/passkey.js';

const bytes = (...values) => Uint8Array.from(values).buffer;
const text = (buffer) => Array.from(new Uint8Array(buffer));
const originalCredentials = Object.getOwnPropertyDescriptor(navigator, 'credentials');

const mockCredentials = (api) => {
    Object.defineProperty(navigator, 'credentials', { configurable: true, value: api });
};

afterEach(() => {
    if (originalCredentials) {
        Object.defineProperty(navigator, 'credentials', originalCredentials);
    } else {
        delete navigator.credentials;
    }
});

it('decodes base64url creation options and encodes the new credential for the server', async () => {
    const create = vi.fn().mockResolvedValue({
        id: 'cred-id',
        rawId: bytes(251, 255, 0),
        type: 'public-key',
        response: {
            clientDataJSON: bytes(1, 2, 3),
            attestationObject: bytes(4, 5),
            getTransports: () => ['internal', 'hybrid']
        }
    });
    mockCredentials({ create });

    const credential = await createPasskey({
        challenge: '-_8',
        rp: { id: 'example.com', name: 'Example' },
        user: { id: 'MQ', name: 'user', displayName: 'User' },
        excludeCredentials: [{ type: 'public-key', id: 'AQI' }]
    });

    const { publicKey } = create.mock.calls[0][0];
    expect(text(publicKey.challenge)).toEqual([251, 255]);
    expect(text(publicKey.user.id)).toEqual([49]);
    expect(text(publicKey.excludeCredentials[0].id)).toEqual([1, 2]);
    expect(credential).toEqual({
        id: 'cred-id',
        rawId: '-_8A',
        type: 'public-key',
        transports: ['internal', 'hybrid'],
        response: { clientDataJSON: 'AQID', attestationObject: 'BAU' }
    });
});

it('encodes an assertion and reports a missing user handle as null', async () => {
    const get = vi.fn().mockResolvedValue({
        id: 'cred-id',
        rawId: bytes(1),
        type: 'public-key',
        response: {
            clientDataJSON: bytes(2),
            authenticatorData: bytes(3),
            signature: bytes(4),
            userHandle: null
        }
    });
    mockCredentials({ get });

    const assertion = await getPasskeyAssertion({ challenge: 'AA', rpId: 'example.com' });

    expect(get.mock.calls[0][0].publicKey.allowCredentials).toEqual([]);
    expect(assertion.response).toEqual({ clientDataJSON: 'Ag', authenticatorData: 'Aw', signature: 'BA', userHandle: null });
});

it('fails when the browser returns no credential', async () => {
    mockCredentials({ get: vi.fn().mockResolvedValue(null) });
    await expect(getPasskeyAssertion({ challenge: 'AA' })).rejects.toThrow('No passkey was used.');
});

it('treats a dismissed prompt as a cancellation, not an error', () => {
    expect(isPasskeyCancelled({ name: 'NotAllowedError' })).toBe(true);
    expect(isPasskeyCancelled({ name: 'AbortError' })).toBe(true);
    expect(isPasskeyCancelled(new Error('boom'))).toBe(false);
});
