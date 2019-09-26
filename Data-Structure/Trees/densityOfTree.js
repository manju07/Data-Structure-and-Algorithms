'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function findSizeAndHeight(root, totalCount) {
    if (root == null) return 0;
    let leftHeight = 0,
        rightHeight = 0;
    if (root.leftNode)
        leftHeight = findSizeAndHeight(root.leftNode, totalCount);
    if (root.rightNode)
        rightHeight = findSizeAndHeight(root.rightNode, totalCount);
    totalCount.count++;
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
}

function findDensityOfTree(root) {
    let totalCount = {
        count: 0
    };
    let maxHeight = findSizeAndHeight(root, totalCount);
    return (totalCount.count / maxHeight);
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
console.log('density of tree', findDensityOfTree(tree));