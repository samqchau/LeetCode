/*
    Time Complexity - O(n)
    Space Complexity - O(n)
*/

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let map = {}; let stack = [];
    for(let num of nums2) {
        while(stack.length > 0 && stack[stack.length - 1] < num) {
            map[stack.pop()] = num;
        }
        stack.push(num)
    }
    stack.forEach(num => map[num] = -1)
    return nums1.map(n => map[n])
};