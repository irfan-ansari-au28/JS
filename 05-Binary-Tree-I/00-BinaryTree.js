class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new Node("a");
const node1 = new Node("b");
const node2 = new Node("c");
const node3 = new Node("d");
const node4 = new Node("e");
const node5 = new Node("f");

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

node2.left = null;
node2.right = node5;


/*

     a
   /   \
  b     c
 /  \     \
d    e     f


*/      


// Build display tree with position info
function buildTreeLines(node) {
    if (!node) return [[], 0, 0, 0];

    const valStr = node.val.toString();

    const [leftLines, leftWidth, leftStart, leftEnd] = buildTreeLines(node.left);
    const [rightLines, rightWidth, rightStart, rightEnd] = buildTreeLines(node.right);

    const firstLine = [];
    const secondLine = [];

    const nodeWidth = valStr.length;

    const gapSize = 1;
    const totalWidth = leftWidth + gapSize + rightWidth;

    const rootStart = leftWidth;
    const rootEnd = rootStart + nodeWidth;

    firstLine.push(" ".repeat(leftWidth) + valStr + " ".repeat(rightWidth));
    secondLine.push(
        (node.left ? " ".repeat(leftStart) + "/" + " ".repeat(leftWidth - leftStart - 1) : " ".repeat(leftWidth)) +
        " ".repeat(nodeWidth) +
        (node.right ? " ".repeat(rightStart) + "\\" + " ".repeat(rightWidth - rightStart - 1) : " ".repeat(rightWidth))
    );

    const lines = [];
    const maxLines = Math.max(leftLines.length, rightLines.length);

    for (let i = 0; i < maxLines; i++) {
        const leftLine = leftLines[i] || " ".repeat(leftWidth);
        const rightLine = rightLines[i] || " ".repeat(rightWidth);
        lines.push(leftLine + " ".repeat(gapSize) + rightLine);
    }

    return [[firstLine[0], secondLine[0], ...lines], totalWidth, rootStart, rootEnd];
}

function printPrettyTree(node) {
    const [lines] = buildTreeLines(node);
    lines.forEach(line => console.log(line));
}

printPrettyTree(root);