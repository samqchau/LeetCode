/*
    Time Complexity - O(logn + k + klogk) --> O(n ** 2)
    Space Complexity - O(k)
*/
function findClosestElements(arr: number[], k: number, x: number): number[] {
    let res = [];
    let r = closestIndex(arr, x);
    let l = r - 1;
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
    let l = 0, r = arr.length - 1;
    while(l < r) {
        let mid = Math.floor(l + (r-l)/2)
        if(arr[mid] >= x) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l
}
