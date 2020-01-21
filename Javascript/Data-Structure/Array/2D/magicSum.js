'use strict';
function constructMagicSumMatrix(n) {
    let matrix = new Array(n);
    for (let index = 0; index < matrix.length; index++)
        matrix[index] = new Array(index);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = -1;
        }
    }
    let i = 0,
        j = parseInt((n / 2)),
        num = 1;
    while (num <= (n * n)) {
        if (i == -1 && j == -1) {
            i = 1;
            j = 0;
        } else {
            if (i == -1) i = n - 1;
            if (j == -1) j = n - 1;
        }
        if (matrix[i][j] != -1) {
            i = i + 2;
            j++;
            continue;
        } else matrix[i][j] = num++;

        i--;
        j--;
    }
    return matrix;
}

function displayMatrix(matrix, n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row = row + matrix[i][j] + ' ';
        }
        console.log(row);
    }
}
let n = 7;
let magicMatrix = constructMagicSumMatrix(n);
displayMatrix(magicMatrix, n);