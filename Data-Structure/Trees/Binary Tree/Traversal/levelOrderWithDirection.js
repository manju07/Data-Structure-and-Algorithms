'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}
function levelOrderTraversalWithDirection(root) {
    if (root == null) return;
    let stack = [];
    stack.push(root);
    let queue = [];
    let leftToRight = true;
    while (stack.length != 0) {
        let levelElements = '';
        while (stack.length != 0) {
            let temp = stack.pop();
            if (leftToRight) {
                if (temp.leftNode) queue.push(temp.leftNode);
                if (temp.rightNode) queue.push(temp.rightNode);
            } else {
                if (temp.rightNode) queue.push(temp.rightNode);
                if (temp.leftNode) queue.push(temp.leftNode);
            }
            levelElements = levelElements + temp.data + ' ';
        }
        console.log(levelElements);
        levelElements = '';
        while (queue.length != 0) {
            let temp = queue.shift();
            if (leftToRight) {
                if (temp.leftNode) stack.push(temp.leftNode);
                if (temp.rightNode) stack.push(temp.rightNode);
            } else {
                if (temp.rightNode) stack.push(temp.rightNode);
                if (temp.leftNode) stack.push(temp.leftNode);
            }
            levelElements = levelElements + temp.data + ' ';
        }
        console.log(levelElements);
        if (leftToRight) leftToRight = false;
        else leftToRight = true;
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