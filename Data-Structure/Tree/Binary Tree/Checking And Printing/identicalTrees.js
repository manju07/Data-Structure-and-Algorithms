'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function areIdenticalTrees(root1, root2) {
    if (root1 == null && root2 == null) return true;
    if ((root1 != null && root2 != null) && (root1.data == root2.data))
        return (areIdenticalTrees(root1.leftNode, root2.leftNode) && areIdenticalTrees(root1.rightNode, root2.rightNode))
    return false;
}

//  level - 1
let tree1 = new Node(1);

//  level - 2
tree1.leftNode = new Node(2);
tree1.rightNode = new Node(3);

// level - 3 
tree1.leftNode.leftNode = new Node(4);
tree1.leftNode.rightNode = new Node(5);

//  Tree - 2
//  level - 1 
let tree2 = new Node(1);

//  level - 2
tree2.leftNode = new Node(2);
tree2.rightNode = new Node(3);

//  levele -3
tree2.leftNode.leftNode = new Node(4);
tree2.leftNode.rightNode = new Node(5);

//         Tree1 and Tree2
//           1 
//         /    \
//       2       3
//      / \
//     4   5
console.log('Trees are Identical = ', areIdenticalTrees(tree1, tree2));