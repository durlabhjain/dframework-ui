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

export { LIST_STATE_PARAM, currentSearchParams, generateId, readListState, writeListState };
