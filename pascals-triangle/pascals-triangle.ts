/*
    Time Complexity - O(n)
    Build triangle from bottom to top row. Go through every row once.
    
    Space Complexity - O(n)
    Pascal's triangle returned as an array. Output grows linearly with input.
*/

function generate(numRows: number): number[][] {
    let triangle = [];
    triangle[0] = [1];
    for(let i = 1; i < numRows; i++) {
        let row = [];
        for(let j = 0; j < i + 1; j++) {
            let num = pascalSum(triangle, i, j);
            row.push(num);
        }
        triangle.push(row);
    }
    
    return triangle
    
    function pascalSum(triangle, currRow:number, idx:number):number {
        let prevRow:number[] = triangle[currRow-1];
        let num1:number = idx - 1 < 0 ? 0 : prevRow[idx - 1];
        let num2:number = idx > prevRow.length - 1 ? 0 : prevRow[idx];
        return num1 + num2;
    }
};