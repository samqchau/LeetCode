var canJump = function(nums) {    
    if(nums.length < 2) return true
    let furthest = nums[0];
    
    for(let i = 0; i <= furthest; i++) {
        furthest = Math.max(i + nums[i], furthest)
        if(furthest >= nums.length - 1) return true
    }
    
    return false
};