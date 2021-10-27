/*
    Approach
    Build a heap where the priority element is the closest number to k;
    add k elements to result
    return result
    
    Heap Implementation
    [1,2,3,4,5]
    Use an array where
    n
    l = 2n + 1;
    r = 2n + 2;
    
    What is a heap
    Heap is a data structure where the top element is guarenteed to be the priority
    We need to swap this element with the last
    Now the top element is guarenteed to belong on the last level of the heap
    Bubble down the number
    Do it again
    
    Functions
    
    turn arr into heap
    heapify (){
        for every element starting from the right
            bubbleDown
    }
    
    bubbleDown () {
        if node's left or right is higher priority
            (x-node.val <= x-node.left.val)
            swap();
    }
    
    swap () {
        
    }
*/

function findClosestElements(arr: number[], k: number, x: number): number[] {
    heapify(arr, 0, arr.length - 1, x);
    let res = []
    while(k--) {
        let num = pop(arr, x);
        res.push(num);
    }
    return res.sort((a,b) => {return a - b})
};

function heapify (arr, l, r, x) {
    for(let i = r; i >= 0; i--) {
        bubbleDown(arr, i, r, x);
    }
}

function bubbleDown (arr, i, end, x) {
    let n = i, nnum = arr[n], ndist = Math.abs(x-nnum);
    let l = 2 * i + 1, r = 2 * i + 2;
    if(n > end) return
    
    let lnum = arr[l], ldist = Math.abs(x-lnum);
    let rnum = arr[r], rdist = Math.abs(x-rnum);
    let min = ldist, minIdx = l;
    if(rdist < ldist || (rdist === ldist && rnum < lnum)) {min = rdist; minIdx = r;}
    if(min < ndist) {[arr[minIdx], arr[n]] = [arr[n], arr[minIdx]]; bubbleDown(arr, minIdx, end, x)}
}

function pop (arr, x) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    let res = arr.pop();
    bubbleDown(arr, 0, arr.length - 1, x);
    return res;
}