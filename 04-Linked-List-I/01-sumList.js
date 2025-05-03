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

const head = node1;

// Link the nodes
node1.next = node2;
node2.next = node3;

console.log(node1); // The head of the list: Node { val: 5, next: Node { val: 10, next: [Node] } }


// --------------------------------------------------------------------------

// Recursive Approach

const sumList = (head) => {
  if (head === null) return 0;

  return head.val + sumList(head.next);

}

console.log(sumList(head)) // -> 30


// By iteration

const sumList2 = (head) => {
  let sum = 0;
  let curr = head;

  while (curr !== null) {
    sum += curr.val;

    curr = curr.next;
  }

  return sum
}

console.log(sumList2(head)) // -> 30