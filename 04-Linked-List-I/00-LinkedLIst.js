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


// Print signature

const printList = (head) => {
  const values = [];
  while (head !== null) {
      values.push(head.val);
      head = head.next;
  }
  console.log(values.join(' -> '));
};

printList(node1)
