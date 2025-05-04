class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const head1 = new Node(3);
head1.next = new Node(7);
head1.next.next = new Node(11);

const printList = (head) => {
    const values = [];
    while (head !== null) {
        values.push(head.val);
        head = head.next;
    }
    console.log(values.join(' -> '));
};

printList(head1);

const head2 = new Node(5);
head2.next = new Node(9);


printList(head2)


//---------------------------------------------


// ***Asumption Linked List must be sorted


// recursive approach ;

const mergeListReccursive = (head1, head2) => {
    if(head1 === null && head2 === null) return null;
    if(head1 === null) return head2;
    if(head2 === null) return head1;

    if(head1.val < head2.val){
        const next1 = head1.next;
        head1.next = mergeListReccursive(next1, head2);
        return head1;
    }else{
        const next2 = head2.next;
        head2.next = mergeListReccursive(head1, next2);
        return head2;
    }
}

const result = mergeListReccursive(head1, head2);

// ITerative approach

const mergeList = (head1, head2) => {
    let curr1 = head1;
    let curr2 = head2;

    const dummy = new Node(0); // start point
    let tail = dummy; // use tail to build the list

    while (curr1 !== null && curr2 !== null) {
        if (curr1.val < curr2.val) {
            tail.next = curr1;
            curr1 = curr1.next;
        } else {
            tail.next = curr2;
            curr2 = curr2.next;
        }

        tail = tail.next;
    }

    if (curr1 !== null) tail.next = curr1;
    if (curr2 !== null) tail.next = curr2;

    return dummy.next;
}

// const result = mergeList(head1, head2);
printList(result);