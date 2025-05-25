const unCompress = (str) => {
    let result = "";
    const numbers = "0123456789";

    let i=0;
    let j=0;

    while(j < str.length){
        if(numbers.includes(str[j])){
            j += 1;
        }else{
            let count = Number(str.slice(i, j));
            for(let k=0; k<count; k++){
                result += str[j];
            }
            // move the pointers 
            j += 1;
            i = j;
        }
    }

    return result;
}

console.log(unCompress("1f13g7k"));