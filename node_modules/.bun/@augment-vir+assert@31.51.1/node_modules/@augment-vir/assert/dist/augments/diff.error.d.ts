import { AssertionError } from './assertion.error.js';
export declare class DiffError extends AssertionError {
    name: string;
    constructor(baseMessage: string, actual: unknown, expected: unknown, userCustomizedMessage: string | undefined);
}
