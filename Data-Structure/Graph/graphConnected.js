'use strict';
let arrayList1 = null,
    arrayList2 = null;
let visitedList1 = [], visitedList2 = [];
function addEdge(u, v) {
    arrayList1[u].push(v);
    arrayList2[v].push(u);
}
function dfs1(vertex) {
    visitedList1[vertex] = true;
    for (const item of arrayList1[vertex]) {
        if (!visitedList1[item]) dfs1(item);
    }
}

function dfs2(vertex) {
    visitedList2[vertex] = true;
    for (const item of arrayList2[vertex]) {
        if (!visitedList2[item]) dfs2(item);
    }
}

function checkGraphConnectedOrNot(n) {
    arrayList1 = new Array(n + 1);
    arrayList2 = new Array(n + 1);
    for (let index = 1; index <= n; index++) {
        arrayList1[index] = [];
        arrayList2[index] = [];
        visitedList1[index] = false;
        visitedList2[index] = false;
    }
    addEdge(1, 2);
    addEdge(1, 3);
    addEdge(2, 3);
    addEdge(3, 4);
    dfs1(1);
    dfs2(1);
    for (let index = 1; index <= n; index++) {
        if (visitedList1[index] == false && visitedList2[index] == false) return false;
    }
    return true;
}
let n = 4;
console.log('Graph is connected ? ', checkGraphConnectedOrNot(n));