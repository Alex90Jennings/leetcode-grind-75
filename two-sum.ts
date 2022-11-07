function twoSum(nums: number[], target: number): number[] | void {
    for(let i = 0; i < nums.length; i++){
        let targetSecondNumber: number = target - nums[i]
        for(let j = 0; j < nums.length; j++) {
            if(i === j) continue
            if(nums[j] === targetSecondNumber) return [i, j]
        }
        continue
    }
};
