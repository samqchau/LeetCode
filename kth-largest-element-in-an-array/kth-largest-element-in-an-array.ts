/*
    Time Complexity - O(nlogn)
    Heapifies the original input array. For every node (n), bubble down (logn) time. getPriorityItem() is logn time with (1) constant access and having to bubbleDown a value from the top of the tree.
    
    Space Complexity - O(1)
    Heapifies the input array, no extra space needed.
    
    Approach - 
    We want to find the kth largest element
    If we create a priority queue, we can have instant access to the top element.
    To create the priority queue, we need to implement a heapify function.
    Heapify starts at the leaf nodes and checks if they need to bubble up. They do not. Go to the next level up. for(i = len - 1; i >= 0; i++) bubbleDown(nums, len, i). nlogn
    This will leave us with a priority queue.
    Now we can pop the first element off and put the smallest element at the top and perform recursive bubble down. (logn)
*/
function findKthLargest(nums: number[], k: number): number {    
    function heapify(): void {
        for(let i = nums.length - 1; i >= 0; i--) {
            bubbleDown(i);
        }
    }
    
    function bubbleDown(idx) {
        let l = getLeft(idx);
        let r = getRight(idx);
        if(l === null) return
        let largest = l;
        if(r !== null && nums[r] > nums[l]) largest = r;
        if(nums[largest] > nums[idx]) {
            let temp = nums[idx];
            nums[idx] = nums[largest]
            nums[largest] = temp;
            bubbleDown(largest);
        }
    }
    
    function getPriorityItem():number {
        let res = nums[0];
        nums[0] = nums[nums.length - 1];
        nums.length = nums.length - 1;
        bubbleDown(0);
        return res
    }
    
    function getLeft(index):number | null {
        let left = 2 * index + 1
        return left > nums.length - 1 ? null : left
    }
    
    function getRight(index):number | null {
        let right = 2 * index + 2
        return right > nums.length - 1 ? null : right
    }
    
    heapify();
    let res:number = 0;
    while(k--) {
        res = getPriorityItem();
    }
    return res;
};