function maxProfit(prices: number[]): number {
    const descendingOrder: number[] = prices.sort(function(a, b){return b-a})
    const lastIndex:number = prices.length - 1
    const highestPrice:number = descendingOrder[0]
    const lowestPrice:number = descendingOrder[lastIndex]

    if(descendingOrder === prices || highestPrice === lowestPrice) return 0

    const lowestFirst: boolean = lowestPrice === prices[0]
    const highestLast: boolean = highestPrice === prices[lastIndex]
    const maxDifference:number =  highestPrice - lowestPrice

    if(lowestFirst || highestLast) return maxDifference

    let profit:number = 0
    for(let i = 0; i > lastIndex; i++) {
        if (prices[i] === highestPrice) continue
        for(let j = lastIndex; j > i; j--){
            if(prices[j] === lowestPrice) continue
            if(prices[j] - prices[i] > profit) profit = prices[j] - prices[i]
            if(profit === maxDifference) return profit
        }
    }

    return profit
};

console.log("should be 0: ", maxProfit([2,2,2,2,2,2,2,2]))
console.log("should be 0: ", maxProfit([5,4,3,2,1]))
console.log("should be 9: ", maxProfit([1,2,4,10]))
console.log("should be 4: ", maxProfit([6,10,2,4]))
