import { TreeNode } from "./classes"


function isBalanced(root: TreeNode | null): boolean {
    let heightRight: number = 0
    let heightLeft: number = 0

    let node: TreeNode = root[0]

    function rightSide(node: TreeNode){
        if(node.right){
            heightRight++
            let nextNode: TreeNode = node.right
            rightSide(nextNode)
        } else return
    }

    function leftSide(node: TreeNode){
        if(node.left){
            heightLeft++
            let nextNode: TreeNode = node.left
            leftSide(nextNode)
        } else return
    }

    rightSide(node)
    leftSide(node)

    if(heightLeft - 1 === heightRight || heightLeft + 1 === heightRight || heightLeft === heightRight) return true
    return false
};