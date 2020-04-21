function repeatString (str, num) {
    let repeatedString = '';
    for (let i = 0; i < num; i++){
        repeatedString = repeatedString.concat(str);
    }
    return repeatedString;
}

//Given a string and a number, "repeatString" returns the given string repeated the given number of times.

var output = repeatString('code', 8);
console.log(output); // --> 'codecodecode'