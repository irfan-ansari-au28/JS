class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     /       \
//    -2       -2



const treeMinValue = (root) => {
    if(root === null) return Infinity;

    const leftPath = treeMinValue(root.left);
    const rightPath = treeMinValue(root.right);
    
    return Math.min(root.val, leftPath, rightPath);
}


console.log(treeMinValue(a)); // -> -13