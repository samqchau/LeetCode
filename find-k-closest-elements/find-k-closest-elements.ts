/*
    Time Complexity - O(n + k + klogk) --> O(n ** 2)
    Space Complexity - O(k)
*/
function findClosestElements(arr: number[], k: number, x: number): number[] {
    let res = [];
    let i = closestIndex(arr, x);
    res.push(arr[i]); k--;
    let l = i - 1, r = i + 1;
    while(k--) {
        if(l >= 0 && r <= arr.length - 1) {
            if(Math.abs(x - arr[l]) <= Math.abs(x - arr[r])) {
                res.push(arr[l]);
                l--;
            } else {
                res.push(arr[r]);
                r++;
            }
        } else if(l >= 0) {
            res.push(arr[l]);
            l--;
        } else {
            res.push(arr[r]);
            r++;
        }
    }
    return res.sort((a,b) => {return a-b})
};

function closestIndex(arr, x) {
    let min = Infinity, minIndex = -1;
    for(let i = 0; i < arr.length; i++) {
        if(Math.abs(x - arr[i]) < min) {
            min = Math.abs(x - arr[i]);
            minIndex = i;
        }
    }
    return minIndex;
}
