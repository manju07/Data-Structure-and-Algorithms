'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.next = this.previous = null;
    }
}

function findPairsSumOfX(list, x) {
    let count = 0;
    let head = list,
        tail = list.previous;
    while (head != tail) {
        let sum = head.data + tail.data;
        if (sum == x) {
            head = head.next;
            tail = tail.previous;
            count++;
            continue;
        } else if (sum > x) tail = tail.previous;
        else if (sum < x) head = head.next;
    }
    return count;
}

function displayList(list) {
    let output = ''
    let temp = list;
    while (temp.next != list) {
        output = output + temp.data + ' ';
        temp = temp.next;
    }
    output = output + temp.data + ' ';
    console.log(output);
}

let list = new Node(1);
list.next = new Node(2);
list.next.previous = list;

list.next.next = new Node(3);
list.next.next.previous = list.next;

list.next.next.next = new Node(4);
list.next.next.next.previous = list.next.next;

list.next.next.next.next = new Node(5);
list.next.next.next.next.previous = list.next.next.next;

list.next.next.next.next.next = new Node(6);
list.next.next.next.next.next.previous = list.next.next.next.next;

list.previous = list.next.next.next.next.next;
list.next.next.next.next.next.next = list;
displayList(list);

let x = 5;
console.log('Pairs of ' + x + ' = ' + findPairsSumOfX(list, x));