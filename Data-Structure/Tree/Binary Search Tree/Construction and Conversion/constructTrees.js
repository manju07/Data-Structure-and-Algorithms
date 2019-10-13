'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function constructTrees(start, end) {
    let list = [];
    if (start > end) {
        list.push(null);
        return list;
    }
    for (let i = start; i <= end; i++) {
        let leftList = constructTrees(start, i - 1);
        let rightList = constructTrees(i + 1, end);
        for (let j = 0; j < leftList.length; j++) {
            let leftNode = leftList[j];
            for (let k = 0; k < rightList.length; k++) {
                let rightNode = rightList[k];
                let temp = new Node(i);
                temp.leftNode = leftNode;
                temp.rightNode = rightNode;
                list.push(temp);
            }
        }
    }
    return list;
}

function preOrderDisplay(root, preOrderArr) {
    if (root == null) return;
    preOrderArr.push(root.data);
    preOrderDisplay(root.leftNode, preOrderArr);
    preOrderDisplay(root.rightNode, preOrderArr);
}

let BSTTrees = constructTrees(1, 3);
let preOrderArr = [];
for (let index = 0; index < BSTTrees.length; index++) {
    preOrderArr = [];
    preOrderDisplay(BSTTrees[index], preOrderArr);
    console.log('preOrder Display - ', preOrderArr.join(' ,'));
}