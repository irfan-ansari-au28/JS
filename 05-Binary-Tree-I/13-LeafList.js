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

const leafList = (root) => {
    const list = [];

    fillList(root, list)

    return list;
}

const fillList = (root, list) => {
    if (root === null) return;
    if(root.left === null && root.right === null) {
        list.push(root.val);
    }

    fillList(root.left, list);
    fillList(root.right, list)
}

console.log(leafList(root));