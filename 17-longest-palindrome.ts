function longestPalindrome(s: string): number {
    let sum: number = 0
    let keys: object = {};

    for (const char of s) {
        keys[char] = (keys[char] || 0) + 1;
        if (keys[char] % 2 == 0) sum += 2;
    }

    return s.length > sum ? sum + 1 : sum;
};
