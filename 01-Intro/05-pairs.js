const pairs = (elements) => {
    // todo
    const result = [];

    for (let i = 0; i < elements.length; i++) {
        for (j = i + 1; j < elements.length; j++) {
            result.push([elements[i], elements[j]]);
        }
    }

    return result;

};

console.log(pairs(["cherry", "cranberry", "banana", "blueberry", "lime", "papaya"])); // ->
  // [ 
  //   [ "cherry", "cranberry" ], 
  //   [ "cherry", "banana" ], 
  //   [ "cherry", "blueberry" ], 
  //   [ "cherry", "lime" ], 
  //   [ "cherry", "papaya" ], 
  //   [ "cranberry", "banana" ], 
  //   [ "cranberry", "blueberry" ], 
  //   [ "cranberry", "lime" ], 
  //   [ "cranberry", "papaya" ], 
  //   [ "banana", "blueberry" ], 
  //   [ "banana", "lime" ], 
  //   [ "banana", "papaya" ], 
  //   [ "blueberry", "lime" ], 
  //   [ "blueberry", "papaya" ], 
  //   [ "lime", "papaya" ] 
  // ] 
