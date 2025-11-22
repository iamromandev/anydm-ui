import type { PluginOption } from 'vite';

/** @public */
export declare interface InsightManifest {
    manual: Record<string, string>;
    prefetch: {
        route: string;
        symbols: string[];
    }[];
}

/**
 * @beta
 * @experimental
 */
export declare function qwikInsights(qwikInsightsOpts: {
    publicApiKey: string;
    baseUrl?: string;
    outDir?: string;
}): Promise<PluginOption>;

export { }
