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

    dfs(startVertex) {
        this.visitedArr[startVertex] = 1;
        let tList = this.listArray[startVertex];
        for (let index = 0; index < tList.length; index++) {
            if (!this.visitedArr[tList[index]]) this.dfs(tList[index]);
        }
    }

    countTrees() {
        let cTrees = 0;
        for (let index = 1; index < this.visitedArr.length; index++) {
            if (!this.visitedArr[index]) {
                this.dfs(index);
                cTrees++;
            }
        }
        return cTrees;
    }
}

let g1 = new Graph(8);
g1.addEdge(1, 2);
g1.addEdge(1, 3);

g1.addEdge(4, 5);
g1.addEdge(4, 6);

g1.addEdge(7, 8);
console.log('Total Number of trees', g1.countTrees());