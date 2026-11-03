// Displayed values are multiplied by this factor; filters must undo that scaling.
export const hasMultiplier = (multiplier) => typeof multiplier === 'number' && Number.isFinite(multiplier) && multiplier !== 0;

const decimalParts = (value) => {
    const [coefficient, exponent = '0'] = value.toString().split('e');
    const [whole, fraction = ''] = coefficient.split('.');
    return { digits: BigInt(whole + fraction), exponent: Number(exponent) - fraction.length };
};

const toStoredNumber = (value, multiplier) => {
    const numeric = typeof value === 'number'
        ? value
        : (typeof value === 'string' && value.trim() !== '' ? Number(value) : NaN);
    if (!Number.isFinite(numeric)) return value;
    const numerator = decimalParts(numeric);
    const denominator = decimalParts(multiplier);
    // Divide the decimal representations before converting back to Number. Rounding every
    // result to 12 significant digits discards valid input, even with a multiplier of 1.
    // Each operand has at most 17 significant digits; 80 decimal guard places retain the
    // precision needed by Number while removing artefacts such as 4.35 / .01 !== 435.
    const quotient = numerator.digits * (10n ** 80n) / denominator.digits;
    const stored = Number(`${quotient}e${numerator.exponent - denominator.exponent - 80}`);
    return Number.isFinite(stored) ? stored : value;
};

export const toStoredUnit = (value, multiplier) => {
    if (!hasMultiplier(multiplier)) return value;
    return Array.isArray(value)
        ? value.map(entry => toStoredNumber(entry, multiplier))
        : toStoredNumber(value, multiplier);
};
