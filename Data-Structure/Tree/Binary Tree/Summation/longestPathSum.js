'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}
function longestPathSum(root, sum, length, longestSumObj, longestLengthObj) {
    if (root == null) return;
    sum = sum + root.data;
    length++;
    if (root.leftNode == null && root.rightNode == null) {
        if (length >= longestLengthObj.pathLength) {
            longestSumObj.pathSum = sum;
            longestLengthObj.pathLength = length;
        }
    }
    longestPathSum(root.leftNode, sum, length, longestSumObj, longestLengthObj);
    longestPathSum(root.rightNode, sum, length, longestSumObj, longestLengthObj);
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

tree.rightNode.rightNode.rightNode.leftNode = new Node(21);

tree.leftNode.leftNode.rightNode.leftNode = new Node(4);
tree.leftNode.leftNode.rightNode.leftNode.leftNode = new Node(2);

//             1
//         /       \
//       2           3
//     /   \       /   \
//    4     5     6      7
//   / \   / \   / \    / \
//  8  9  10 11 12 13 14   15
//    /                    /
//   4                   21
//    \
//     2  
let longestSumObj = { pathSum: 0 };
let longestLengthObj = { pathLength: 0 };
longestPathSum(tree, 0, 0, longestSumObj, longestLengthObj);
console.log('Longest path sum is ->', longestSumObj.pathSum)
console.log('Longest path length is ->', longestLengthObj.pathLength)