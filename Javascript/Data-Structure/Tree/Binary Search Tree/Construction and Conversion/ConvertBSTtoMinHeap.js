'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function insertionOfk(root, k) {
    if (root == null) return new Node(k);
    if (root.data > k)
        root.leftNode = insertionOfk(root.leftNode, k);
    else if (root.data < k)
        root.rightNode = insertionOfk(root.rightNode, k);
    return root;
}

function inOrder(root, inOrderArr) {
    if (root == null) return;
    inOrder(root.leftNode, inOrderArr);
    inOrderArr.push(root.data);
    inOrder(root.rightNode, inOrderArr);
}

function convertToMinHeap(root, inOrderArr) {
    if (root == null) return;
    root.data = inOrderArr.shift();
    convertToMinHeap(root.leftNode, inOrderArr);
    convertToMinHeap(root.rightNode, inOrderArr);
}

function preOrderDisplay(root, preOrderArr) {
    if (root == null) return;
    preOrderArr.push(root.data);
    preOrderDisplay(root.leftNode, preOrderArr);
    preOrderDisplay(root.rightNode, preOrderArr);
}

let tree = null;
tree = insertionOfk(tree, 4);
tree = insertionOfk(tree, 2);
tree = insertionOfk(tree, 3);
tree = insertionOfk(tree, 1);
tree = insertionOfk(tree, 6);
tree = insertionOfk(tree, 5);
tree = insertionOfk(tree, 7);

//      BST
//      4
//    /   \
//   2     6
//  /  \   /  \
// 1    3 5    7 
let preOrderArr = [];
preOrderDisplay(tree, preOrderArr);
console.log('BST Preorder Display - ', preOrderArr.join(', '));

let inOrderArr = [];
inOrder(tree, inOrderArr);
BSTToMinHeap(tree, inOrderArr);

preOrderArr = [];
preOrderDisplay(tree, preOrderArr);
console.log('Min Heap Preorder Display -', preOrderArr.join(', '));