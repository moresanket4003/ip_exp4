//Using factory function
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        
        // Traditional function syntax
        getDetails: function() {
            return `Name: ${this.name}, Age: ${this.age}`;
        },
        
        // Arrow function syntax
        getDetailsArrow: () => {
            return `Name (Arrow): ${name}, Age: ${age}`;
        }
    };
}

// Create a new Person object
const person4 = createPerson('David', 40);

// Print details
console.log(person4.getDetails());        
console.log(person4.getDetailsArrow());   