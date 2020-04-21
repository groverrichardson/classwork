function computeFactorialOfN (num){
    let factorial = 0;
    if (num === 0 || num === 1){
        factorial = 1;
    } else if (num > 0){
        for (let i = 1; i <= num; i++){
            factorial = i * (i + 1);
            i++;
            console.log(factorial);
        }
    }
    return computeFactorialOfN;
}



var output = computeFactorialOfN(3.2);
//console.log(output); // --> 6

var output = computeFactorialOfN(4);
//console.log(output); // --> 24

/* Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.*/