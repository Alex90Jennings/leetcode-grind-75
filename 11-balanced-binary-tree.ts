class TreeNodeY {
    val: number
    left: TreeNodeY | null
    right: TreeNodeY | null
    constructor(val?: number, left?: TreeNodeY | null, right?: TreeNodeY | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function isBalanced(root: TreeNodeY | null): boolean {
    let heightRight: number = 0
    let heightLeft: number = 0

    let nodeRight: TreeNodeY = root[2]
    let nodeLeft: TreeNodeY = root[1]

    function rightSide(node){
        if(node.right){
            heightRight++
            nodeRight = node.right
            rightSide(nodeRight)
        } else return
    }

    function leftSide(node){
        if(node.left){
            heightLeft++
            nodeLeft = node.left
            leftSide(nodeLeft)
        } else return
    }

    rightSide(nodeRight)
    leftSide(nodeLeft)

    if(heightLeft - 1 === heightRight || heightLeft + 1 === heightRight || heightLeft === heightRight) return true
    return false
};