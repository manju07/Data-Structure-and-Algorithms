'use strict';
function binarySearch(arr, k) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = parseInt((low + high) / 2)
        if (k == arr[mid]) return mid;
        if (k < arr[mid]) high = mid - 1;
        if (k > arr[mid]) low = mid + 1;
    }
    return -1;
}

let k = 8;
let indexOfK = binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k);
if (indexOfK != -1) console.log(k + ' found at index ' + indexOfK);
else console.log(k + ' not found');