/*
    Time Complexity - O(n)
    Space Complexity - O(n)
*/

function longestConsecutive(nums: number[]): number {
    let set = new Set(nums), res = 0;    
    
    for(let num of set) {
        let len = 1;
        while(set.has(num - 1)) {
            num--;
        }
        while(set.has(num+1)) {
            set.delete(num);
            num++; len++;
        }
        res = Math.max(res, len);
    }
    
    return res;
};