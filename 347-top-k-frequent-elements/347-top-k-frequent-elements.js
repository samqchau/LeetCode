/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}

 */
var topKFrequent = function(nums, k) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        map[num] ? map[num] += 1 : map[num] = 1;
    }

    let n = k;
    let heap = [];
    for(let num in map) {
        if(n !== 0) {
            heap.push(num);
            n--;
            if(n === 0) {heapify();}
        } else {
            if(map[num] > map[heap[0]]) {
                heap[0] = num;
                bubbleDown(0)
            }
        }
    }
    
    return heap
    
    function heapify(){
        for(let i = heap.length - 1; i >= 0; i--) {
            bubbleDown(i);
        }
    }
    
    function bubbleDown(i) {
        let l = 2 * i + 1, r = 2 * i + 2;
        if(l > heap.length - 1) return;
        let smallest = l;
        if(r <= heap.length - 1 && map[heap[r]] < map[heap[l]]) {
            smallest = r;
        }
        if(map[heap[i]] > map[heap[smallest]]) {
            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            bubbleDown(smallest);
        }
    }
    
};