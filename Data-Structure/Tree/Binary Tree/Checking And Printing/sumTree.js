'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function isSumOfTree(root) {
    if (root == null || (root.leftNode == null && root.rightNode == null)) return true;
    if (isSumOfTree(root.leftNode) && isSumOfTree(root.rightNode)) {
        let leftSum = 0, rightSum = 0;
        if (root.leftNode == null)
            leftSum = 0;
        else if (root.leftNode.leftNode == null && root.leftNode.rightNode == null)
            leftSum = root.leftNode.data;
        else
            leftSum = root.leftNode.data * 2;

        if (root.rightNode == null)
            rightSum = 0;
        else if (root.rightNode.leftNode == null && root.rightNode.rightNode == null)
            rightSum = root.rightNode.data;
        else
            rightSum = root.rightNode.data * 2;

        return (root.data == (leftSum + rightSum));
    }
    return false;
}

//level - 1
let tree = new Node(20);

// level - 2
tree.leftNode = new Node(8);
tree.rightNode = new Node(2);

// level -3
tree.leftNode.leftNode = new Node(3);
tree.leftNode.rightNode = new Node(5);

tree.rightNode.leftNode = new Node(2);
//             20
//         /       \
//       8           2
//     /   \       /   
//    3     5     2    
console.log(' Given tree is Sum Of Tree = ', isSumOfTree(tree));