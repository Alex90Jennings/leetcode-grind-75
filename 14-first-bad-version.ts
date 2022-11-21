const solution = function(isBadVersion: any) {
    return function(n: number): number {
        let high: number = n
        let low: number = 1
        
        while(low<=high) {
            let mid: number = Math.floor((high + low )/ 2)

            if(isBadVersion(mid)) { 
                high = mid - 1 
            } else {
                low = mid + 1
            }
        }
        return low
    };
};