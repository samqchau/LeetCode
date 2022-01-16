/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let i = intervals.length - 1;
    let removals = 0;
    while(i > 0) {
        let j = i - 1;
        while(j >= 0 && intervals[i][0] < intervals[j][1]) {  
            removals++;
            j--;
        }
        i = j;
    }
    return removals;
};