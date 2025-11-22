import { ServerAdapterOptions } from '../../shared/vite';
import type { SsgRenderOptions } from 'packages/qwik-router/src/ssg';

/** @beta */
export declare function nodeServerAdapter(opts?: NodeServerAdapterOptions): any;

/** @beta */
export declare interface NodeServerAdapterOptions extends ServerAdapterOptions {
    name?: string;
}

export { SsgRenderOptions }

export { }
