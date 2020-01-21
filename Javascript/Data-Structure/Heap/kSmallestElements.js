'use strict';
function heapify(arr, rootIndex, n) {
    let largetIndex = rootIndex;
    let leftIndex = (rootIndex * 2) + 1;
    let rightIndex = (rootIndex * 2) + 2;
    if (leftIndex < n && arr[largetIndex] < arr[leftIndex]) largetIndex = leftIndex;
    if (rightIndex < n && arr[largetIndex] < arr[rightIndex]) largetIndex = rightIndex;
    if (largetIndex != rootIndex) {
        let temp = arr[rootIndex];
        arr[rootIndex] = arr[largetIndex];
        arr[largetIndex] = temp;
        heapify(arr, largetIndex, n);
    }
}

function kSmallestElements(array, k) {
    // Build Max Heap of size K
    for (let index = parseInt(k / 2) - 1; index >= 0; index--)
        heapify(array, index, k);

    for (let index = k; index < array.length; index++) {
        if (array[0] > array[index]) {
            array[0] = array[index];
            heapify(array, 0, k);
        }
    }
}

let array = [3, 5, 1, 8, 2, 4, 10, 12, 0, 7, 13, 16];
let k = 3;
kSmallestElements(array, k);
let kSmallestElementsStr = '';
for (let index = 0; index < k; index++) {
    if (index == (k - 1))
        kSmallestElementsStr = kSmallestElementsStr + array[index];
    else
        kSmallestElementsStr = kSmallestElementsStr + array[index] + ', ';
}
console.log(k, ' smallest elements are - ', kSmallestElementsStr);
console.log(k + 'th smallest element is - ', array[0]);
