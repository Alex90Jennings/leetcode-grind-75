import { ListNode } from "./classes";

function hasCycle(head: ListNode | null): boolean {
    const previousHeads: number[] = []
    let i: number = 0
    
    function forceMethod() {
        const value: number = head[i]
        if(value){
            if(previousHeads.includes(value)) return true
            previousHeads.push(value)
            i++
            forceMethod()
        } else return false
    }

    return forceMethod()
};
