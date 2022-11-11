function isPalindrome(s: string): boolean {
    return s.replace(/[^a-z0-9]/gi, '').toLowerCase().split("").reverse().join("") === s.replace(/[^a-z0-9]/gi, '').toLowerCase()
};

console.log("true: ", isPalindrome("poop"))
console.log("false: ", isPalindrome("rina"))
console.log("true: ", isPalindrome("A man, a plan, a canal: Panama"))