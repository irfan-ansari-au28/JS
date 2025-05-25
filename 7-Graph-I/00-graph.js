const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

// DFS
// const depthFirstPrint = (graph, source) => {
//     const stack = [source];


//     while (stack.length > 0) {
//         const current = stack.pop();
//         console.log(current)

//         for (let neighbor of graph[current]) {
//             stack.push(neighbor);
//         }
//     }


// }

// depthFirstPrint(graph, 'a'); // abdfce

// RECURSIVE

// const depthFirstPrintRecursive = (graph, source) => {
    
//     console.log(source);
//     for(let neighbor of graph[source]){
//         depthFirstPrintRecursive(graph, neighbor);
//     }
// }

// depthFirstPrintRecursive(graph, 'a');

// BFS

const breadthFirstPrint = (graph, source) => {
    const que = [source];

    while(que.length > 0){
        const current  = que.shift();
        console.log(current);

        for(let neighbor of graph[current]){
            que.push(neighbor);
        }
    }
}

breadthFirstPrint(graph, 'a') // acebdf