function getLengthOfThreeWords(word1, word2, word3) {
    let sumOfWords = (word1.length + word2.length + word3.length);
    return sumOfWords;
  }


  //Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.

  var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14