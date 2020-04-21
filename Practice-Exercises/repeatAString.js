function repeatStringNumTimes(str,num){
    let finalStr = '';
    if (num > 0){
        finalStr = str.repeat(num);
    }
    return finalStr;
}



repeatStringNumTimes("abc", 3);


/*Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/