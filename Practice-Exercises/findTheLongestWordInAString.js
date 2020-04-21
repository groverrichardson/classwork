function findLongestWordLength(str){
    let longestWordLength = 0;
    let sentArray = str.split(' ');
    for (let i = 0; i < sentArray.length; i++){
        if (sentArray[i].length > longestWordLength){
            longestWordLength = sentArray[i].length
        } 
    }
    return longestWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/*Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/