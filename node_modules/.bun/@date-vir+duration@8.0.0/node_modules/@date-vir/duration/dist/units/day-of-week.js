import { userLocale } from '../locale.js';
/**
 * An English key for named days of the week. Don't use this for actual day names, instead use
 * {@link getDayOfTheWeekNames}.
 *
 * @category Unit
 */
export var DayOfWeekName;
(function (DayOfWeekName) {
    DayOfWeekName["Sunday"] = "sunday";
    DayOfWeekName["Monday"] = "monday";
    DayOfWeekName["Tuesday"] = "tuesday";
    DayOfWeekName["Wednesday"] = "wednesday";
    DayOfWeekName["Thursday"] = "thursday";
    DayOfWeekName["Friday"] = "friday";
    DayOfWeekName["Saturday"] = "saturday";
})(DayOfWeekName || (DayOfWeekName = {}));
/**
 * Bounds for valid day of the week indexes.
 *
 * @category Internal
 */
export const dayOfWeekIndexBounds = {
    min: 0,
    max: 6,
};
/**
 * Maps {@link DayOfWeekName} to {@link DayOfWeekIndex}.
 *
 * @category Util
 */
export const dayOfWeekNameToIndex = {
    [DayOfWeekName.Sunday]: 0,
    [DayOfWeekName.Monday]: 1,
    [DayOfWeekName.Tuesday]: 2,
    [DayOfWeekName.Wednesday]: 3,
    [DayOfWeekName.Thursday]: 4,
    [DayOfWeekName.Friday]: 5,
    [DayOfWeekName.Saturday]: 6,
};
/**
 * An array of {@link DayOfWeekName} in index order. This can be accessed by any
 * {@link DayOfWeekIndex} number.
 *
 * @category Util
 */
export const dayOfWeekNameOrder = [
    DayOfWeekName.Sunday,
    DayOfWeekName.Monday,
    DayOfWeekName.Tuesday,
    DayOfWeekName.Wednesday,
    DayOfWeekName.Thursday,
    DayOfWeekName.Friday,
    DayOfWeekName.Saturday,
];
/**
 * Gets the names of the week in various formats for the given locale. Defaults to the current
 * user's locale.
 *
 * @category Language
 */
export function getDayOfTheWeekNames(options = {}) {
    return {
        short: getAbbreviatedDayOfWeekNames('short', options),
        narrow: getAbbreviatedDayOfWeekNames('narrow', options),
        long: getAbbreviatedDayOfWeekNames('long', options),
    };
}
function getAbbreviatedDayOfWeekNames(format, options) {
    const formatter = new Intl.DateTimeFormat(options.locale || userLocale, {
        weekday: format,
    });
    const numbered = {};
    const keyed = {};
    const indexed = {};
    for (let i = 0; i < dayOfWeekNameOrder.length; i++) {
        const day = formatter.format(new Date(2020, 0, i + 5));
        indexed[i] = day;
        keyed[dayOfWeekNameOrder[i]] = day;
        numbered[(i + 1)] = day;
    }
    return {
        keyed,
        indexed,
        numbered,
    };
}
