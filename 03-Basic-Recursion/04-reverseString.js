const reverseString = (str) => {
    // if(str.length === 0) return "";

    // const result = str[str.length-1] + reverseString(str.slice(0, -1));
    // return result;

    if(str.length === 0) return "";

    const result = str[str.length-1] + reverseString(str.slice(0,str.length-1));
    return result
}

console.log(reverseString("apple")); // -> elppa


const str = "apple";
let reverse = "";

for(let i=str.length-1; i>=0; i--){
    reverse += str[i];
}

console.log(reverse)