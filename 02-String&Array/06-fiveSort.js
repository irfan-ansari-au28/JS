const fiveSort = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[right] === 5) right--;
        if (arr[left] !== 5) {
            left++
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return (arr);
}

console.log(fiveSort([2, 1, 5, 8, 5, 5, 9, 8, 5]));