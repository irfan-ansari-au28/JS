const twoSum = (nums, targetSum) => {
    // todo
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         console.log(i, j);
    //     }
    // }

    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = targetSum - nums[i]

        if (complement in seen) {
            return [seen[complement], i];
        }

        seen[nums[i]] = i;
    }
    return [];
};

console.log(twoSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
