// Rotate Array by first D elements
// Input arr= [3,4,6,7,8,10,11], D = 4;
// Output Arr= [8,10,11,3,4,6,7]
// Time Complexity O(n), no extra space

function rotateArray(indexI, indexJ, arr) {
    while (indexI < indexJ) {
        let temp = arr[indexI];
        arr[indexI] = arr[indexJ];
        arr[indexJ] = temp;
        indexI++;
        indexJ--;
    }
}

function rotate(arr, n, d) {
    if (d == 0) return;
    rotateArray(0, d - 1, arr);
    rotateArray(d, n - 1, arr);
    rotateArray(0, n - 1, arr);
}

let arr = [3, 4, 6, 7, 8, 10, 11];
let d = 4;
rotate(arr, arr.length, 4);
console.log(arr.toString());
