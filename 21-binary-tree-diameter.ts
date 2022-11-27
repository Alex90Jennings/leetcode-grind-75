import { TreeNode } from "./classes";

function diameterOfBinaryTree(root: TreeNode | null): number {
    if(!root) return 0
    let maxDiameter = 0

    const searchSide = (node) => {
        if(!node) return 0

        let left = searchSide(node.left)
        let right = searchSide(node.right)

        maxDiameter = Math.max(left + right, maxDiameter)

        return Math.max(left, right) + 1
    }

    searchSide(root)
    return maxDiameter
};