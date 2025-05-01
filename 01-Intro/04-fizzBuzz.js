const fizzBuzz = (n) => {
    // todo
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            arr.push("fizzbuzz");
        } else if (i % 3 === 0) {
            arr.push("fizz");
        } else if (i % 5 === 0) {
            arr.push("buzz");
        } else {
            arr.push(i);
        }
    }

    return arr;
};

console.log(fizzBuzz(11)) // -> [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11]
