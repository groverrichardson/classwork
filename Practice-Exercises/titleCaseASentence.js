function titleCase (str) {
    let lowerCaseStr = str.toLowerCase();
    let words = lowerCaseStr.split(' ');
    let newStr = [];
    for (const word of words){
        newWord = word.charAt(0).toUpperCase() + word.substring(1);
        newStr.push(newWord);
    }
    joinTheStr = newStr.join(' ');
    str = joinTheStr.toString(); 
    return str;
}

console.log(titleCase("sHoRt AnD sToUt"));


/*Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/