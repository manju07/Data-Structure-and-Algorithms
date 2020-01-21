'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

function printMiddleLevel(slowPointer, fastPointer) {
    if (slowPointer == null || fastPointer == null) return;
    if ((fastPointer.leftNode == null && fastPointer.rightNode == null)) {
        console.log(slowPointer.data);
        return;
    }
    printMiddleLevel(slowPointer.leftNode, fastPointer.leftNode.leftNode);
    printMiddleLevel(slowPointer.rightNode, fastPointer.rightNode.rightNode);

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
//             1
//         /       \
//       2           3
//     /   \       /   \
//    4     5     6      7
console.log('Middle Level Order');
printMiddleLevel(tree, tree);