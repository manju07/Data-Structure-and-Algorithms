'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function printAllPaths(root, pathArr, pathIndex) {
    if (root == null) return;
    pathArr[pathIndex++] = (root.data);
    if (root.leftNode == null && root.rightNode == null) {
        let pathStr = '';
        for (let index = 0; index < pathIndex; index++) {
            pathStr = pathStr + pathArr[index] + ' ';
        }
        console.log(pathStr);
    }
    else {
        printAllPaths(root.leftNode, pathArr, pathIndex);
        printAllPaths(root.rightNode, pathArr, pathIndex);
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
printAllPaths(tree, [], 0);