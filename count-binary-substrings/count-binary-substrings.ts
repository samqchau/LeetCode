/*
Time Complexity - O(n)
Space Complexity - O(1)
*/

function countBinarySubstrings(s: string): number {
    let res:number = 0, i:number = 0, char1:string = s[i], char2:string = '', c1:number = 0, c2:number = 0;
    
    while(i < s.length) {
        while(i < s.length && s[i] === char1) {
            c1++;
            i++;
        }
        char2 = s[i];
        while(i < s.length && s[i] === char2) {
            c2++;
            i++;
        }
        res += Math.min(c1, c2);
        c1 = c2;
        c2 = 0;
        char1 = char2;
        char2 = '';
    }
    return res;
};