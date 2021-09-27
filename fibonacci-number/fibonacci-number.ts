/*
    Time Complexity - O(n)
    Memoized solution turns reoccuring subproblems into constant lookup.
    
    Space Complexity - O(n)
    Memoized solution requires hash table to store previous results.
*/

function fib(n: number, cache = {}): number {
    if(cache[n] === undefined) {
        if(n === 0) cache[n] = 0
        else if(n < 2) cache[n] = 1
        else {cache[n] = fib(n-1, cache) + fib(n-2, cache)}
    }
    return cache[n]
};