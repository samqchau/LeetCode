/*
    Time Complexity - O(1)
    Construction, get, and put are all constant time.
    
    Space Complexity - O(n)
    Space requirements for Map Object is dependent on capcity size
*/

class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }
    
    get(key) {
        if(!this.cache.has(key)) return -1;
        
        let temp = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, temp);
        return this.cache.get(key);
    }
    
    put(key, value) {
        if(this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key,value);
        if(this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}