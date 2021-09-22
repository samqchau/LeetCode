/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 
    Time Complexity - O(logn)
    We use binary search to eliminate half the elements every time.
    
    Space Complexity - O(1)
    Space independent from input size.
 */


function guessNumber(n: number): number {
    function binarySearch(l:number, r:number) {
        let mid:number = Math.floor(l + (r-l) / 2);
        let response:number = guess(mid)
        if(response === 0) {
            return mid
        } else if (response === -1) {
            return binarySearch(l, mid-1)
        } else {
            return binarySearch(mid+1, r)
        }
    }
    return binarySearch(1, n);
};