// Restricts a numeric column's filter inputs to whole numbers. A column declared with precision: 0 is
// backed by an integer (an INT, typically), but MUI's numeric filter inputs are a plain
// <input type="number">, which takes '2.5' as readily as '2'. The fraction is dropped rather than the
// keystroke refused - '2.5' filters on 2 - and the input re-reads the result, so what it shows and what
// is filtered on stay the same thing.

// undefined for anything that isn't a number at all, so it is left out instead of filtered on;
// an isAnyOf list is coerced entry by entry
export const toIntegerFilterValue = (value) => {
    if (Array.isArray(value)) {
        return value.map(toIntegerFilterValue).filter(entry => entry !== undefined);
    }
    const integer = Math.trunc(Number.parseFloat(value));
    return Number.isFinite(integer) ? integer : undefined;
};

// One wrapper per source input, so moving between operators backed by different inputs still reads as a
// change of InputComponent - which is how MUI knows to clear a single value before the isAnyOf input,
// which expects a list, ever reads it. Caching also holds each wrapper's identity steady through the
// gridColumns recomputes that lookup, currency and translation changes trigger, which would otherwise
// remount the open filter input and take the user's focus with it mid-typing.
const integerFilterInputs = new WeakMap();
const asIntegerFilterInput = (InputComponent) => {
    if (!integerFilterInputs.has(InputComponent)) {
        const IntegerFilterInput = ({ applyValue, ...props }) => (
            <InputComponent
                {...props}
                applyValue={(item) => applyValue({
                    ...item,
                    value: toIntegerFilterValue(item.value),
                    // fromInput marks a change as the single-value input's own, and it goes on showing its
                    // own text for as long as the mark stands. Dropping it only when the value wasn't whole
                    // already makes the box re-read '2' over a typed '2.5', and leaves a half-typed '2.' be.
                    fromInput: Number.isInteger(item.value) ? item.fromInput : undefined
                })}
            />
        );
        IntegerFilterInput.displayName = 'IntegerFilterInput';
        integerFilterInputs.set(InputComponent, IntegerFilterInput);
    }
    return integerFilterInputs.get(InputComponent);
};

// Restricts every value-taking operator to whole numbers; isEmpty/isNotEmpty carry no input to wrap
export const withIntegerFilterValues = (operators) => operators.map(op => (op.InputComponent ? { ...op, InputComponent: asIntegerFilterInput(op.InputComponent) } : op));
