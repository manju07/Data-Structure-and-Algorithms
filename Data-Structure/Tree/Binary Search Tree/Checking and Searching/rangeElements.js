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

function rangeElements(root, k1, k2, resultArr) {
    if (root == null) return null;
    if (root.data > k1) rangeElements(root.leftNode, k1, k2, resultArr);
    if (root.data >= k1 && root.data <= k2) resultArr.push(root.data);
    if (root.data < k2) rangeElements(root.rightNode, k1, k2, resultArr);
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
let k1 = 1, k2 = 6;
let resultArr = [];
rangeElements(tree, k1, k2, resultArr);
console.log('Elements between ' + k1 + ' And ' + k2 + ' are - ' + resultArr.join(', '));