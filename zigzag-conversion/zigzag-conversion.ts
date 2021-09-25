/*
    Time Complexity - O(n)
    -Iterate through the entire string once
    -Reducer function concatenates strings numRows times. In the worst case, all the rows are used. All the rows can only be used if the string's length is >= numRows, so this is also O(n);
    
    Space Complexity - O(n)
    -Store all chars in string in array of strings - O(n)
*/
function convert(s: string, numRows: number): string {
    if(numRows === 1) return s
    let rows:string[] = new Array(numRows).fill('');
    let i:number = 0; let direction:number = 1; let curr:number = 0;
    while(i < s.length) {
        rows[curr] += s[i];
        i++;
        if(curr === numRows - 1) direction = -1
        else if(curr === 0) direction = 1
        curr += direction;
    }
    return rows.reduce((acc, val) => {return acc + val}, '')
};