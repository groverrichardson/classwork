const hazardWarningCreator = (typeOfWarning) => {
    let warningCounter = 0;
    return function(location){
        warningCounter += 1;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const carOnTheRoad = hazardWarningCreator(`Broken Car`)
const mudSlide = hazardWarningCreator(`Mudslide Ahead`)
rocksWarning('Riverside');
carOnTheRoad('Moreno Valley');
mudSlide('Mall');
rocksWarning('Riverside');
carOnTheRoad('Moreno Valley');
mudSlide('Mall');