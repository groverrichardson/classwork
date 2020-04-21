const randObj = {
    foo: 'Just', 
    bar: 'A Test', 
    fum: 'To See', 
    quux: 'If This', 
    spam: 'Works',
}

for (key in randObj) {
    const value = randObj[key];
    console.log(`${key}: ${value}`);
}