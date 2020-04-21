function getElementsUpTo(array, n) {
    let elementArr = []
    for ( let i = 0; i < n; i++){
        elementArr.push(array[i]);
    }
    return elementArr; 
  }


  var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']

/*Given an array and a index, "getElementsUpTo", returns an 
array with all the elements up until, but not including, the 
element at the given index.*/