const mostFrequentChar = (s) => {
    // todo
    const count = {};

    for(let ch of s){
        if(!(ch in count)){
            count[ch] = 0;
        }
        count[ch] += 1;
    }

    console.log(count);

    let maxFrequency = null;
    let maxCount = count[s[0]];
    for(let ch in count){
      if(count[ch] > maxCount){
          maxCount = count[ch];
          maxFrequency = ch;
      }
    }

    return maxFrequency;
  };



console.log(mostFrequentChar('mississippi')); // -> 'i'
console.log(mostFrequentChar('bookeeper')); // -> 'e'