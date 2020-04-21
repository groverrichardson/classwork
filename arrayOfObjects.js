let peopleArray = [
{
    name: 'Brittani',
    jobTitle: 'School Teacher',
},
{
    name: 'Grover',
    jobTitle: 'CEO',
},
{
    name: 'Debra',
    jobTitle: 'Administrator',
},
]

for (person in peopleArray){
    console.log(`${peopleArray[person].name} is a ${peopleArray[person].jobTitle}`);
}