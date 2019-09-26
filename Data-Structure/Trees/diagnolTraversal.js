'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function dignolTraversal(root, distance, hm) {
    if (root == null) return;
    if (hm.has(distance)) {
        let arr = hm.get(distance);
        arr.push(root.data);
        hm.set(distance, arr);
    } else hm.set(distance, [root.data]);

    if (root.leftNode) dignolTraversal(root.leftNode, distance + 1, hm);
    if (root.rightNode) dignolTraversal(root.rightNode, distance, hm);
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
let hm = new Map();
dignolTraversal(tree, 0, hm);
for (const valueArr of hm.values())
    console.log(valueArr.join(','));
