class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new Node("a");

const node1 = new Node("b");
const node2 = new Node("c");
const node3 = new Node("d");
const node4 = new Node("e");
const node5 = new Node("f");

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

node2.left = null;
node2.right = node5;

// Recursive approach

/*

     a
   /   \
  b     c
 /  \     \
d    e     f


*/

// const treeLevelDfs = (root) => {
//     if(root === null) return [];
//     const stack = [{node: root, levelNum: 0}];

//     const levels = [];


//     while(stack.length > 0){
//         const {node, levelNum} =  stack.pop();

//         if(levels.length === levelNum){
//             levels.push([node.val]);
//         }else{
//             levels[levelNum].push(node.val);
//         }

//         if(node.right !== null) stack.push({node: node.right, levelNum: levelNum + 1});
//         if(node.left !== null) stack.push({node: node.left, levelNum: levelNum + 1});
//     }

//     return levels;
// }


// console.log(treeLevelDfs(root));

// BFS

// const treeLevelBfs = (root) => {
//     if(root === null) return ;

//     const que = [{node: root, levelNum: 0}];
//     const levels = [];

//     // using obj
//     const obj = {};

//     while(que.length > 0){
//         const {node, levelNum} = que.shift();

//         if(levels.length === levelNum){
//             levels.push([node.val]);
//         }else{
//             levels[levelNum].push(node.val);
//         }

//         // bfs logic
//         if(node.left !== null) que.push({node: node.left, levelNum: levelNum + 1});
//         if(node.right !== null) que.push({node: node.right, levelNum: levelNum + 1});
//     }

//     return levels;
// }

// console.log(treeLevelBfs(root));

// RECURSIVE 

const treeLevelRecursive = (root) => {
    const levels = [];

    fillLevels(root, levels, 0)

    return levels;
}

const fillLevels = (root, levels, levelNum) => {
    if (root === null) return;

    if (levels.length === levelNum) {
        levels.push([root.val]);
    } else {
        levels[levelNum].push(root.val);
    }

    fillLevels(root.left, levels, levelNum + 1);
    fillLevels(root.right, levels, levelNum + 1);
}

console.log(treeLevelRecursive(root))