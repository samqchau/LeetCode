/*
    Time Complexity - O(n)
    Number of constant time function executions increase linearly as input size grows.
    
    Space Complexity - O(n)
    Tabulated bottom up approach stores results of all subproblems.
*/

function fib(n: number): number {
    let tab = new Array(n + 1);
    tab[0] = 0; tab[1] = 1;
    for(let i = 2; i <= n; i++) {
        tab[i] = tab[i - 2] + tab [i - 1];
    }
    return tab[n];
};
