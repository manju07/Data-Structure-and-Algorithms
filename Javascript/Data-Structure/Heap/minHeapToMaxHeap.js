'use strict';
function maxHeapify(root, n, arr) {
    let largest = root;
    let l = (root * 2) + 1;
    let r = (root * 2) + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest != root) {
        let temp = arr[root];
        arr[root] = arr[largest];
        arr[largest] = temp;
        maxHeapify(largest, n, arr);
    }
}

function constructMaxHeap(arr) {
    for (let index = (arr.length - 2) / 2; index >= 0; index--)
        maxHeapify(index, arr.length, arr);
}

let arr = [3, 5, 9, 6, 8, 20, 10, 12, 18, 9];
console.log('Min Heap - ', arr.join(', '));
constructMaxHeap(arr);
console.log('Max Heap - ', arr.join(', '));