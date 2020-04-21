function getYearOfBirth(age) { return 2016 - age; }

function createGreeting(name,age) { 
    const yob = getYearOfBirth(age) return 'Hi, my name is ' + name + and I'm 29 years old. I was born in ${yob}; }

function yearOfBirth(age) { if (age<0) { throw new Error("Age cannot be negative"); } }

try { const greeting1 = createGreeting('Mako',-2); } catch(e) { console.error(${e.name}: ${e.message}); }