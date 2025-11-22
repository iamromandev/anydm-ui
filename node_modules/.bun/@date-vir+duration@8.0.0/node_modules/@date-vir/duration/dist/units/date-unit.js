import { userLocale } from '../locale.js';
/**
 * All date units supported by date-vir. These are the singular versions of {@link DurationUnit}.
 *
 * @category Unit
 */
export var DateUnit;
(function (DateUnit) {
    DateUnit["Year"] = "year";
    DateUnit["Month"] = "month";
    DateUnit["Week"] = "week";
    DateUnit["Day"] = "day";
    DateUnit["Hour"] = "hour";
    DateUnit["Minute"] = "minute";
    DateUnit["Second"] = "second";
    DateUnit["Millisecond"] = "millisecond";
})(DateUnit || (DateUnit = {}));
/**
 * Gets the count and name of the requested unit.
 *
 * @category Language
 */
export function getDateUnitString(options) {
    const numberFormat = new Intl.NumberFormat(options.locale || userLocale, {
        style: 'unit',
        unit: options.unit.replace(/s$/, ''),
        unitDisplay: options.abbreviate ? 'short' : 'long',
        roundingMode: 'halfCeil',
        useGrouping: 'auto',
        maximumFractionDigits: options.decimalCount || 0,
    });
    return numberFormat.format(options.count);
}
/**
 * All {@link DateUnit} values that are zero indexed (start at 0, like seconds).
 *
 * @category Internal
 */
export const zeroIndexedDateUnits = [
    DateUnit.Year,
    DateUnit.Hour,
    DateUnit.Minute,
    DateUnit.Second,
    DateUnit.Millisecond,
];
/**
 * All {@link DateUnit} values that are one indexed (start at 1, like days of a month).
 *
 * @category Internal
 */
export const oneIndexedDateUnits = [
    DateUnit.Month,
    DateUnit.Week,
    DateUnit.Day,
];
/**
 * All {@link DateUnit} values in an array ordered from smallest to largest.
 *
 * @category Internal
 */
export const orderedDateUnit = [
    DateUnit.Millisecond,
    DateUnit.Second,
    DateUnit.Minute,
    DateUnit.Hour,
    DateUnit.Day,
    DateUnit.Week,
    DateUnit.Month,
    DateUnit.Year,
];
/**
 * Bounds for valid hour numbers.
 *
 * @category Internal
 */
export const hourBounds = {
    min: 0,
    max: 23,
};
/**
 * Bounds for valid minute numbers.
 *
 * @category Internal
 */
export const minuteBounds = {
    min: 0,
    max: 59,
};
/**
 * Bounds for valid second numbers.
 *
 * @category Internal
 */
export const secondBounds = {
    min: 0,
    max: 59,
};
/**
 * Bounds for valid millisecond numbers.
 *
 * @category Internal
 */
export const millisecondsBounds = {
    min: 0,
    max: 999,
};
