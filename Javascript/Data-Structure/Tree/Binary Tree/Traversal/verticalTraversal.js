'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}

class DLList {
    constructor(data) {
        this.data = data;
        this.next = this.prev = null;
    }
}

function verticalLineSum(root, doublyList) {
    if (root == null) return;
    doublyList.data = doublyList.data + root.data;
    if (root.leftNode) {
        if (doublyList.prev == null) {
            let tempNode = new DLList(0)
            doublyList.prev = tempNode;
            tempNode.next = doublyList;
        }
        verticalLineSum(root.leftNode, doublyList.prev);
    }
    if (root.rightNode) {
        if (doublyList.next == null) {
            let tempNode = new DLList(0)
            doublyList.next = tempNode;
            tempNode.prev = doublyList;
        }
        verticalLineSum(root.rightNode, doublyList.next);
    }
}

function displayList(list) {
    let count = 1;
    while (list != null) {
        console.log('Line ' + count + ' sum -> ' + list.data + ' ');
        list = list.next;
        count++;
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
let doublyList = new DLList(0);
verticalLineSum(tree, doublyList);
while (doublyList.prev != null)
    doublyList = doublyList.prev;
displayList(doublyList);