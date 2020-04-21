function findElement (arr, test) {
    let num = 0;
    for (let i = 0; i < arr.length; i++){
        num = arr[i];
        if(test(num)){
            return num;
        }
    }
    return undefined
}

//console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0))

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);

/*Create a function that looks through an array (first argument) and returns the first element 
in the array that passes a truth test (second argument). If no element passes the test, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/