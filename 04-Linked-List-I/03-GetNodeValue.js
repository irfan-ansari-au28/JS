class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const head = new Node("a");
head.next = new Node("b");
head.next.next = new Node("c");

console.log(head);

const getNodeValue = (head, index) =>{
    let count = 0;
    let curr = head;

    while(curr !== null){
        if(count === index) return curr.val;
        count++ ;
        curr = curr.next;
    }

    return null;
}


console.log(getNodeValue(head, 2)); // -> "b"

// Recursive approach

const getNodeValue2 = (head, index) => {
    if(head === null) return null;
    if(index === 0) return head.val;

    return getNodeValue2(head.next, index-1);


}

console.log(getNodeValue2(head, 9)); // -> null