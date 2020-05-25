let yearOfBirth    

do {
    yearOfBirth = +prompt('When were you born?')
} while(isNaN(yearOfBirth))
yearOfBirth = Math.abs(yearOfBirth)

const currentYear    =  2020;

document.write (`You are 
${(currentYear - yearOfBirth).toFixed(0)} 
years old.`);
