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

function BSTtoGreaterSum(root, sumObj) {
    if (root == null) return null;
    BSTtoGreaterSum(root.rightNode, sumObj);
    let tempData = sumObj.sum;
    sumObj.sum = sumObj.sum + root.data;
    root.data = tempData;
    BSTtoGreaterSum(root.leftNode, sumObj);

}

function inorderDisplay(root, inOrderArr) {
    if (root == null) return;
    inorderDisplay(root.leftNode, inOrderArr);
    inOrderArr.push(root.data);
    inorderDisplay(root.rightNode, inOrderArr);
}

let tree = null;
tree = insertionOfk(tree, 4);
tree = insertionOfk(tree, 2);
tree = insertionOfk(tree, 3);
tree = insertionOfk(tree, 1);
tree = insertionOfk(tree, 6);
tree = insertionOfk(tree, 5);
tree = insertionOfk(tree, 7);
//  Inorder display
let inOrderArr = [];
inorderDisplay(tree, inOrderArr);
console.log('Tree Inorder - ', inOrderArr.join(', '));

let sumObj = { sum: 0 };
BSTtoGreaterSum(tree, sumObj);

//  Inorder display
inOrderArr = [];
inorderDisplay(tree, inOrderArr);
console.log('Greater Sum Tree Inorder - ', inOrderArr.join(', '));