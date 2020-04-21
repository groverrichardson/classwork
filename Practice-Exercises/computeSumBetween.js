function computeSumBetween (int1, int2) {
    let sumBetween = 0;
    if (int1 < int2) {
        for (let i = int1; i < int2; i++){
            sumBetween = sumBetween + i;
        }
    }
    return sumBetween;
}




/*Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.

Notes:
* The sum between 1 and 4 is 1 + 2 + 3 = 6.
* If num2 is not greater than num1, it should return 0.*/

var output = computeSumBetween(2, 5);
console.log(output); // --> 9