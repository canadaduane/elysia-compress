import { Elysia } from 'elysia';
import type { CacheOptions, CompressionOptions, LifeCycleOptions } from './types';
export declare const compression: (options?: CompressionOptions & LifeCycleOptions & CacheOptions) => Elysia<"", false, {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {};
}, {
    schema: {};
    macro: {};
    macroFn: {};
}, {}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
}>;
