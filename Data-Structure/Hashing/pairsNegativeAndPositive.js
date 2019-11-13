'use strict';
function pairsOfNegativeAndPositives(array) {
    let hm = new Map();
    let resultArray = [];
    for (let index = 0; index < array.length; index++) {
        if (!hm.has(Math.abs(array[index]))) hm.set(Math.abs(array[index]), 1);
        else resultArray.push(Math.abs(array[index]));
    }
    resultArray.sort((a, b) => a - b);
    for (let index = 0; index < resultArray.length; index++) {
        console.log(-resultArray[index], resultArray[index])
    }
}
let array = [4, 8, 9, -4, 1, -1, -8, -9];
console.log('Negative and Positive Pairs are ');
pairsOfNegativeAndPositives(array)