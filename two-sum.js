function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var targetSecondNumber = target - nums[i];
        if (nums.indexOf(targetSecondNumber) !== -1)
            return [i, nums.indexOf(targetSecondNumber)];
    }
    return [0, 0];
}
;
console.log(twoSum([2, 7, 9, 3], 12));
console.log(twoSum([2, 7, 9, 3, 11, 23, 1251, 5122, 512, 12, 2131, 123], 2256));
