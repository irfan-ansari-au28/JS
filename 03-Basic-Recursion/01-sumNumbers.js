const sumNumbers = (nums) => {
    if(nums.length === 0) return 0;

    const result = nums[0] + sumNumbers(nums.slice(1));
    return result;
}

console.log(sumNumbers([5, 2, 9, 10])); // -> 26
console.log(sumNumbers([1, -1, 1, -1, 1, -1, 1])); // -> 1
