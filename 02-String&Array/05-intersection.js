const intersection = (a, b) => {
    // todo
    const result = [];
    // const set = new Set();

    // for(let num of a){
    //     set.add(num);
    // }

    const set = new Set(a);

    for(let num of b){{
        if(set.has(num)){
            result.push(num);
        }
    }}

    return result;

};

console.log(intersection([4,2,1,6], [3,6,9,2,10])); // -> [2,6]
console.log(intersection([0,1,2], [10,11])); // -> []



// SET CONCEPT

const s = new Set();

s.add(1);
s.add(2);
s.add(2); // duplicate, ignored

console.log(s.has(1)); // true
console.log(s.has(3)); // false

s.delete(2);
console.log(s.size); // 1

s.forEach(val => console.log(val)); // logs 1

s.clear();
console.log(s.size); // 0

