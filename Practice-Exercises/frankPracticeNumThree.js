function oddsAndEvens (nums){
    let evens = [];
    let odds = [];
    for (let i = 0; i < nums.length; i++) {
         if (nums[i] % 2 === 0) {
          evens.push(nums[i]);
        } else {
          odds.push(nums[i]);
        } 
    }
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

oddsAndEvens(nums);



//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array). 
//for each number in the given array, if it is even, it is added to the evens array, if the 
//number is odd, is added to the odds array.