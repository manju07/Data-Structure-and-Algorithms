class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseList(list) {
    let currentNode = null,
        nextNode = null;
    while (list != null) {
        nextNode = list.next;
        list.next = currentNode;
        currentNode = list;
        list = nextNode;
    }
    return currentNode;
}

function displayList(list) {
    let output = ''
    while (list != null) {
        output += list.data + ' ';
        list = list.next;
    }
    console.log(output);
}

let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);
list.next.next.next.next.next = new Node(6);
let head = reverseList(list);
displayList(head);