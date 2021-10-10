/*
    Time Complexity - O(n ^ (target / min candidate))
    
    Space Complexity - O(target / min candidate)
    Map to prevent repeating valid array answers O(target / min candidate)
    Array to store answers
*/

function combinationSum(candidates: number[], target: number): number[][] {
    let res = [];
    function helper(arr = [], sum = 0, ans = {}) {
        if(sum > target) return
        if(sum === target) {
            arr.sort((a,b) => {return a-b});
            let key = arr.join(',')
            if(ans[key]) return
            else {
                res.push(arr);
                ans[key] = true;
                return
            }
        }
        candidates.forEach(n => helper([...arr, n], sum + n, ans));
    }
    helper()
    return res
};