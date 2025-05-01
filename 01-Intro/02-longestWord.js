const longestWord = (sentence) => {
    // todo
     let longest = "";
     const arr = sentence.split(" ");
  
    for(let word of arr){
      if(word.length >= longest.length) longest = word;
    }
  
    return longest;
    
  };

console.log(longestWord("what a wonderful world")); // -> 'wonderful'
console.log(longestWord("have a nice day")); // -> 'nice'
