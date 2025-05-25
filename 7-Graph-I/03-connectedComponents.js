

//
// No of edges = n * (n-1) / 2

const connectedComponentsCount = (graph) => {
    // todo
    let count = 0;
    const visited = new Set();

    for (let node in graph) {
        console.log(visited)
        if (hasPath(graph, node, visited) === true) {
            count += 1;
        }
    }

    return count;

};

const hasPath = (graph, current, visited) => {
    if (visited.has(String(current))) return false;

    visited.add(String(current));

    for (let neighbor of graph[current]) {
        hasPath(graph, neighbor, visited)
    }

    return true;
}

console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
})); // -> 2
