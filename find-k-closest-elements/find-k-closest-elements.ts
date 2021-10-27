/*
    Approach
    Build a heap where the priority element is the closest number to k;
    add k elements to result
    return result

    Time Complexity - O(nlogn + klogn + klogk)
    Space Complexity - O(k)
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

//nlogn
function heapify (arr, l, r, x) {
    for(let i = r; i >= 0; i--) {
        bubbleDown(arr, i, r, x);
    }
}

//Log n
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
//logn
function pop (arr, x) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    let res = arr.pop();
    bubbleDown(arr, 0, arr.length - 1, x);
    return res;
}