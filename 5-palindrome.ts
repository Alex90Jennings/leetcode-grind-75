function isPalindrome(s: string): boolean {
    const str:string = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    return str.split("").reverse().join("") === str
};
