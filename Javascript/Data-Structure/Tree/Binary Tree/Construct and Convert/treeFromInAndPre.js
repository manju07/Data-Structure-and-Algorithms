'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function findIndexInInOrder(inOrder, data, startIndex, endIndex) {
    for (let index = startIndex; index <= endIndex; index++) {
        if (inOrder[index] == data) return index;
    }
    return -1;
}

function constructTree(preOrder, preIndexObj, inOrder, startIndex, endIndex) {
    if ((startIndex > endIndex) || (preIndexObj.index >= preOrder.length)) return null;
    let temp = new Node(preOrder[preIndexObj.index++]);
    if (startIndex == endIndex) return temp;
    let inIndex = findIndexInInOrder(inOrder, temp.data, startIndex, endIndex);
    temp.leftNode = constructTree(preOrder, preIndexObj, inOrder, startIndex, inIndex - 1);
    temp.rightNode = constructTree(preOrder, preIndexObj, inOrder, inIndex + 1, endIndex);
    return temp;
}

function postOrderDisplay(root, postOrderArr) {
    if (root == null) return;
    postOrderArr.push(root.data);
    postOrderDisplay(root.leftNode, postOrderArr);
    postOrderDisplay(root.rightNode, postOrderArr);
}

let inOrder = [4, 2, 5, 1, 3];
let preOrder = [1, 2, 4, 5, 3];
let preIndexObj = { index: 0 };
let tree = constructTree(preOrder, preIndexObj, inOrder, 0, inOrder.length);
let postOrderArrResult = []
postOrderDisplay(tree, postOrderArrResult);
console.log('In Order Display ->', inOrder.join(', '));
console.log('Pre Order Display->', preOrder.join(', '));
console.log('PostOrder Display->', postOrderArrResult.join(', '));