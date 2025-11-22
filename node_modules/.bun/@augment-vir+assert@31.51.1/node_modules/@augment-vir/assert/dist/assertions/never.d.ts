export declare const assertions: {
    /**
     * Immediately throws an assertion error if ever executed. Use this to mark paths of the code
     * that should never be reached or executed.
     *
     * @example
     *
     * ```ts
     * import {assert} from '@augment-vir/assert';
     *
     * assert.never(); // throws an error
     * ```
     *
     * @throws {@link AssertionError} If ever called.
     */
    never(failureMessage?: string | undefined): never;
};
export declare const neverGuard: {
    assert: {
        /**
         * Immediately throws an assertion error if ever executed. Use this to mark paths of the code
         * that should never be reached or executed.
         *
         * @example
         *
         * ```ts
         * import {assert} from '@augment-vir/assert';
         *
         * assert.never(); // throws an error
         * ```
         *
         * @throws {@link AssertionError} If ever called.
         */
        never(failureMessage?: string | undefined): never;
    };
    assertWrap: {};
    check: {};
    checkWrap: {};
    waitUntil: {};
};
