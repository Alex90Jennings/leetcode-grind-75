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
    return true
};