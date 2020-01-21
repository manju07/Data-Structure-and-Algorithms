'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function printPathToNode(root, pathArr, pathIndex, nodeData) {
    if (root == null) return;
    pathArr[pathIndex++] = (root.data);
    if (root.data == nodeData) {
        let pathStr = '';
        for (let index = 0; index < pathIndex; index++) {
            pathStr = pathStr + pathArr[index] + ' ';
        }
        console.log(pathStr);
        return;
    }
    else {
        printPathToNode(root.leftNode, pathArr, pathIndex, nodeData);
        printPathToNode(root.rightNode, pathArr, pathIndex, nodeData);
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

// level - 4
tree.leftNode.leftNode.rightNode = new Node(8);
tree.rightNode.rightNode.leftNode = new Node(10);

//          Tree
//             1
//         /       \
//       2           3
//     /   \       /   \
//    4     5     6      7
//     \                /
//      8              10
let data = 10;
printPathToNode(tree, [], 0, data);