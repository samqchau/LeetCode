function sortColors(nums: number[]): void {
    let l = 0, r = nums.length - 1, i = 0;
    
    while(i <= r) {
        let n = nums[i]
        if(n === 0) {
            swap(l, i);
            l++;
            i++;
        } else if (n === 2) {
            swap(i, r);
            r--;
        } else {
            i++;
        }
    }

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};