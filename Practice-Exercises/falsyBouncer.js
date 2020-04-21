function bouncer (arr){
    for (let i = 0; i < arr.length; i++) {
        answer = Boolean.valueOf(arr[i]);
        console.log(answer);
    }
}


bouncer([7, "ate", "", false, 9]);

/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/