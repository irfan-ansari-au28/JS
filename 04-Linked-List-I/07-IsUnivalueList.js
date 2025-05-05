class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const head1 = new Node(1);
head1.next = new Node(1);
head1.next.next = new Node(2);

const printList = (head) => {
    const values = [];
    while (head !== null) {
        values.push(head.val);
        head = head.next;
    }
    console.log("Head : ", values.join(' -> '));
};

printList(head1);



//---------------------------------------------

// const removeDuplicateRecursive = (head) => {
//     if(head === null || head.next === null) return head;

//     head.next = removeDuplicateRecursive(head.next);

//     if(head.val === head.next.val){
//         return head.next;
//     }else{
//         return head;
//     }
// }

// const result = removeDuplicateRecursive(head1);
// printList(result);

// Recursive Approach

const isUnivalueListRecursive = (head) => {
    if(head === null || head.next === null) return true;
    if(head.val !== head.next.val) return false;

    return isUnivalueListRecursive(head.next);
}

console.log(isUnivalueListRecursive(head1));


const isUnivalueList = (head) => {
    let curr = head;
    while (curr !== null) {
        if (curr.val !== head.val) {
            return false
        }
        curr = curr.next;
    }


    printList(head);
    return true;
}

// console.log(isUnivalueList(head1)); // -> true