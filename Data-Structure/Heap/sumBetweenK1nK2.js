'use strict';
function minHeapify(arr, rootIndex, n) {
    let smallestIndex = rootIndex;
    let leftIndex = (rootIndex * 2) + 1;
    let rightIndex = (rootIndex * 2) + 2;
    if (leftIndex < n && arr[smallestIndex] > arr[leftIndex]) smallestIndex = leftIndex;
    if (rightIndex < n && arr[smallestIndex] > arr[rightIndex]) smallestIndex = rightIndex;
    if (smallestIndex != rootIndex) {
        let temp = arr[rootIndex];
        arr[rootIndex] = arr[smallestIndex];
        arr[smallestIndex] = temp;
        minHeapify(arr, smallestIndex, n);
    }
}

function findSumBetweenK1nK2(arr, k1, k2) {
    // construct min heap
    for (let index = (arr.length / 2) - 1; index >= 0; index--)
        minHeapify(arr, index, arr.length)

    for (let index = 0; index < k1; index++) {
        minHeapify(arr, 0, arr.length - index);
        let temp = arr[0];
        arr[0] = arr[arr.length - 1 - index];
        arr[arr.length - 1 - index] = temp;
    }
    let sum = 0;
    for (let index = k1; index < (k2 - 1); index++) {
        minHeapify(arr, 0, arr.length - index);
        sum = sum + arr[0];
        let temp = arr[0];
        arr[0] = arr[arr.length - 1 - index];
        arr[arr.length - 1 - index] = temp;
    }
    return sum;
}
//  Sum of elements between k1th and k2th smallest elements
let array = [20, 8, 22, 4, 12, 10, 14];
let k1 = 3, k2 = 6;
// k1th smallest element is 10, k2th smallest element is 20
// and sum between these two elements are [12, 14] = 26
console.log('sum between ' + k1 + ' and ' + k2 + ' smallest elements is = ' + findSumBetweenK1nK2(array, k1, k2))
