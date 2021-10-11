function merge(intervals: number[][]): number[][] {
    let res = [intervals[0]], n = intervals.length;
    for(let i = 1; i < intervals.length; i++) {
        let x = intervals[i];
        let merged = false;
        for(let j = 0; j < res.length; j++) {
            let y = res[j];
            if(overlapping(x,y)) {
                let unionRes = union(x,y)
                res[j] = unionRes;
                merged = true;
                break;
            }
        }
        if(!merged) res.push(x);
    }
    if(res.length === n) return res
    return merge(res);
};

function overlapping (x, y):boolean {
    let xCheck = (x[0] >= y[0] && x[0] <= y[1]) || (x[1] >= y[0] && x[1] <= y[1]);
    let yCheck = (y[0] >= x[0] && y[0] <= x[1]) || ((y[1] >= x[0] && y[1] <= x[1]));
    return xCheck || yCheck
}

function union (x, y) {
    let min = Math.min(x[0], y[0]);
    let max = Math.max(x[1], y[1]);
    return [min, max];
}