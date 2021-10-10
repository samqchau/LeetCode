/*
    Approaches
    Sort the array O(nlogn)
    Return the element at index Math.floor(arr.length / 2)

    We can store a running count that increases when we see a repeating candidate, if the number is not the candidate, we decrease the running count and if the running count hits 0 we set a new candidate. After we iterate through the entire array, the majority element will be the candidate. Return the candidate
    
    Time Complexity - O(n)
    Iterate through the numbers array one time
    
    Space Complexity - O(1)
    Space requirements do not grow with input size
*/

function majorityElement(nums: number[]): number {
    let count = 1, candidate = nums[0];
    for(let i = 1; i < nums.length; i++) {
        let n = nums[i];
        if(n === candidate) {count++; continue;}
        else {
            count--;
            if(count === 0) {
                candidate = n;
                count++;
                continue;
            }
        }
    }
    return candidate
};