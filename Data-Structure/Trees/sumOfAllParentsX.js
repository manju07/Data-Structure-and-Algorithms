'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}
function sumOfAllParentsOfX(root, x, sumObj) {
    if (root == null) return 0;
    if (root.leftNode == null || root.rightNode == null) return 0;
    if (root.leftNode.data == x || root.rightNode.data == x) sumObj.sum = sumObj.sum + root.data;
    sumOfAllParentsOfX(root.leftNode, x, sumObj)
    sumOfAllParentsOfX(root.rightNode, x, sumObj)
}

//level - 1
let tree = new Node(1);

// level - 2
tree.leftNode = new Node(2);
tree.rightNode = new Node(5);

// level - 3
tree.leftNode.leftNode = new Node(4);
tree.leftNode.rightNode = new Node(5);

tree.rightNode.leftNode = new Node(6);
tree.rightNode.rightNode = new Node(7);

// level - 4
tree.leftNode.leftNode.leftNode = new Node(8);
tree.leftNode.leftNode.rightNode = new Node(9);

tree.leftNode.rightNode.leftNode = new Node(10);
tree.leftNode.rightNode.rightNode = new Node(11);

tree.rightNode.leftNode.leftNode = new Node(12);
tree.rightNode.leftNode.rightNode = new Node(5);

tree.rightNode.rightNode.leftNode = new Node(14);
tree.rightNode.rightNode.rightNode = new Node(5);
//             1
//         /       \
//       2           5
//     /   \       /   \
//    4     5     6      7
//   / \   / \   / \    / \
//  8  9  10 11 12 5 14    5
let sumObj = { sum: 0 };
sumOfAllParentsOfX(tree, 5, sumObj)
console.log('Sum Of All Parents ', sumObj.sum);