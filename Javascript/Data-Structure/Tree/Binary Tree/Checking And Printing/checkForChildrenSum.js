'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function checkForChildrenSum(root) {
    if (root == null || (root.leftNode == null && root.rightNode == null)) return true;
    let sum = 0;
    if (root.leftNode) sum = root.leftNode.data;
    if (root.rightNode) sum = sum + root.rightNode.data;
    return ((root.data == (sum)) && checkForChildrenSum(root.leftNode) && checkForChildrenSum(root.rightNode))
}


//level - 1
let tree = new Node(10);

// level - 2
tree.leftNode = new Node(8);
tree.rightNode = new Node(2);

// level -3
tree.leftNode.leftNode = new Node(3);
tree.leftNode.rightNode = new Node(5);

tree.rightNode.leftNode = new Node(2);
//             10
//         /       \
//       8           2
//     /   \       /   
//    3     5     2    
console.log(' check for children sum = ', checkForChildrenSum(tree));