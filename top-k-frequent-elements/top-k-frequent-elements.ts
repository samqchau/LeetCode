/*
    Time Complexity - O(nlogk)
    -Build map - n
    -For each entry in map (n) insert into heap (logk)
    
    Space Complexity - O()
    -map --> n
    -heap --> k
    -recursive calls --> max stack space is height of tree (logk)
*/

function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();
    nums.forEach(n => map.set(n, (map.get(n) || 0) + 1));
    let heap = new Array();
    let keys = map.keys();
    let n = k;
    while(n--) {
        let key = keys.next().value;
        heap.push(key)
    }
    heapify();
    let num = keys.next().value
    console.log(map)
    while(num !== undefined) {
        let min = heap[0];
        let minCount = map.get(min);
        let numCount = map.get(num);

        if(numCount > minCount) {
            heap[0] = num;
            bubbleSmallestUp(0)
        }        
        num = keys.next().value;
    }
    
    return heap
    
    function heapify() {
        for(let i = heap.length-1; i >= 0; i--) {
            bubbleSmallestUp(i);
        }
    }
    
    function bubbleSmallestUp(index) {
        let left = getLeft(index);
        let right = getRight(index);
        
        if(left === null) return
        let rootCount = map.get(heap[index]);
        let leftCount = map.get(heap[left]);
        
        let smallest = left;
        
        if(right !== null && map.get(heap[right]) < leftCount) {
            smallest = right;
        }
        
        if(rootCount > map.get(heap[smallest])) {
            let temp = heap[index];
            heap[index] = heap[smallest];
            heap[smallest] = temp;
            bubbleSmallestUp(smallest);
        }
    }
    
    function getLeft (index) {
        let res = 2 * index + 1;
        return res < heap.length ? res : null
    }
    
    function getRight(index) {
        let res = 2 * index + 2;
        return res < heap.length ? res : null
    }
};

/*
Approach
    -Create a map to track the frequency of each number in nums
    -Count frequency of nums in nums
    -Create arr size k
    -Fill arr with the first k keys from map
    -Create minHeap from arr by bubbling down larger values
    -For the rest of the entries, check if the frequency is higher than the top value of the heap.
        -If it is, set the top element of the heap to the val and bubble it down to reestablish min heap. return min heap
    -Return the heap
*/