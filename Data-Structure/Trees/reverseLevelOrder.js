'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}
function reverseLevelOrderTraversal(root) {
    if (root == null) return;
    let queue = [root, null];
    let stack = [null, root, null];
    while (queue.length != 0) {
        let temp = queue.shift();
        if (temp == null) {
            if (queue.length > 0) {
                queue.push(null);
                stack.push(null);
            }
        } else {
            if (temp.leftNode) {
                queue.push(temp.leftNode)
                stack.push(temp.leftNode)
            }
            if (temp.rightNode) {
                queue.push(temp.rightNode)
                stack.push(temp.rightNode)
            }
        }
    }
    let levelElements = '';
    while (stack.length != 0) {
        let temp = stack.pop();
        if (temp == null) {
            console.log(levelElements);
            levelElements = '';
        } else levelElements = levelElements + temp.data + ' ';
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
reverseLevelOrderTraversal(tree);