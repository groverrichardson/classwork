let peopleArray = [
    {
        name: 'Brittani',
        jobTitle: 'School Teacher',
        boss: 'Grover',
    },
    {
        name: 'Grover',
        jobTitle: 'CEO',
    },
    {
        name: 'Debra',
        jobTitle: 'Administrator',
        boss: 'Grover',
    },
    ]
    
for (person in peopleArray){
    if (!peopleArray[person].boss) {
        console.log(`${peopleArray[person].jobTitle} ${peopleArray[person].name} doesn't report to anybody.`);
    } else {
    console.log(`${peopleArray[person].jobTitle} ${peopleArray[person].name} reports to ${peopleArray[person].boss}.`);
    }
}