import { ListNode } from "./classes"

function middleNode(head: ListNode | null): ListNode | null {
    let count = 0
    let i

    const dummyHead = new ListNode(null)
    dummyHead.next = head
    let headOne = dummyHead
    let headTwo = dummyHead

    while(headOne.next !== null){
        count++
        headOne = headOne.next
    }

    if(count % 2 === 0){
        count++
    }

    i = 0
    while(i<count/2){
        headTwo = headTwo.next
        i++
    }

    return headTwo
};