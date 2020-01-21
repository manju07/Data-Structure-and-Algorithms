'use strict';
class Graph {
    constructor(vertex) {
        this.listArray = new Array(vertex + 1);
        this.visitedArr = new Array(vertex + 1);
        for (let index = 0; index <= vertex; index++) {
            this.listArray[index] = [];
            this.visitedArr[index] = 0;
        }
    }
    addEdge(v, u) {
        this.listArray[v].push(u);
    }

    printAllPaths(source, dest, pathList) {
        this.visitedArr[source] = 1;
        if (source == dest) {
            console.log(pathList);
            this.visitedArr[source] = 0;
            return;
        }
        let list = this.listArray[source];
        for (let index = 0; index < list.length; index++) {
            if (!this.visitedArr[list[index]]) {
                pathList.push(list[index]);
                this.printAllPaths(list[index], dest, pathList);
                pathList.pop();
            }
        }
        this.visitedArr[source] = 0;
    }

}

let g1 = new Graph(4);
g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(0, 3);

g1.addEdge(1, 3);

g1.addEdge(2, 0);
g1.addEdge(2, 1);

let source = 2, dest = 3;
let pathList = [];
pathList.push(source);
g1.printAllPaths(source, dest, pathList)