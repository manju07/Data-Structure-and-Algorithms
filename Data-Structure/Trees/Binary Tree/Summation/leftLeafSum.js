'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function isLeaf(node) {
    if (node == null) return false;
    if (node.leftNode == null && node.rightNode == null) return true;
    return false;
}
function leftLeafSumSolution1(root) {
    let result = 0;
    if (root != null) {
        if (isLeaf(root.leftNode)) result = result + root.leftNode.data;
        else result = result + leftLeafSumSolution1(root.leftNode);
        result = result + leftLeafSumSolution1(root.rightNode);
    }
    return result;
}
function leftLeafSumSolution2(root, flag) {
    if (root == null) return 0;
    let result = 0;
    if (flag && root.leftNode == null && root.rightNode == null) return root.data;
    result = result + leftLeafSumSolution2(root.leftNode, 1);
    result = result + leftLeafSumSolution2(root.rightNode, 0);
    return result;
}

//level - 1
let tree = new Node(1);

// level - 2
tree.leftNode = new Node(2);
tree.rightNode = new Node(3);

// level - 3
tree.leftNode.leftNode = new Node(4);
tree.leftNode.rightNode = new Node(5);

tree.rightNode.leftNode = new Node(6);
tree.rightNode.rightNode = new Node(7);

// level - 4
tree.leftNode.leftNode.leftNode = new Node(8);
tree.leftNode.leftNode.rightNode = new Node(9);

tree.leftNode.rightNode.leftNode = new Node(10);
tree.leftNode.rightNode.rightNode = new Node(11);

tree.rightNode.leftNode.leftNode = new Node(12);
tree.rightNode.leftNode.rightNode = new Node(13);

tree.rightNode.rightNode.leftNode = new Node(14);
tree.rightNode.rightNode.rightNode = new Node(15);
//             1
//         /       \
//       2           3
//     /   \       /   \
//    4     5     6      7
//   / \   / \   / \    / \
//  8  9  10 11 12 13 14   15
console.log(leftLeafSumSolution1(tree));
console.log(leftLeafSumSolution2(tree,0));
