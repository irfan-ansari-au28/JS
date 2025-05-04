class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);

const printList = (head) => {
    const values = [];
    while (head !== null) {
        values.push(head.val);
        head = head.next;
    }
    console.log(values.join(' -> '));
};

printList(head1);

const head2 = new Node(6);
head2.next = new Node(7);


printList(head2)

// Recursive Approach;

const zipperListRecursive = ( head1, head2) => {
    if(head1 === null) return head2;
    if(head2 === null) return head1;

    let next1 = head1.next; // Save next node of list1
    let next2 = head2.next; // Save next node of list2

    head1.next = head2; // Point head1 to head2
    head2.next = zipperListRecursive(next1, next2);

    return head1;
}

const result = zipperListRecursive(head1, head2);
printList(result);

// const zipperList = (head1, head2) => {
//     let curr1 = head1.next;
//     let curr2 = head2;

//     let tail = head1;
//     let count = 0;

//     while (curr1 !== null && curr2 !== null) {
//         if (count % 2 === 0) {
//             tail.next = curr2;
//             curr2 = curr2.next;
//         } else {
//             tail.next = curr1;
//             curr1 = curr1.next;
//         }

//         count += 1;
//         tail = tail.next;

//         if (curr1 === null) tail.next = curr2;
//         if (curr2 === null) tail.next = curr1;

//     }

//     return head1;

// }




// const result = zipperList(head1, head2);
// printList(result); // 1 -> 6 -> 2 -> 7 -> 3 -> 8

