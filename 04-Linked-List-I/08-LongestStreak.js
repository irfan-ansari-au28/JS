class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const head1 = new Node(0);
head1.next = new Node(1);
head1.next.next = new Node(1);

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

const longestStreak = (head) => {
    let maxStreak = 0;
    let currStreak = 0;
    let prevNumber = head.val;
    let curr = head;

    while (curr !== null) {
        if (curr.val === prevNumber) {
            currStreak += 1;

        } else {
            prevNumber = curr.val;
            currStreak = 1;
        }

        maxStreak = Math.max(maxStreak, currStreak);

        curr = curr.next;
    }

    return maxStreak;
}

console.log(longestStreak(head1));