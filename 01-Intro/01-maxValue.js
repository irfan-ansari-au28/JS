const maxValue = (nums) => {
    // todo
    let maximum = -Infinity;

    // for(let num of nums){
    //     if(num > maximum){
    //         maximum = num;
    //     }
    // }

    // more readable

    for(let num of nums){
        if(num > maximum) maximum = num;
    }
    

    return maximum;
    
  };


  console.log(maxValue([4, 7, 2, 8, 10, 9])); // -> 10
  console.log(maxValue([10, 5, 40, 40.3])); // -> 40.3
  console.log(maxValue([-5, -2, -1, -11])); // -> -1

  // -> Initialize max = -Infinity
