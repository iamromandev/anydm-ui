import type { SystemTheme } from "./types";
export declare const getTheme: (key: string, fallback?: string) => string | undefined;
export declare const getSystemTheme: (mq?: MediaQueryList | MediaQueryListEvent) => SystemTheme;
export declare const disableAnimation: () => () => void;
