// Temporary list-state persistence, following the react-router "temporary list state"
// pattern: full snapshots live in sessionStorage, only a short id travels in the URL
// (?ls=<id>). Lets a grid restore its filters, sort, pagination, grouping and selection
// after a route round-trip to a form and back. The URL is updated via history replace and
// the id is reused for the life of the grid instance, so there's one snapshot per visit,
// not one per edit.
const STORAGE_PREFIX = 'grid-list-state:';

const LIST_STATE_PARAM = 'ls';

// For HashRouter apps (e.g. createHashRouter), react-router keeps the active route's
// query string inside window.location.hash ("#/path?ls=abc"), not window.location.search
// - so window.location.search alone is wrong (empty) there. Read whichever one actually
// carries the query string for the current route.
function currentSearchParams() {
    const hashQueryIndex = window.location.hash.indexOf('?');
    const search = hashQueryIndex !== -1 ? window.location.hash.slice(hashQueryIndex) : window.location.search;
    return new URLSearchParams(search);
}

function generateId() {
    return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

function readListState(id) {
    if (!id) return null;
    try {
        return JSON.parse(sessionStorage.getItem(STORAGE_PREFIX + id) ?? 'null');
    } catch {
        return null;
    }
}

function writeListState(id, snapshot) {
    try {
        sessionStorage.setItem(STORAGE_PREFIX + id, JSON.stringify(snapshot));
    } catch {
        // sessionStorage unavailable (private mode / quota exceeded) - state just won't restore
    }
}

// Drops the ?ls= param from the real address bar (not just react-router's in-memory location)
// via history.replaceState, mirroring currentSearchParams' hash-vs-search handling.
function stripListStateFromUrl() {
    const hashQueryIndex = window.location.hash.indexOf('?');
    const url = new URL(window.location.href);
    if (hashQueryIndex !== -1) {
        const params = new URLSearchParams(window.location.hash.slice(hashQueryIndex));
        if (!params.has(LIST_STATE_PARAM)) return;
        params.delete(LIST_STATE_PARAM);
        const query = params.toString();
        url.hash = `${window.location.hash.slice(0, hashQueryIndex)}${query ? `?${query}` : ''}`;
    } else {
        const params = new URLSearchParams(window.location.search);
        if (!params.has(LIST_STATE_PARAM)) return;
        params.delete(LIST_STATE_PARAM);
        url.search = params.toString();
    }
    window.history.replaceState(window.history.state, '', url);
}

// Every list-state snapshot this tab has stashed in sessionStorage, regardless of which grid
// or id it belongs to.
function clearAllListState() {
    try {
        Object.keys(sessionStorage)
            .filter((key) => key.startsWith(STORAGE_PREFIX))
            .forEach((key) => sessionStorage.removeItem(key));
    } catch {
        // sessionStorage unavailable - nothing to clear
    }
}

// True only for an actual document (re)load - F5, address-bar Enter, etc. - not an SPA route
// change, since only a real reload leaves sessionStorage snapshots and a ?ls= id stranded
// from a document instance that no longer exists.
function isReload() {
    try {
        const [entry] = performance.getEntriesByType('navigation');
        if (entry) return entry.type === 'reload';
    } catch {
        // Navigation Timing L2 unavailable - fall through to the legacy API
    }
    return typeof performance !== 'undefined' && performance.navigation?.type === 1;
}

// Runs once, when this module is first evaluated: a real reload re-imports the module fresh,
// but an SPA route change (e.g. a grid unmounting to navigate to Form and remounting on the
// way back) reuses this same module instance and never re-triggers it. So a reload is the only
// case that gets here twice with leftover state - wipe it before any grid mounts and reads it.
if (typeof window !== 'undefined' && isReload()) {
    clearAllListState();
    stripListStateFromUrl();
}

export { LIST_STATE_PARAM, currentSearchParams, generateId, readListState, writeListState };
