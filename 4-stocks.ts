function maxProfit(prices: number[]): number {
    /*
    const lastIndex:number = prices.length - 1
    let isDescendingOrder:boolean = true
    const descendingOrder: number[] = [...prices]

    for (let k = 0; k < lastIndex; k++) {
        if (descendingOrder[k] < descendingOrder[k + 1]) {
            if (isDescendingOrder) isDescendingOrder = false;
            let temp = descendingOrder[k];
            descendingOrder[k] = descendingOrder[k + 1];
            descendingOrder[k + 1] = temp;
            k = -1;
        }
    }
    if(isDescendingOrder) return 0

    const highestPrice:number = descendingOrder[0]
    const lowestPrice:number = descendingOrder[lastIndex]

    if(descendingOrder === prices || highestPrice === lowestPrice) return 0

    const lowestFirst: boolean = lowestPrice === prices[0]
    const highestLast: boolean = highestPrice === prices[lastIndex]
    const maxDifference:number =  highestPrice - lowestPrice

    if(lowestFirst || highestLast) return maxDifference
*/
    let maxProfit: number = 0;
    let buyAtIndex: number = 0;
    let sellAtIndex: number = 1;
    
    for (let i = 1; i < prices.length; i++) {
      if (prices[buyAtIndex] < prices[sellAtIndex]) {
        const profit: number = prices[sellAtIndex] - prices[buyAtIndex];
        maxProfit = profit > maxProfit ? profit : maxProfit;
      } else {
        buyAtIndex = sellAtIndex;
      }
      sellAtIndex++;
    }
    return maxProfit;
};
