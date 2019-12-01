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

    bfs(startVertex) {
        let queue = [startVertex];
        this.visitedArr[startVertex] = 1;
        let bfsResult = '';
        while (queue.length != 0) {
            let temp = queue.shift();
            bfsResult = bfsResult + temp + ' ';
            let tList = this.listArray[temp];
            for (let index = 0; index < tList.length; index++) {
                if (!this.visitedArr[tList[index]]) {
                    this.visitedArr[tList[index]] = 1;
                    queue.push(tList[index]);
                }
            }
        }
        console.log('BFS ->', bfsResult);
    }
}

let g1 = new Graph(7);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(1, 5);

g1.addEdge(2, 1);
g1.addEdge(2, 4);
g1.addEdge(2, 7);

g1.addEdge(3, 1);
g1.addEdge(3, 6);

g1.addEdge(5, 1);
g1.addEdge(5, 6);

g1.addEdge(6, 3);
g1.addEdge(6, 5);
g1.bfs(1);