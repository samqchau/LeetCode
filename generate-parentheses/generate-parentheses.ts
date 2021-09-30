/*
    Time Complexity - O()??
    Space Complexity - O()??
*/

function generateParenthesis(n: number): string[] {
    let res = []
    
    function helper (num, s, open) {
        if(s.length === n * 2) {
            res.push(s);
            return;
        }
        if(num > 0) {
            helper(num-1, s + '(', open + 1);
        }
        if(open > 0) {
            helper(num, s + ')', open - 1);
        }        
    }
    
    helper(n, '', 0);
    return res;
};