class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function countNodesInLoop(list) {
    let temp = list;
    let count = 1;
    while (temp.next != list) {
        count++;
        temp = temp.next;
    }
    return count;
}

function checkLoopAndCountNodes(head) {
    if (head == null) return 0;
    let fastPointer = head,
        slowPointer = head;
    while (slowPointer && fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if (slowPointer == fastPointer) return countNodesInLoop(slowPointer);
    }
    return 0;
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
list.next.next.next.next.next = list.next;
let countNodes = checkLoopAndCountNodes(list);
console.log(countNodes != 0 ? " Loop exists and Number of Nodes in Loop is " + countNodes : "Loop doesn't exists");