class MyHashMap {    
    map;
    constructor() {
        this.map = {};
    }

    put(key: number, value: number): void {
        this.map[key] = value
    }

    get(key: number): number {
        if(this.map[key] !== undefined) return this.map[key]
        else return -1
    }

    remove(key: number): void {
        if(this.map[key]) delete this.map[key]
    }
}