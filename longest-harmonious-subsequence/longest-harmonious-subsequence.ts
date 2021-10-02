function findLHS(nums: number[]): number {
    let map = {}, res = 0;
    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;
    }
    
    for(let key of Object.keys(map)) {
        let num = Number(key), highestNeighborCount = -Infinity;
        if(map[num - 1]) highestNeighborCount = map[num-1];
        if(map[num + 1] && map[num + 1] > highestNeighborCount) highestNeighborCount = map[num + 1];
        let sequenceLength = highestNeighborCount + map[key]
        sequenceLength > res ? res = sequenceLength : null;
    }
    return res;
};