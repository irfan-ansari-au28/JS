var isAnagram = function (s, t) {
    // Create a HashMap
    // Count the frequency

    // Edge case: if ch of str2 not in HashMap
    // 2. If count < 0 for each char

    const count = {};
    for (let char of s) {
        if (!(char in count)) {
            count[char] = 0;
        }
        count[char] += 1;
    }

    console.log("count : ", count);

    for (let char of t) {
        if (char in count) {
            count[char] -= 1;
        } else {
            return false;
        }
    }

    //     for (let char of t) {
    //     if (count[char] === undefined) {
    //       return false;
    //     } else {
    //       count[char] -= 1;
    //     }
    //   }

    for (let key in count) {
        if (count[key] !== 0) {
            return false;
        }
    }

    console.log(count);
    return true;
};

console.log(isAnagram('monkeyswrite', 'newyorktimes')); // -> true
