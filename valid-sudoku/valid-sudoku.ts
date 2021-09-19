/*
    Time Compleixty - O(n^2)
    Functions are currently written for sudoku boards from 1 - 9 and no larger. Changes would have to be made if the board grew. If the board grew, we have two nested for loops so our time complexity grows at n^2.
    
    Space Complexity - O(1)
    We use hashmaps to track the count of numbers in the sudoku board. The maps are the size of rows, cols, and squares.
*/
function isValidSudoku(board: string[][]): boolean {
    
    for(let i = 0; i < 9; i++) {
        if(!checkRow(i) || !checkCol(i) || !checkSquare(i)) return false
    }

    function checkRow(i): boolean {
        let map = {}
        for(let j = 0; j < 9; j++) {
            let char = board[i][j]
            if(map[char]) return false;
            else if(char !== '.') map[char] = 1;
        }
        return true
    }
    
    function checkCol(i): boolean {
        let map = {};
        for(let j = 0; j < 9; j++) {
            let char = board[j][i];
            if(map[char]) return false
            else if( char !== '.') map[char] = 1
        }
        return true
    }
    
    function checkSquare(i): boolean {
        let row:number = Math.floor(i/3) * 3;
        let col:number = i % 3 * 3;
        let map = { };
        for(let j = row; j < row + 3; j++) {
            for(let k = col; k < col + 3; k++) {
                let char = board[j][k];
                if(map[char]) return false
                else if (char !== '.') map[char] = 1
            }
        }
        return true
    }
    return true
};