import { ListNode } from "./classes";

function hasCycle(head: ListNode | null): boolean {
    let fast: ListNode = head
    let slow: ListNode = head

    while(fast && fast.next){
        fast = fast.next.next
        slow = fast.next

        if(fast === slow) return true
    }

    return false
};

