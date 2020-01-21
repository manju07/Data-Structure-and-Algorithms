'use strict';
function countPairsDivideOneElement(array) {
    let hm = new Map();
    let maxValue = -Infinity;
    let countPairs = 0;
    for (let index = 0; index < array.length; index++) {
        if (maxValue < array[index]) maxValue = array[index];
        hm.set(array[index]);
    }
    for (let index = 0; index < array.length; index++) {
        let multiply = 2;
        let k = array[index] * multiply;
        while (k <= maxValue) {
            if (hm.has(k)) countPairs++;
            k = array[index] * (++multiply);
        }
    }
    return countPairs;
}
let array = [1, 2, 3];
console.log('Number of pairs that one element of pair divides other = ', countPairsDivideOneElement(array));