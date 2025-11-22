/**
 * Removes duplicate characters from any number of strings.
 *
 * @category String
 * @category Package : @augment-vir/common
 * @example
 *
 * ```ts
 * import {removeDuplicateCharacters} from '@augment-vir/common';
 *
 * removeDuplicateCharacters('aAaBc', 'QrsAa');
 * // output is `'aABcQrs'`
 * ```
 *
 * @package [`@augment-vir/common`](https://www.npmjs.com/package/@augment-vir/common)
 */
export declare function removeDuplicateCharacters(...values: ReadonlyArray<string>): string;
