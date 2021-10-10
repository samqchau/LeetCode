/*
    Approaches
    Count all elements and store results in hashmap. Iterate over map and return key where count is 1
    Time Complexity - O(n)
    Space Complexity - O(n)
    
    Use the xor bitwise operator
    xor operator returns 1 if one but not both bits are 0.
    if we xor two of the same numbers, the entire byte will return as 0s
    this will result in all the pairs of numbers cancelling out and the only number left will be the one we are looking for
    
    Time Complexity - O(n)
    Space Complexity - O(1)
*/

function singleNumber(nums: number[]): number {
    return nums.reduce((acc, val) => {return acc ^ val})
};