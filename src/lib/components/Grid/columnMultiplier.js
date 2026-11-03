// A numeric column read in a unit other than the one it is stored in - millivolts read as volts.
// The column renders that itself; `multiplier` only tells the request builder how to convert a filter
// value back to the stored unit, so what is typed as 4.13 reaches the server as 4130.

// Only a finite non-zero multiplier means anything: zero would make this a division by zero.
export const hasMultiplier = (multiplier) => typeof multiplier === 'number' && Number.isFinite(multiplier) && multiplier !== 0;

// Dividing a decimal leaves artefacts (4.35 / 0.01 is 434.99999999999994) that an equals filter would
// never match, so the result lands back on the number that was typed.
const toStoredNumber = (value, multiplier) => {
    const numeric = typeof value === 'number'
        ? value
        : (typeof value === 'string' && value.trim() !== '' ? Number(value) : NaN);
    if (!Number.isFinite(numeric)) return value;
    const stored = Number((numeric / multiplier).toPrecision(12));
    return Number.isFinite(stored) ? stored : value;
};

// isAnyOf carries a list; anything that isn't a number is left for the server to reject.
export const toStoredUnit = (value, multiplier) => Array.isArray(value)
    ? value.map(entry => toStoredNumber(entry, multiplier))
    : toStoredNumber(value, multiplier);
