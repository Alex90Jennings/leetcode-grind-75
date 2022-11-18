import { TreeNode } from "./classes"

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
