class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(-1);
const b = new Node(6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(6);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    6     -5
//   /  \     \
// -3    6   -13
//     /        \
//    -1         6

const howHigh = (root) => {
    if (root === null) return -1;

    const leftPath = howHigh(root.left);
    const rightPath = howHigh(root.right)

    return 1 + Math.max(leftPath, rightPath);
}

console.log(howHigh(a));