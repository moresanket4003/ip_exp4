//using es6 syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    
    getDetailsArrow = () => {
        return `Name (Arrow): ${this.name}, Age: ${this.age}`;
    };
}


const person3 = new Person('Charlie', 35);

// Print details
console.log(person3.getDetails());        
console.log(person3.getDetailsArrow());   
