import type { SsgRenderOptions } from '../../../ssg';

/** @public */
export declare function ssgAdapter(opts: SsgAdapterOptions): any;

/** @public */
export declare interface SsgAdapterOptions extends Omit<SsgRenderOptions, 'outDir'> {
}

/** @public @deprecated Use `ssgAdapter` instead. */
export declare const staticAdapter: typeof ssgAdapter;

export { }
