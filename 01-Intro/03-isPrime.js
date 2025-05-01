const isPrime = (n) => {
    // todo
    // A number is divisible by  1 & itself
    // 1 ----------> 16 : factors is always in pair.
    if(n < 2) return false; 

    // for (let i = 2; i < n; i++) {
    //     if (n % i === 0) return false;
    // }

    // optimized
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % 2 === 0) return false;
    }

    return true;
};

console.log(isPrime(2)); // -> true
console.log(isPrime(2048)); // -> false
console.log(isPrime(1)); // -> false)

// -> check till sqrt(n) Maths
