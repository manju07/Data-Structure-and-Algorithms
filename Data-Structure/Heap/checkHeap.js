'use strict';
function checkHeap(arr, root, n) {
    if (root > (parseInt((n - 2) / 2))) return true;
    let left = (root * 2) + 1;
    let right = (root * 2) + 2;
    if (arr[left] < arr[root] && arr[right] < arr[root])
        return checkHeap(arr, left, n) && checkHeap(arr, right, n);

    let result = false;
    if ((left < n && arr[left] > arr[root])) result = false;
    else if (left < n && arr[left] < arr[root]) result = true;

    if (right < n && arr[right] > arr[root]) result = result & false;
    else if (right < n && arr[right] < arr[root]) result = result & false;

    return result;
}
let array = [90, 15, 10, 7, 12, 2, 9, 1, 6];
console.log('Given Array is', checkHeap(array, 0, array.length) == true ? 'Heap' : 'not Heap');