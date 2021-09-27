/*
    Time Complexity - O(n)
    Space Complexity - O(n)
*/

function getRow(rowIndex: number): number[] {
    let currRow:number[] = [1];
    if(rowIndex === 0) return currRow;   
    
    for(let i = 1; i <= rowIndex; i++) {
        let row:number[] = [];
        for(let j = 0; j <= currRow.length; j++) {
            let num:number = calculatePascalSum(currRow, j);
            row.push(num);
        }
        currRow = row;
    }
    
    return currRow
    
    function calculatePascalSum(prevRow, idx):number {
        let num1:number = idx - 1 < 0 ? 0 : prevRow[idx - 1];
        let num2:number = idx > prevRow.length - 1 ? 0 : prevRow[idx];
        return num1 + num2;
    }
};