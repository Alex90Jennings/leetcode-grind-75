class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let i: number = 0
    const searchedNumbers: number[] = []

    function findNode(p: number){
        if(root[i].left === p || root[i].right === p) {
            searchedNumbers.push(root[i].val)
            i = 0
        } else {
            i++
        }
    }

    if(searchedNumbers.includes(p.val) || searchedNumbers.includes(q.val)){
        return p 
    } else {
        findNode(p.val)
        findNode(q.val)
    }
};
