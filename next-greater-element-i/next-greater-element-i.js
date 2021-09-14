/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 
 Time Complexity - O(n^2)
 Two nested for loops. One iterates through nums1, the other iterates through nums2.
 
 Space Complexity - O(n)
 Use an answers array that is at least as long as nums1.
 
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    for(let i = 0; i < nums1.length; i++) { 
        for(let j = 0; j < nums2.length; j++) {
            if(nums2[j] === nums1[i]) {
                let foundNumber = false;
                for(let k = j + 1; k <= nums2.length; k++) { 
                    if(foundNumber) {break;}
                    else {
                        if(nums2[k] > nums2[j]) {ans.push(nums2[k]); foundNumber = true;}
                    }
                }
                if(!foundNumber) ans.push(-1)
            }
        }
    }
    return ans
};