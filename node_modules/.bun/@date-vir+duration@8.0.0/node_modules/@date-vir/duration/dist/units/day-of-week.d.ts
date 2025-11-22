import { type Subtract } from 'type-fest';
import { type LocaleOptions } from '../locale.js';
/**
 * An English key for named days of the week. Don't use this for actual day names, instead use
 * {@link getDayOfTheWeekNames}.
 *
 * @category Unit
 */
export declare enum DayOfWeekName {
    Sunday = "sunday",
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday"
}
/**
 * All valid day of the week indexes as a type. 0 = Sunday and 6 = Saturday.
 *
 * @category Unit
 */
export type DayOfWeekIndex = Subtract<DayOfWeekNumber, 1>;
/**
 * All valid day of the week numbers as a type. 1 = Sunday and 7 = Saturday.
 *
 * @category Unit
 */
export type DayOfWeekNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;
/**
 * Bounds for valid day of the week indexes.
 *
 * @category Internal
 */
export declare const dayOfWeekIndexBounds: {
    readonly min: 0;
    readonly max: 6;
};
/**
 * Maps {@link DayOfWeekName} to {@link DayOfWeekIndex}.
 *
 * @category Util
 */
export declare const dayOfWeekNameToIndex: {
    readonly sunday: 0;
    readonly monday: 1;
    readonly tuesday: 2;
    readonly wednesday: 3;
    readonly thursday: 4;
    readonly friday: 5;
    readonly saturday: 6;
};
/**
 * An array of {@link DayOfWeekName} in index order. This can be accessed by any
 * {@link DayOfWeekIndex} number.
 *
 * @category Util
 */
export declare const dayOfWeekNameOrder: [DayOfWeekName.Sunday, DayOfWeekName.Monday, DayOfWeekName.Tuesday, DayOfWeekName.Wednesday, DayOfWeekName.Thursday, DayOfWeekName.Friday, DayOfWeekName.Saturday];
/**
 * Output from {@link getDayOfTheWeekNames}.
 *
 * @category Internal
 */
export type DayOfWeekNames = Record<'short' | 'narrow' | 'long', {
    keyed: Record<DayOfWeekName, string>;
    indexed: Record<DayOfWeekIndex, string>;
    numbered: Record<DayOfWeekNumber, string>;
}>;
/**
 * Gets the names of the week in various formats for the given locale. Defaults to the current
 * user's locale.
 *
 * @category Language
 */
export declare function getDayOfTheWeekNames(options?: Readonly<LocaleOptions>): DayOfWeekNames;
