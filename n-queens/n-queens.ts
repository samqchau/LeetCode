function solveNQueens(n: number): string[][] {
    let solutions = [];
    for(let i = 0; i < n; i++) {
        placeQueen(n, solutions, [{row: i, col: 0}], 1);
    }
    return solutions
};

function validRow (row, queens) {
    for(let i = 0; i < queens.length; i++) {
        let q = queens[i];
        if(row === q.row) return false;
    }
    return true
}

function validDiag(n, row, col, queens) {
    for(let i = 0; i < queens.length; i++) {
        let q = queens[i], r = q.row, c = q.col;
        for(let j = 0; j < n; j++) {
            let top = row - j, bottom = row + j, left = col - j, right = col + j;
            if(
                (r===top && c === left) ||
                (r===bottom && c === left) ||
                (r===top && c === right) ||
                (r===bottom && c === right)
            ) return false
        }
    }
    return true;
}

function placeQueen(n, res, queens = [], col) {
    if(queens.length === n) {
        res.push(generateBoard(n, queens));
        return;
    }
    for(let row = 0; row < n; row++) {
        if(validRow(row, queens) && validDiag(n, row, col, queens))
            placeQueen(n, res, [...queens, {row, col: col}], col + 1);
    }
}

function generateBoard (n, queens) {
    let board = new Array(n).fill(0).map(_ => new Array(n).fill('.'));
    queens.forEach(q => {
        board[q.row][q.col] = 'Q'
    })
    return board.map(row => row.join(''));
}
