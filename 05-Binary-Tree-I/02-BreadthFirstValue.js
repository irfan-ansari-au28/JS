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


// Iterative Approach

const breadthFirstValue = (root) => {
    // Edge case
    if (root === null) return [];

    const que = [root];
    const result = [];

    while (que.length > 0) {
        const curr = que.shift();
        result.push(curr.val);

        // Mind Orders matter here
        if (curr.left !== null) que.push(curr.left);
        if (curr.right !== null) que.push(curr.right);
    }

    return result;
}

console.log(breadthFirstValue(root));

