/*
    Time Complexity - O(n)
    One for loop dependent on the size of the input string. Length of s is guarenteed to be the same length as t. We count all characters in both strings so time is dependent on length n.
    
    Space Complexity - O(1)
    Space requirements are constant. This function only stores a single 26 int array no matter the input.
*/

function minSteps(s: string, t: string): number {
    let n:number = s.length;
    let arr: number[] = new Array(26).fill(0);
    let res: number = 0;
    
    for(let i = 0; i < n; i++) {
        arr[s.charCodeAt(i) - 97]++;
        arr[t.charCodeAt(i) - 97]--;
    }
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) res += arr[i]
    }
    
    return res
};