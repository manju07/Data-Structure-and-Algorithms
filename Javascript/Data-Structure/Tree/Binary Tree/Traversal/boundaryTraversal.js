'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function leftBoundary(root, leftBoundaryNodes) {
    if (root == null) return;
    if (root.leftNode) {
        leftBoundaryNodes.push(root.data);
        leftBoundary(root.leftNode, leftBoundaryNodes);
    } else if (root.rightNode) {
        leftBoundaryNodes.push(root.data);
        leftBoundary(root.rightNode, leftBoundaryNodes);
    }
}

function rightBoundary(root, rightBoundaryNodes) {
    if (root == null) return;
    if (root.rightNode) {
        rightBoundary(root.rightNode, rightBoundaryNodes);
        rightBoundaryNodes.push(root.data);
    } else if (root.leftNode) {
        rightBoundary(root.leftNode, rightBoundaryNodes);
        rightBoundaryNodes.push(root.data);
    }
}

function leafNodes(root, leafNodesArr) {
    if (root == null) return null;
    leafNodes(root.leftNode, leafNodesArr);
    if (root.leftNode == null && root.rightNode == null) {
        leafNodesArr.push(root.data);
    }
    leafNodes(root.rightNode, leafNodesArr);
}

function boundaryTraversal(root) {
    let leftBoundaryArr = [];
    let rightBoundaryArr = [];
    let leafNodesArr = [];
    leftBoundary(root.leftNode, leftBoundaryArr)
    leafNodes(root.leftNode, leafNodesArr);
    leafNodes(root.rightNode, leafNodesArr);
    rightBoundary(root.rightNode, rightBoundaryArr);
    console.log(root.data);
    console.log(leftBoundaryArr.join(','));
    console.log(leafNodesArr.join(','));
    console.log(rightBoundaryArr.join(','));
}



//level - 1
let tree = new Node(1);

// level - 2
tree.leftNode = new Node(2);
tree.rightNode = new Node(3);

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
boundaryTraversal(tree);