'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function insertInBST(root, data) {
    if (root == null) return new Node(data);
    else if (root.data > data) root.leftNode = insertInBST(root.leftNode, data);
    else root.rightNode = insertInBST(root.rightNode, data);
    return root;
}

function inorderDisplay(root) {
    if (root == null) return;
    inorderDisplay(root.leftNode);
    console.log(root.data);
    inorderDisplay(root.rightNode);
}

function minInBST(root) {
    if (root == null) return null;
    if (root.leftNode == null) return root;
    return minInBST(root.leftNode);
}

let tree = null;
tree = insertInBST(tree, 4);
tree = insertInBST(tree, 2);
tree = insertInBST(tree, 3);
tree = insertInBST(tree, 1);
tree = insertInBST(tree, 6);
tree = insertInBST(tree, 5);
tree = insertInBST(tree, 7);
console.log('Minimum value In BST', minInBST(tree).data);