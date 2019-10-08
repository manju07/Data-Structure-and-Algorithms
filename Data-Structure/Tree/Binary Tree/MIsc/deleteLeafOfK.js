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

function deleteLeaf(root, k) {
    if (root == null) return null;
    root.leftNode = deleteLeaf(root.leftNode, k);
    root.rightNode = deleteLeaf(root.rightNode, k);
    if (root.data == k && isLeaf(root)) return null;
    return root;
}

function preOrderDisplay(root) {
    if (root == null) return null;
    console.log(root.data);
    preOrderDisplay(root.leftNode);
    preOrderDisplay(root.rightNode);
}

//level - 1
let tree = new Node(6);

// level - 2
tree.leftNode = new Node(5);
tree.rightNode = new Node(4);

// level - 3
tree.leftNode.leftNode = new Node(5);
tree.leftNode.rightNode = new Node(5);

tree.rightNode.rightNode = new Node(5);
//             6
//         /       \
//       5           4
//     /   \           \
//    5     5           5
let k = 5;
let newTree = deleteLeaf(tree, k)
preOrderDisplay(newTree);