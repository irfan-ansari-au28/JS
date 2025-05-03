const sumOfLength = (arr) => {
    if(arr.length === 0) return 0;

    const result = arr[0].length + sumOfLength(arr.slice(1));
    return result
}

console.log(sumOfLength(["apple", "banana", "parrot"])); // -> 17