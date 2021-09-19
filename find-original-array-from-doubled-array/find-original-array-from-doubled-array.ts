/*
    Time Complexity - O(nlogn)
    O(nlogn + n) --> O(nlogn), sort is nlogn and an adjacent for loop
    
    Space Complexity - O(n)
    Use map to store count of nums and an array to store doubled numbers.
*/

function findOriginalArray(changed: number[]): number[] {
    if(changed.length % 2 !== 0) return []
    let map = new Map();
    let res = [];
    changed.sort((a,b) => a-b);
    for(let i = 0; i < changed.length; i++) {
        let num = changed[i];
        if(map.has(num/2)) {
            let val = map.get(num/2);
            if(val === 1) {
                map.delete(num/2)
            } else {
                map.set(num/2, val - 1);
            }
            res.push(num/2)
        } else if(map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    return map.size === 0 ? res : []
};