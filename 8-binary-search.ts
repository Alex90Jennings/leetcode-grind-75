function search(nums: number[], target: number): number {
    let n:number = nums.length - 1
    const isTargetCloserToBottom = nums[0] + target < nums[n] - target

    if(isTargetCloserToBottom){
        for(let i = 0; i <= n; i++) {
            if(target < nums[i]) return -1
            if(target === nums[i]) return i
            continue
        }
    } else {
        for(let i = n; i >= 0; i--) {
            if(target > nums[i]) return -1
            if(target === nums[i]) return i
            continue
        }
    }
};
