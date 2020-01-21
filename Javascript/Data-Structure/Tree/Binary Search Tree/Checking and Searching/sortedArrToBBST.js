'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function constructBBST(arr, startIndex, endIndex) {
    if (startIndex > endIndex) return null;
    if (startIndex == endIndex) return new Node(arr[startIndex]);
    let midIndex = parseInt((startIndex + endIndex) / 2);
    let temp = new Node(arr[midIndex]);
    temp.leftNode = constructBBST(arr, startIndex, midIndex - 1);
    temp.rightNode = constructBBST(arr, midIndex + 1, endIndex);
    return temp;
}

function inorderDisplay(root, inOrderArr) {
    if (root == null) return;
    inorderDisplay(root.leftNode, inOrderArr);
    inOrderArr.push(root.data);
    inorderDisplay(root.rightNode, inOrderArr);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 10, 20];
let tree = constructBBST(arr, 0, arr.length - 1);
let inOrderArr = []
inorderDisplay(tree, inOrderArr);
console.log('Inorder Display - ', inOrderArr.join(', '));