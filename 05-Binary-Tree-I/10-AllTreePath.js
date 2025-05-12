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

const allTreePathRecursive = (root) => {
    if(root === null) return [];
    
    // If it's a leaf node, return a single path with just the node value
    if(root.left === null && root.right === null) return [[root.val]];
    // [[a]]

    const paths = [];

    // [[b,d], [b, e]]
    const leftSubTree = allTreePathRecursive(root.left);
    for(let path of leftSubTree){
        paths.push([root.val, ...path]);
    }


    // [[c,f]]
    const rightSubTree = allTreePathRecursive(root.right)
    for(let path of rightSubTree){
        paths.push([root.val, ...path]);
    }


    return paths;
}

// const allTreePath = (root) => {

//     const stack = [root];

//     while (stack.length > 0) {
//         const curr = stack.pop();

//         if (curr.right !== null) stack.push(curr.right);
//         if (curr.left !== null) stack.push(curr.left);
//     }

//     return path;
// }

const result = allTreePathRecursive(root);

console.log(result);