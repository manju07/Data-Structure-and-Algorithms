'use strict';
function findPivotPoint(arr) {
    let low = 0,
        high = arr.length - 1;
    while (low < high) {
        if (low == high) return low;
        let m = parseInt((low + high) / 2);
        if (m < high && arr[m] > arr[m + 1]) return m;
        else if (m > low && arr[m] < arr[m - 1]) return m - 1;
        else if (arr[low] >= arr[m]) high = m - 1;
        else low = m + 1;
    }
    return -1;
}

function searchK(arr, low, high, k) {
    while (low <= high) {
        let m = parseInt((low + high) / 2);
        if (arr[m] == k) return m;
        else if (arr[m] < k) low = m + 1;
        else if (arr[m] > k) high = m - 1;
    }
    return -1;
}

function searchInRotatedArray(arr, k) {
    let pivot = findPivotPoint(arr)
    if (pivot == -1) return searchK(arr, 0, arr.length - 1, k);
    if (k == arr[pivot]) return pivot;
    if (k >= arr[0] && k < arr[pivot]) {
        return searchK(arr, 0, pivot, k);
    } else {
        return searchK(arr, pivot + 1, arr.length - 1, k);
    }
}

let arr = [6, 7, 8, 9, 10, 11, 12, 30, 1, 2, 3, 4, 5];
let k = 30;
let index = searchInRotatedArray(arr, k);
if (index == -1) {
    console.log(k + ' not found');
} else {
    console.log(k + ' found at index ' + index);
}