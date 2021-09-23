/*
    Time Complexity - O(n)
    -for every word compare the letters to see which one comes first. Words have a maximum length of 20 chars so time complexity is independent from word length.
    
    Space Compelxity - O(1)
    Map is constant size since order.length is always 26
*/
function isAlienSorted(words: string[], order: string): boolean {
    let map = {};
    for(let i = 0; i < order.length; i++) {
        map[order[i]] = i;
    }
    
    for(let i = 0; i < words.length - 1; i++) {
        let word1:string = words[i];
        let word2:string = words[i + 1];
        if(!isInOrder(word1, word2)) return false
    }
    return true
    
    function isInOrder(word1, word2):boolean {
        for(let i = 0; i < word1.length; i++) {
            if(i >= word2.length) return false
            let charCode1:number = map[word1[i]];
            let charCode2:number = map[word2[i]];
            if(charCode1 > charCode2) return false
            else if(charCode1 < charCode2) return true
        }
        return true
    }
};