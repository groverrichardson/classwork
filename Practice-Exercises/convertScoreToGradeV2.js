function convertScoreToGradeWithPlusAndMinus (score) {
    let grade = ''; 
    score = score.toString();
    if (score >= 90 && score <= 100) {
        if (score.endsWith(0) || score.endsWith(1) || score.endsWith(2)){
            grade = 'A-';
        } else if (score.endsWith(8) || score.endsWith(9)){
            grade = 'A+';
        } else {
            grade = 'A';
        }
    } else if (score >= 80 && score <= 89) {
        if (score.endsWith(0) || score.endsWith(1) || score.endsWith(2)){
            grade = 'B-';
        } else if (score.endsWith(8) || score.endsWith(9)){
            grade = 'B+';
        } else {
            grade = 'B';
        }
    } else if (score >= 70 && score <= 79) {
        if (score.endsWith(0) || score.endsWith(1) || score.endsWith(2)){
            grade = 'C-';
        } else if (score.endsWith(8) || score.endsWith(9)){
            grade = 'C+';
        } else {
            grade = 'C';
        }
    } else if (score >= 60 && score <= 69) {
        if (score.endsWith(0) || score.endsWith(1) || score.endsWith(2)){
            grade = 'D-';
        } else if (score.endsWith(8) || score.endsWith(9)){
            grade = 'D+';
        } else {
            grade = 'D';
        }
    } else if (score >= 0 && score <= 59){
        grade = 'F';
    } else {
        grade = 'INVALID SCORE';
    }
    return grade;
}

var output = convertScoreToGradeWithPlusAndMinus(64);
console.log(output); // --> 'A-'

/*Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade 
corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
* If the score is between the 8 and 9 (inclusive) of a given range, return the letter with a '+'
* There are is no F+ and there is no F-.*/