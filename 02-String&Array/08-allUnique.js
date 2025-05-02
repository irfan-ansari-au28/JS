const allUnique = (str) => {
    const set = new Set();
    console.log(set);

    for(let char of str){
        if(set.has(char)) return false;
        set.add(char);
    }
    console.log("Set :", set);
    return true;
}

console.log(allUnique("abcd")); // true
console.log(allUnique("abca")); // false
