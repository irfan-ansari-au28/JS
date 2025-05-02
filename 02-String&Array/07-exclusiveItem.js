// Remove duplicate items as well

const exclusiveItems = (num1, num2) => {
    const set1 = new Set(num1);
    const set2 = new Set(num2);

    const result = [];

    for (let item of set1) {
        if (!set2.has(item)) {
            result.push(item);
        }
    }

    for(let item of set2){
        if(!set1.has(item)) result.push(item);
    }

    return result;
}


console.log(exclusiveItems([1, 2, 3], [3, 4, 5]));
// Output: [1, 2, 4, 5]
