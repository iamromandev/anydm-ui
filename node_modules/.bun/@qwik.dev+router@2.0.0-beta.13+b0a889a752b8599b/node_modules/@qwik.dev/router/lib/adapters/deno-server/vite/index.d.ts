import { ServerAdapterOptions } from '../../shared/vite';
import type { SsgRenderOptions } from 'packages/qwik-router/src/ssg';

/** @beta */
export declare function denoServerAdapter(opts?: DenoServerAdapterOptions): any;

/** @beta */
export declare interface DenoServerAdapterOptions extends ServerAdapterOptions {
    name?: string;
}

export { SsgRenderOptions }

export { }
