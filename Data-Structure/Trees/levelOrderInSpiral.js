'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}
function levelOrderTraversalLineByLine(root) {
    if (root == null) return;
    let queue = [];
    queue.push(root);
    queue.push(null);
    let output = '';
    while (queue.length != 0) {
        let temp = queue.shift();
        if (temp == null) {
            console.log(output);
            output = '';
            if (queue.length == 0) break;
            queue.push(null);
        } else {
            output = output + temp.data + ' ';
            if (temp.leftNode) queue.push(temp.leftNode)
            if (temp.rightNode) queue.push(temp.rightNode)
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
levelOrderTraversalLineByLine(tree);

