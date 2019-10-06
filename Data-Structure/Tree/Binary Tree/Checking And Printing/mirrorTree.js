'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function isMirrorTree(root1, root2) {
    if (root1==null && root2==null) return true;
    if ((root1 != null && root2 != null) && (root1.data == root2.data))
        return (isMirrorTree(root1.leftNode, root2.rightNode) && isMirrorTree(root1.rightNode, root2.leftNode))
    return false;
}

//level - 1
let tree = new Node(1);

// level - 2
tree.leftNode = new Node(2);
tree.rightNode = new Node(2);

// level -3
tree.leftNode.leftNode = new Node(3);
tree.leftNode.rightNode = new Node(4);

tree.rightNode.leftNode = new Node(4);
tree.rightNode.rightNode = new Node(3);

//             1
//         /       \
//       2           2
//     /   \       /   \
//    3     4     4      3
console.log('Tree is Mirror Tree = ', isMirrorTree(tree, tree));