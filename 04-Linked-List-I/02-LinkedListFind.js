class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create individual nodes
const head = new Node("a");
head.next = new Node("b");
head.next.next = new Node("c");


console.log(head); 


// --------------------------------------------------------------------------

// Recursive Approach

const LinkedListFind = (head, target) => {
    if (head === null) return false;
    if(head.val === target) return true;

    return LinkedListFind(head.next, target);

}

console.log(LinkedListFind(head, "c")) // -> true


// By iteration

const LinkedListFind2 = (head, target) => {
    let curr = head;

    while (curr !== null) {
        if(curr.val === target) return true;
        curr = curr.next;
    }

    return false;
}

console.log(LinkedListFind2(head, "b")) // -> false