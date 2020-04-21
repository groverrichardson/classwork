function reverseString (str){
    let strArray = str.split('');
    let newArray = [];
    let result = '';
    for (let i = strArray.length - 1; i >= 0; i--){
        newArray.push(strArray[i]);
    }
    result = newArray.join('');
    return result;
}

reverseString("hello");

/*Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/