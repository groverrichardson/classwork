function truncateString (str, maxLength){
    if (str.length > maxLength){
        let newString = str.slice(0, maxLength - str.indexOf(str));
        let completedStr = `${newString}...`
        return completedStr;
    } else {
        return str;
    }
}



truncateString("A-tisket a-tasket A green and yellow basket", 8);

/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/