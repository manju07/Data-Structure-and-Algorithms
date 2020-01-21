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

function kthMaxInBST(root, countObj, k) {
    if (root == null) return null;
    kthMaxInBST(root.rightNode, countObj, k);
    countObj.count++;
    if (countObj.count == k) {
        console.log(root.data);
        return;
    }
    kthMaxInBST(root.leftNode, countObj, k);
}

let tree = null;
tree = insertInBST(tree, 4);
tree = insertInBST(tree, 2);
tree = insertInBST(tree, 3);
tree = insertInBST(tree, 1);
tree = insertInBST(tree, 6);
tree = insertInBST(tree, 5);
tree = insertInBST(tree, 7);
//      BST
//      4
//    /   \
//   2     6
//  /  \   /  \
// 1    3 5    7 
let countObj = { count: 0 }, k = 6;
console.log(k + ' Maximum In BST is');
kthMaxInBST(tree, countObj, k)