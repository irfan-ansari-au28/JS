class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create individual nodes
const node1 = new Node(5);
const node2 = new Node(10);
const node3 = new Node(15);

// Link the nodes
node1.next = node2;
node2.next = node3;

console.log(node1); // The head of the list: Node { val: 5, next: Node { val: 10, next: [Node] } }
