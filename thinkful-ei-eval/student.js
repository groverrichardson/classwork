// This is the only file you will need to edit!
// Follow the instructions to define each function and complete the requirements.

function kmToMiles (km) {
    let miles = km / 1.6;
    result = Math.floor(miles);
    return result;
}

function countLetters (sen, char) {
    let numOfTimes = 0;
    for (let i = 0; i < sen.length; i++){
        if (sen[i] === char){
            numOfTimes++;
        }
    }
    return numOfTimes;
}

function middleElement (items){
    let middleNumber = '';
    if (items.length % 2 === 0){
        let middleIndex = (items.length / 2) - 1;
        middleNumber = items.indexOf(middleIndex);
        console.log(middleNumber);
    } else {

    }
  //  return middleIndex;
}

//middleElement ([2,5,7,10,11,12]);


function rightToVote (person) {
    console.log(typeof person.age)
    if (person.age >= 18){
        return true;
    } else if (person.age < 18) {
        return false;
    } else if (typeof person.age ==! 'number') {
        return 'error'; 
    }
}

rightToVote ({ name: 'elias', age: 18 });

function createStudent (name, city){
    const student = {
        name: name,
        city: city,
        describe: function(){
            return `Hello, I am ${this.name} and I live in ${this.city}.`
        }
    };
    return student;
}


