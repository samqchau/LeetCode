/*
    Time Complexity - O(n^2)
    Iterate over nums array n/2 times.
    
    Space Complexity - O(1)
    Space requirements don't change based on nums array input length
*/

function sumOddLengthSubarrays(arr: number[]): number {
    let sum:number = 0;
    for(let n = 1; n <= arr.length; n += 2) {
        for(let i = 0; i + n <= arr.length; i++ ) {
            for(let j = 0; j < n; j++) {
                sum += arr[i+j]
            }
        }
    }
    return sum
};