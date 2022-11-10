function isValid(s: string): boolean {
    let bracketOpen: number[] = []
    let arrayBracketOpen: number[] = []
    let curlyBracketOpen: number[] = []
        
    for(let i = 0; i < s.length; i++){
        if(s[i] === "(") bracketOpen.push(i)
        if(s[i] === ")") {
            if(bracketOpen.length === 0) return false
            const index = bracketOpen.pop()
            if(i - index > 1) {
                for(let j = index; j <= i; j++){
                    if(arrayBracketOpen.includes(j)) return false
                    if(curlyBracketOpen.includes(j)) return false
                }
            }
        }
        if(s[i] === "[") arrayBracketOpen.push(i)
        if(s[i] === "]") {
            if(arrayBracketOpen.length === 0) return false
            const index = arrayBracketOpen.pop()
            if(i - index > 1) {
                for(let j = index; j <= i; j++){
                    if(bracketOpen.includes(j)) return false
                    if(curlyBracketOpen.includes(j)) return false
                }
            }
        }
        if(s[i] === "{") curlyBracketOpen.push(i)
        if(s[i] === "}") {
            if(curlyBracketOpen.length === 0) return false
            const index = curlyBracketOpen.pop()
            if(i - index > 1) {
                for(let j = index; j <= i; j++){
                    if(arrayBracketOpen.includes(j)) return false
                    if(bracketOpen.includes(j)) return false
                }
            }
        }
    }

    if ( bracketOpen.length > 0 || curlyBracketOpen.length > 0 || arrayBracketOpen.length > 0 ) return false
    
    return true
};

console.log(isValid("(){}[]"), " should be true")
console.log(isValid("()}{[]"), " should be false")
console.log(isValid("{(){}[]}"), " should be true")