'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function countNodes(root) {
    if (root == null) return 0;
    return 1 + countNodes(root.leftNode) + countNodes(root.rightNode);
}

function checkSameSizeOfTree(root, count, resObj) {
    if (root == null) return 0;
    let subTreeCount = 1 + checkSameSizeOfTree(root.leftNode, count, resObj)
        + checkSameSizeOfTree(root.rightNode, count, resObj);
    if ((count - subTreeCount) == subTreeCount) resObj.res = true;
    return subTreeCount;
}

//level - 1
let tree = new Node(5);

// level - 2
tree.leftNode = new Node(1);
tree.rightNode = new Node(6);

// level -3
tree.leftNode.leftNode = new Node(3);

tree.rightNode.leftNode = new Node(7);
tree.rightNode.rightNode = new Node(4);
//             5
//         /       \
//       1           6
//     /           /   \
//    3           7      4
let resObj = { res: false };
let count = countNodes(tree);
checkSameSizeOfTree(tree, count, resObj);
console.log(' is there same size of 2 trees by removing an edge? ', resObj.res);