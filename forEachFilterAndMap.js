const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const filterResult = turtleMovements.filter(movement => movement[0] > 0 && movement[1] > 0);

const mapResult = turtleMovements.map(movement => movement[0] + movement[1]);

const eachResult = turtleMovements.forEach(movement => {
    console.log(`Movement #1: ${movement[0]}`);
    console.log(`Movement #2: ${movement[1]}`);
})

console.log(filterResult);
console.log(mapResult);