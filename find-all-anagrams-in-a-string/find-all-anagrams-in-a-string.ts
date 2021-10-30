/*
    Time Complexity - O(n)
    Space Complexity - O(1)
*/

function findAnagrams(s: string, p: string): number[] {
    let l = 0, r = 0, map = {}, res = [];
    let count = p.length;

    for(let i = 0; i < p.length; i++) {
        map[p[i]] ? map[p[i]] += 1 : map[p[i]] = 1
    }

    while(r < s.length) {
        if(map[s[r]] > 0) count--;
        map[s[r]]--;
        r++;
        if(count === 0) res.push(l)
        if(r - l == p.length) {
            if(map[s[l]] >= 0) count++;
            map[s[l]]++;
            l++;
        }
    }
    
    return res;
};