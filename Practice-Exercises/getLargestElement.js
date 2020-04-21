function getLargestElement(arr) {
    let largestElement = 0;
    for (let i = 0; i < arr.length; i++){
        if (largestElement < arr[i]){
            largestElement = arr[i];
        }
    }
    return largestElement;
  }


/*Given an array, "getLargestElement" returns the largest number in the given array.

Notes:
* It should return 0 if the array is empty.*/

var output = getLargestElement([5, 15, 8, 3]);
console.log(output); // --> 8;