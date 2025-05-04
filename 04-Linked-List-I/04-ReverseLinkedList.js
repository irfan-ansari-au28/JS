class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

console.log(head);

const reverseLinkedList = (head) => {
    let curr = head;
    let prev = null;
    while (curr) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
}

const printNode = (head) => {
    let curr = head;
    let output = "";
    while (curr) {
        output += curr.val + " -> ";
        curr = curr.next;
    }
    console.log(output);
}

// const prev = reverseLinkedList(head);
// printNode(prev);


/// Recursive approach

const reverseLinkedList2 = (head, prev = null) => {
    if (head === null) return prev;

    let next = head.next;
    head.next = prev;

    return reverseLinkedList2(next, head);


}

const result = reverseLinkedList2(head);
printNode(result);