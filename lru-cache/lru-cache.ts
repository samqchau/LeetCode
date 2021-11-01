class Node {
    val;
    key;
    next;
    prev;
    constructor(key, val, next, prev) {
        this.val = (val === undefined ? 0 : val);
        this.key = (key === undefined ? 0 : key);
        this.next = (next === undefined ? null : next);
        this.prev = (prev === undefined ? null : prev);
    }
}

class DoubleyLinkedList {
    head;
    tail;
    size;
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    addNode(node) {
        if(this.size == 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    
    removeNode(node) {
        if(this.head === node) {
            this.head.prev = null;
            this.head = this.head.next;
            node.next = null;
        } else if(this.tail === node) {
            this.tail = this.tail.prev;
            node.prev = null;
            this.tail.next = null;
        } else if(node != this.head && node != this.tail) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.prev = null;
            node.next = null;
        }
        this.size--;
    }
    
    getSize() {
        return this.size;
    }
    
    removeTailNode() {
        let val = this.tail.key;
        
        if(this.size == 1) {
            this.head = null;
            this.tail = null;
        } else {
            let temp = this.tail.prev;
            this.tail.prev = null;
            this.tail = temp;
            this.tail.next = null;
        }
        this.size--;
        return val
    }
}

class LRUCache {
    map;
    list;
    capacity;
    constructor(capacity: number) {
        this.map = new Map();
        this.list = new DoubleyLinkedList();
        this.capacity = (capacity === undefined ? 0 : capacity);
    }

    get(key: number): number {
        if(!this.map.has(key)) return -1
        let val = this.map.get(key).val;
        this.put(key, val);
        return val;
    }

    put(key: number, value: number): void {
        let node = new Node(key, value, undefined, undefined);
        if(this.map.has(key)) {
            this.list.removeNode(this.map.get(key));
            this.map.delete(key);
        } else if(this.list.getSize() == this.capacity) {
            this.map.delete(this.list.removeTailNode());
        }
        this.list.addNode(node);
        this.map.set(key, node);
    }
}