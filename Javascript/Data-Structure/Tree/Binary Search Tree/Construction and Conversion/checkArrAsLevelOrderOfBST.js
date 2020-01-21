'use strict';
class NodeDetails {
    constructor(data) {
        this.data = data;
        this.min = -Infinity;
        this.max = Infinity;
    }
}

function checkArrAsLevelOrderOfBST(arr) {
    let queue = [new NodeDetails(arr[0])];
    let i = 1;
    while (i < arr.length && queue.length != 0) {
        let temp = queue.shift();
        if (i < arr.length && (arr[i] < temp.data && arr[i] > temp.min)) {
            let leftNode = new NodeDetails(arr[i++]);
            leftNode.max = temp.data;
            leftNode.min = temp.min;
            queue.push(leftNode);
        }
        if (i < arr.length && (arr[i] > temp.data && arr[i] < temp.max)) {
            let rightNode = new NodeDetails(arr[i++]);
            rightNode.min = temp.data;
            rightNode.max = temp.max;
            queue.push(rightNode);
        }
    }
    return i == arr.length ? true : false;
}

let arr = [7, 4, 12, 3, 6, 8, 1, 5, 10]
console.log('Array', arr);
console.log('check Array as Level order traversal of BST ?', checkArrAsLevelOrderOfBST(arr))