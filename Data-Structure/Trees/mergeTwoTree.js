'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function mergeTwoTrees(t1, t2) {
    if(t1 == null) return t2;
    if(t2 == null) return t1;
    t1.data = t1.data + t2.data;
    t1.leftNode = mergeTwoTrees(t1.leftNode, t2.leftNode);
    t1.rightNode = mergeTwoTrees(t1.rightNode, t2.rightNode);
    return t1;
}

function preOrder(root) {
    if(root == null) return;
    preOrder(root.leftNode);
    console.log(root.data);
    preOrder(root.rightNode);
}
//level - 1
let tree1 = new Node(2);

// level - 2
tree1.leftNode = new Node(1);
tree1.rightNode = new Node(4);

// level -3
tree1.leftNode.leftNode = new Node(5);

let tree2 = new Node(3);

tree2.leftNode = new Node(6);
tree2.rightNode = new Node(1);

tree2.leftNode.rightNode = new Node(2);
tree2.rightNode.rightNode = new Node(7);
let mergedTree = mergeTwoTrees(tree1,tree2)
preOrder(mergedTree);