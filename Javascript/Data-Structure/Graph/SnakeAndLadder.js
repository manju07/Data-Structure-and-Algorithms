'use strict';

function minimumMoves(visited, moves, n) {
    let result = {};
    result.vertex = 0;
    result.distance = 0;
    let queue = [result];
    let temp = null;
    while (queue.length != 0) {
        temp = queue.shift();
        if (result.vertex == n) break;
        for (let index = (temp.vertex + 1); index <= (temp.vertex + 6) && (temp.vertex < n); index++) {
            if (visited[index] == 0) {
                let qEntry = {};
                qEntry.distance = temp.distance + 1;
                visited[index] = 1;
                if (moves[index] != -1) {
                    qEntry.vertex = moves[index];
                } else qEntry.vertex = index;
                queue.push(qEntry);
            }
        }
    }
    return temp.distance;
}

let visited = [];
let moves = [];
let n = 100;
for (let index = 0; index < n; index++) {
    visited[index] = 0;
    moves[index] = -1;
}
// Ladders Positions
moves[2] = 23;
moves[19] = 32;
moves[66] = 82;
moves[17] = 53;

// Snakes Positions
moves[99] = 65;
moves[36] = 18;
moves[74] = 47;
console.log('Minimum number of moves ', minimumMoves(visited, moves, n))