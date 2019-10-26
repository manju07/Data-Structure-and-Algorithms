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

function heapSort(array) {
    for (let index = 0; index < array.length; index++)
        heapify(array, index, array.length);

    for (let index = 0; index < array.length; index++) {
        heapify(array, 0, array.length - index);
        let temp = array[0];
        array[0] = array[array.length - 1 - index];
        array[array.length - 1 - index] = temp;
    }
    console.log('Heap Sort - ', array.join(', '));
}

let array = [3, 5, 1, 8, 2, 4, 10, 12];
heapSort(array);