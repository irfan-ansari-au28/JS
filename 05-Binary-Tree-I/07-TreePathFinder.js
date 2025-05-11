class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  
  
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  
  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
 //           /  \
  

// const treePathFinder = (root, target) => {
// if(root === null) return null;
// if(root.val === target) return [root.val]

// const leftPath = treePathFinder(root.left, target);
// const rightPath = treePathFinder(root.right, target);

// if(leftPath !== null ){
//     return [...leftPath, root.val];
// }

// if(rightPath !== null){
//     return [...rightPath, root.val];
// }

//     return null;
// } 

// Efficient method

const treePathFinder = (root, target) => {
    const result = treePathFinderHelper(root, target);

    if(result === null){
        return null;
    }else{
        return result.reverse();
    }

}
const treePathFinderHelper = (root, target) => {
if(root === null) return null;
if(root.val === target) return [root.val]

const leftPath = treePathFinder(root.left, target);
const rightPath = treePathFinder(root.right, target);

if(leftPath !== null ){
    leftPath.push(root.val);
    return leftPath;
}

if(rightPath !== null){
    rightPath.push(root.val);
    return rightPath;
}

    return null;
} 


console.log(treePathFinder(a, "e"));