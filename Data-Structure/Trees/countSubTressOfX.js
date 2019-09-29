'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}
function countOfSubTreeOfX(root, x, countObj) {
    if (root == null) return 0;
    let sum = root.data + countOfSubTreeOfX(root.leftNode, x, countObj) + countOfSubTreeOfX(root.rightNode, x, countObj);
    if (sum == x) countObj.count++;
    return sum;
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
tree.rightNode.rightNode = new Node(2);

// level -4
// tree.leftNode.leftNode.leftNode = new Node(8);
// tree.leftNode.leftNode.rightNode = new Node(9);

// tree.leftNode.rightNode.leftNode = new Node(10);
// tree.leftNode.rightNode.rightNode = new Node(11);

// tree.rightNode.leftNode.leftNode = new Node(12);
// tree.rightNode.leftNode.rightNode = new Node(13);

// tree.rightNode.rightNode.leftNode = new Node(14);
// tree.rightNode.rightNode.rightNode = new Node(15);
//             1
//         /       \
//       2           3
//     /   \       /   \
//    4     5     6      2
let countObj = { count: 0 };
let x = 11;
countOfSubTreeOfX(tree, x, countObj);
console.log('Total Subtree of ' + x + ' is ' + countObj.count);