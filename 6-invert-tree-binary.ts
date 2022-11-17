 class TreeNodeX {TreeNodeX
         val: number
         left: TreeNodeX | null
         right: TreeNodeX | null
         constructor(val?: number, left?: TreeNodeX | null, right?: TreeNodeX | null) {
             this.val = (val===undefined ? 0 : val)
             this.left = (left===undefined ? null : left)
             this.right = (right===undefined ? null : right)
         }
     }

function invertTree(root: TreeNodeX | null): TreeNodeX | null {
    if (!root) return null;
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);
    return root;
};