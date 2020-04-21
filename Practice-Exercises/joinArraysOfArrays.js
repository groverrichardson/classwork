function joinArrayOfArrays(arr) {
    let ultimateArr = []
    for (let i = 0; i < arr.length; i++){
        ultimateArr = ultimateArr.concat(arr[i]);
    }
    return ultimateArr;
  }


 // Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

  var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']