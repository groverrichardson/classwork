function createStudent (name, location) {
    let student = {
        name: name,
        location: location,
        describe: function (){
           return `Hello, I am ${this.name} and I live in ${this.location}.`;
        }
    }
    return student;
}

createStudent ('Grover', 'Riverside');



/* Define a factory function createStudent that receives two parameters: 1) name - type: string 
2) location - type: string. This factory should return an object that includes the provided name and 
location properties and also has a describe method that returns the string: 
"Hello, I am {name} and I live in {location}."

HINT: You will want to use the this keyword */

/*input: name and location; output: an object that includes both of the properties and also 
returns string statement.*/