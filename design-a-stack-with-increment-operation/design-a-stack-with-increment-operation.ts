/*
    Time Complexity
    Push - O(1)
    Pop - O(1)
    Increment - O(k)
    
    Space Complexity
    Stack size - O(maxSize)
    
*/

class CustomStack {
    maxSize: number;
    stack: number[];
    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.stack = new Array(0);
    }

    push(x: number): void {
        if(this.stack.length < this.maxSize) {
            this.stack[this.stack.length] = x;
        }
    }

    pop(): number {
        if(this.stack.length > 0) {
            let res = this.stack[this.stack.length - 1];
            delete this.stack[this.stack.length - 1];
            this.stack.length = this.stack.length - 1;
            return res;
        } else {
            return -1;
        }
    }

    increment(k: number, val: number): void {
        for(let i = 0; i < k; i++) {
            if(this.stack[i] != undefined) {
                this.stack[i] += val;
            }
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */