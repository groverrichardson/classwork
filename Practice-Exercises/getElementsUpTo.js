function getElementsUpTo (arr, ind){
    let modArr = arr.splice(0, ind);
    console.log(modArr);
    return modArr;
}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']

/* Write a function called "getElementsUpTo".

Given an array and a index, "getElementsUpTo", returns an array with all the elements up 
until, but not including, the element at the given index.

Notes:* In order to do this you should be familiar with the 'splice' method. */