'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}
function levelOrderTraversalInSpiral(root) {
    if (root == null) return;
    let stack1 = [];
    let stack2 = [];
    stack1.push(root);
    while (stack1.length != 0) {
        while (stack1.length != 0) {
            let temp = stack1.pop();
            if (temp.leftNode) stack2.push(temp.leftNode);
            if (temp.rightNode) stack2.push(temp.rightNode);
            console.log(temp.data);
        }
        while (stack2.length != 0) {
            let temp = stack2.pop();
            if (temp.rightNode) stack1.push(temp.rightNode);
            if (temp.leftNode) stack1.push(temp.leftNode);
            console.log(temp.data);
        }
    }
}

let tree = new Node(1);
tree.leftNode = new Node(2);
tree.rightNode = new Node(3);
tree.leftNode.leftNode = new Node(4);
tree.leftNode.rightNode = new Node(5);
tree.rightNode.leftNode = new Node(6);
tree.rightNode.rightNode = new Node(7);
levelOrderTraversalInSpiral(tree);

