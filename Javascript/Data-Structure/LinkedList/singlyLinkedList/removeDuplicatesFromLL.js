class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function removeDuplicates(list) {
    if (list == null || list.next == null) return list;
    let cur = list,
        head = list,
        temp = list.next;
    while (temp != null) {
        while (temp != null && temp.data == cur.data) temp = temp.next;
        if (temp == null) {
            cur.next = null;
            break;
        } else {
            cur.next = temp;
            cur = temp;
            temp = temp.next;
        }
    }
    return head;
}

function displayList(list) {
    let output = ''
    while (list != null) {
        output += list.data + ' ';
        list = list.next;
    }
    console.log(output);
}

let list = new Node(11);
list.next = new Node(11);
list.next.next = new Node(11);
list.next.next.next = new Node(13);
list.next.next.next.next = new Node(13);
list.next.next.next.next.next = new Node(20);
list.next.next.next.next.next.next = new Node(20);
list.next.next.next.next.next.next.next = new Node(21);
list.next.next.next.next.next.next.next.next = new Node(22);
list.next.next.next.next.next.next.next.next.next = new Node(22);
list = removeDuplicates(list);
displayList(list);