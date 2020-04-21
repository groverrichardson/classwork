let str = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let strArray = str.split(' ');
const finishedArray = strArray.reduce((accumulator, currentValue) => {
    if (currentValue.length === 3){
        accumulator = `${accumulator} `;
        return accumulator;
    } else {
        let capitalLetter = currentValue[currentValue.length-1].toUpperCase();
        accumulator = `${accumulator}${capitalLetter}`;
        return accumulator; 
    }
}, '');

console.log(finishedArray);