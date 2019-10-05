'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function isSibling(root, a, b) {
    if (root == null) return true;
    return ((root.leftNode && root.rightNode)
        || (root.leftNode.data == a && root.rightNode.data == b)
        || (root.rightNode.data == a && root.leftNode.data == b)
        || isSibling(root.leftNode, a, b)
        || isSibling(root.rightNode, a, b))
}

function findLevel(root, data, level) {
    if (root == null) return 0;
    if (root.data == data) return level;
    let levelResult = findLevel(root.leftNode, data, level + 1);
    if (levelResult != 0) return levelResult;
    return findLevel(root.rightNode, data, level + 1);
}

function isCousin(root, a, b) {
    if (root == null) return false;
    let aLevel = findLevel(root, a, 1);
    let bLevel = findLevel(root, b, 1);
    if (aLevel == bLevel && (isSibling(root, a, b))) return true;
    return false;
}

//level - 1
let tree = new Node(20);

// level - 2
tree.leftNode = new Node(8);
tree.rightNode = new Node(6);

// level -3
tree.leftNode.leftNode = new Node(3);
tree.leftNode.rightNode = new Node(5);

tree.rightNode.leftNode = new Node(2);
//             20
//         /       \
//       8           6
//     /   \       /   
//    3     5     2    
let a = 3, b = 2;
console.log(a + ' and ' + b + ' is cousins = ', isCousin(tree, a, b));