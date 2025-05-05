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

const depthFirstValueRecursive = (root) => {
    if (root === null) return [];

    const leftValues = depthFirstValueRecursive(root.left); // [b, d, e]
    const rightValues = depthFirstValueRecursive(root.right); // [c, f]

    return [root.val, ...leftValues, ...rightValues];

}

console.log(depthFirstValueRecursive(root));


// Iterative Approach

const depthFirstValue = (root) => {
    // Edge case
    if (root !== null) return [];

    const stack = [root];
    const result = [];

    while (stack.length > 0) {
        const curr = stack.pop();
        result.push(curr.val);

        // Mind Orders matter here
        if (curr.right !== null) stack.push(curr.right);
        if (curr.left !== null) stack.push(curr.left);
    }

    return result;
}

// console.log(depthFirstValue(root));

