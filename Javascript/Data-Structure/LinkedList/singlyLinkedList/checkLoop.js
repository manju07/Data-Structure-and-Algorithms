class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function checkLoop(head) {
    if (head == null) return 0;
    let fastPointer = head,
        slowPointer = head;
    while (slowPointer && fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if (slowPointer == fastPointer) return 1;
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
console.log(checkLoop(list) ? " Loop exists" : "Loop doesn't exists");