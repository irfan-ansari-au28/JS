const compress = (str) => {
    let result = "";

    let i = 0;
    let j = 0;

    while (j <= str.length) {
        if (str[i] === str[j]) {
            j += 1;
        } else {
            const num = j - i;

            if (num === 1) {
                result += str[i];
            } else {

                result += num + str[i];
            }

            i = j;
        }
    }

    return result;
}

console.log(compress("fffggggggtggkkl"));