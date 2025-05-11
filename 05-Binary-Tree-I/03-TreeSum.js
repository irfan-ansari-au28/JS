

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1


const treeSum = (root) => {
    if(root === null) return 0;
    const leftPath = treeSum(root.left);
    const rightPath = treeSum(root.right);

    return root.val + leftPath + rightPath;
}



console.log(treeSum(a)); // -> 21