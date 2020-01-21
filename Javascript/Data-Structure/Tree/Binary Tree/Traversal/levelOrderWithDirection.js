'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}
function levelOrderTraversalWithDirection(root) {
    if (root == null) return;
    let stack1 = [root];
    let stack2 = [];
    while (stack1.length != 0 || stack2.length != 0) {
        let levelElements = '';
        while (stack1.length != 0) {
            let temp = stack1.pop();
            if (temp.rightNode) stack2.push(temp.rightNode);
            if (temp.leftNode) stack2.push(temp.leftNode);
            levelElements = levelElements + temp.data + ' ';
        }
        console.log(levelElements);
        levelElements = '';
        while (stack2.length != 0) {
            let temp = stack2.pop();
            if (temp.leftNode) stack1.push(temp.leftNode);
            if (temp.rightNode) stack1.push(temp.rightNode);
            levelElements = levelElements + temp.data + ' ';
        }
        console.log(levelElements);
    }
}
//level - 1
let tree = new Node(1);

// level - 2
tree.leftNode = new Node(2);
tree.rightNode = new Node(3);

// level -3
tree.leftNode.leftNode = new Node(4);
tree.leftNode.rightNode = new Node(5);

tree.rightNode.leftNode = new Node(6);
tree.rightNode.rightNode = new Node(7);

// level -4
tree.leftNode.leftNode.leftNode = new Node(8);
tree.leftNode.leftNode.rightNode = new Node(9);

tree.leftNode.rightNode.leftNode = new Node(10);
tree.leftNode.rightNode.rightNode = new Node(11);

tree.rightNode.leftNode.leftNode = new Node(12);
tree.rightNode.leftNode.rightNode = new Node(13);

tree.rightNode.rightNode.leftNode = new Node(14);
tree.rightNode.rightNode.rightNode = new Node(15);
//             1
//         /       \
//       2           3
//     /   \       /   \
//    4     5     6      7
//   / \   / \   / \    / \
//  8  9  10 11 12 13 14   15
levelOrderTraversalWithDirection(tree);