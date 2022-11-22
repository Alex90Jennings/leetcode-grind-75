function climbStairs(n: number): number {
    if (n < 4) return n

    const fibo: number[] = [0, 1, 2, 3]

    for(let i = 4; i < n; i++) {
        fibo.push((fibo[i - 1] + fibo[i - 2]))
    }

    return fibo[n - 1] + fibo[n - 2]
};
