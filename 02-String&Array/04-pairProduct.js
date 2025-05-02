const pairProduct = (nums, targetProduct) => {
    const previousNumbers = {};

    for(let i=0; i<nums.length; i++){
        const num = nums[i];
        const complement = targetProduct/num;

        if(complement in previousNumbers){
            return [previousNumbers[complement], i];
        }

        previousNumbers[num] = i;
    }

    return [];
}

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]

console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
