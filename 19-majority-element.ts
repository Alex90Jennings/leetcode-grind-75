function majorityElement(nums: number[]): number {
    const sortedArray: number[] = nums.sort()
    const halfArray: number = Math.ceil(sortedArray.length)
    let count: number = 0

    for(let i = 0; i < sortedArray.length; i++){
        if(sortedArray[i] === sortedArray[i]) {
            count++
            if (i > halfArray || count >= halfArray) return sortedArray[i]
        } else {
            count = 0
        }
    }
};