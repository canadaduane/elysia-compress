"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MemCache {
    cache;
    constructor(cache = new Map()) {
        this.cache = cache;
    }
    set(key, value, TTL = Number.MAX_SAFE_INTEGER) {
        this.cache.set(key, value);
        setTimeout(() => this.cache.delete(key), TTL * 1000);
    }
    get(key) {
        return this.cache.get(key);
    }
    has(key) {
        return this.cache.has(key);
    }
    clear() {
        this.cache.clear();
    }
}
const memCache = new MemCache();
exports.default = memCache;
