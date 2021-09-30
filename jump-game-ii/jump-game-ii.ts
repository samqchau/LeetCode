/*
    Time Complexity - O(n)
    
    Space Complexity - O(n)
    Memoized solution stores up to n values
    Recursive implicit call stack could be size n
*/

function jump (nums: number[]): number {
    let furthestVisited = 0, jumps = 0, target = 0, n = nums.length - 1;
    
    for(let i = 0; i < n; i++) {
        furthestVisited = Math.max(furthestVisited, i + nums[i]);
        if(i === target) {
            target = furthestVisited;
            jumps++;
        }
    }
    
    return jumps
};