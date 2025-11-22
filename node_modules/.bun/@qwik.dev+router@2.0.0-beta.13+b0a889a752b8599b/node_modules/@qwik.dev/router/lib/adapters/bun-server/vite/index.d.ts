import { ServerAdapterOptions } from '../../shared/vite';
import type { SsgRenderOptions } from 'packages/qwik-router/src/ssg';

/** @beta */
export declare function bunServerAdapter(opts?: bunServerAdapterOptions): any;

/** @beta */
export declare interface bunServerAdapterOptions extends ServerAdapterOptions {
    name?: string;
}

export { SsgRenderOptions }

export { }
