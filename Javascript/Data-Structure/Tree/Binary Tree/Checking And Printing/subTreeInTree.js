'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function storePreOrder(root, arr) {
    if (root == null) return;
    arr.push(root.data);
    storePreOrder(root.leftNode, arr);
    storePreOrder(root.rightNode, arr);
}

function storeInOrder(root, arr) {
    if (root == null) return;
    storeInOrder(root.leftNode, arr);
    arr.push(root.data);
    storeInOrder(root.rightNode, arr);
}

function searchString(mainStr, subStr) {
    let mainStrLength = mainStr.length;
    let subStrLength = subStr.length;
    for (let i = 0; i < mainStrLength - subStrLength; i++) {
        if (mainStr[i] == subStr[0]) {
            let j = 0;
            for (; j < subStrLength; j++) {
                if (mainStr[i + j] !== subStr[j]) break;
            }
            if (j == subStrLength) return true;
        }
    }
    return false;
}

function isSubTree(tree1, tree2) {
    if (tree1 == null || tree2 == null) return false;
    let inOrderOfT1 = [];
    let inOrderOfT2 = [];
    storeInOrder(tree1, inOrderOfT1);
    storeInOrder(tree2, inOrderOfT2);
    let inOrderOfT1Str = inOrderOfT1.join(' ');
    let inOrderOfT2Str = inOrderOfT2.join(' ');
    if (!searchString(inOrderOfT2Str, inOrderOfT1Str)) return false;

    let preOrderOfT1 = [];
    let preOrderOfT2 = [];
    storePreOrder(tree1, preOrderOfT1);
    storePreOrder(tree2, preOrderOfT2);
    let preOrderOfT1Str = preOrderOfT1.join(' ');
    let preOrderOfT2Str = preOrderOfT2.join(' ');
    if (!searchString(preOrderOfT2Str, preOrderOfT1Str)) return false;

    return true;
}

//  Tree - 1
//level - 1
let tree1 = new Node('x');

// level - 2
tree1.leftNode = new Node('a');
tree1.rightNode = new Node('b');

// level - 3
tree1.leftNode.rightNode = new Node('c');

// Tree - 2
// level - 1
let tree2 = new Node('z');

// level - 2
tree2.leftNode = new Node('x');
tree2.rightNode = new Node('e');

// level - 3
tree2.leftNode.leftNode = new Node('a');
tree2.leftNode.rightNode = new Node('b');

tree2.rightNode.rightNode = new Node('k');

//  level - 4
tree2.leftNode.leftNode.rightNode = new Node('c');
//         Tree1
//           x 
//         /    \
//       a       b
//        \
//         c
//       Tree2
//           z
//         /   \
//       x      e
//     /    \     \
//   a       b      k
//    \
//     c
console.log(' is Sub Tree ? ', isSubTree(tree1, tree2));