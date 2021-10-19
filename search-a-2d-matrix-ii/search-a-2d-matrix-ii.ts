/*
    Time Complexity - O(mlogn)
    Space Complexity - O(1)
*/

function searchMatrix(matrix: number[][], target: number): boolean {
    let m = matrix.length, n = matrix[0].length;
    let l = 0, r = m - 1;
    while(l < r && matrix[l][n-1] < target) {
        l++;
    }
    while(r > l && matrix[r][0] > target) {
        r--;
    }
    if(l > r) return false
    
    for(let i = l; i <= r; i++) {
        if(binarySearch(matrix[i], target)) return true
    }
    return false
};

function binarySearch(arr, target) {
    let l = 0, r = arr.length - 1;
    while(l <= r) {
        let mid = Math.floor(l + (r-l) / 2);
        let num = arr[mid];
        if(num === target) return true
        else if(num > target) r = mid - 1;
        else l = mid + 1;
    }
    return false
}