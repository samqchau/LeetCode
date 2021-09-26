/*
    Time Complexity - O(nlogn)
    -Sort array
    -Iterate through array and add mins to sum
    
    Space Complexity - O(1)
    Space requirements independent from input size.
*/

function arrayPairSum(nums: number[]): number {
    let sum:number = 0;
    heapSort(nums);
    for(let i:number = 0; i <= nums.length - 2; i+=2 ) {
        sum += nums[i];
    }
    return sum
};

function heapSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        heapify(arr, arr.length - 1 - i);
        [arr[0], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[0]];
        bubbleDown(arr, 0, arr.length - 2 - i);
    }
}

function bubbleDown (arr, nodeIdx, stopIdx) {
    if(nodeIdx > stopIdx) return
    let left = getLeftNode(nodeIdx);
    let right = getRightNode(nodeIdx);
    if(left > stopIdx) return;
    let largest = left;
    if(right <= stopIdx && arr[right] > arr[left]) largest = right;
    if(arr[nodeIdx] < arr[largest]) {
        let temp = arr[nodeIdx];
        arr[nodeIdx] = arr[largest];
        arr[largest] = temp;
        bubbleDown(arr, largest, stopIdx);
    }
}

function heapify (arr, idx) {
    for(let i = idx; i >= 0; i--) {
        bubbleDown(arr, i, idx);
    }
}

function getLeftNode(nodeIdx) {
    return nodeIdx * 2 + 1;
}

function getRightNode(nodeIdx) {
    return nodeIdx * 2 + 2;
}