/*
    Time Complexity - O(nlogn)
    Space Complexity - O(sqrt(n))
*/

function kWeakestRows(mat: number[][], k: number): number[] {
    let powerLevels = []
    for(let i = 0; i < mat.length; i++) {
        let row = mat[i];
        let strength = row.filter(n => n === 1).length;
        powerLevels.push({rowId: i, strength: strength});        
    };
    powerLevels.sort((a,b)=>{return a.strength - b.strength});
    let res = powerLevels.slice(0, k).map(e => e.rowId);
    return res;
};