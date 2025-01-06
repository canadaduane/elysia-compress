declare class MemCache {
    private cache;
    constructor(cache?: Map<number | bigint, any>);
    set(key: number | bigint, value: any, TTL?: number): void;
    get(key: number | bigint): any;
    has(key: number | bigint): boolean;
    clear(): void;
}
declare const memCache: MemCache;
export default memCache;
