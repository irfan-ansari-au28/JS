const factorial = (n) => {
    if(n === 0) return 1;
    if(n === 1) return 1;

    const result = n * factorial(n-1);
    return result;
}

console.log(factorial(5)); // -> 120