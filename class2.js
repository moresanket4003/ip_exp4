// Prototype with member functions
const personProto = {
    getDetails: function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
    getDetailsArrow: () => {
        return `Name (Arrow): ${this.name}, Age: ${this.age}`;
    }
};


const person2 = Object.create(personProto);
person2.name = 'Kate';
person2.age = 30;

// Print details
console.log(person2.getDetails());        
console.log(person2.getDetailsArrow());   