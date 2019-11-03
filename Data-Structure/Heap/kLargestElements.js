'use strict';
function heapify(arr, rootIndex, n) {
    let smallestIndex = rootIndex;
    let leftIndex = (rootIndex * 2) + 1;
    let rightIndex = (rootIndex * 2) + 2;
    if (leftIndex < n && arr[smallestIndex] > arr[leftIndex]) smallestIndex = leftIndex;
    if (rightIndex < n && arr[smallestIndex] > arr[rightIndex]) smallestIndex = rightIndex;
    if (smallestIndex != rootIndex) {
        let temp = arr[rootIndex];
        arr[rootIndex] = arr[smallestIndex];
        arr[smallestIndex] = temp;
        heapify(arr, smallestIndex, n);
    }
}

function kLargestElements(array, k) {
    // Build Min Heap of size K
    for (let index = parseInt(k / 2) - 1; index >= 0; index--)
        heapify(array, index, k);

    for (let index = k; index < array.length; index++) {
        if (array[0] < array[index]) {
            array[0] = array[index];
            heapify(array, 0, k);
        }
    }
}

let array = [3, 5, 1, 8, 2, 4, 10, 12, 0, 7, 13, 16];
let k = 3;
kLargestElements(array, k);
let kLargestElemetsStr = '';
for (let index = 0; index < k; index++) {
    if (index == (k - 1))
        kLargestElemetsStr = kLargestElemetsStr + array[index];
    else
        kLargestElemetsStr = kLargestElemetsStr + array[index] + ', ';
}
console.log(k, ' largest elements are - ', kLargestElemetsStr);
console.log(k + 'th largest element is - ', array[0]);
