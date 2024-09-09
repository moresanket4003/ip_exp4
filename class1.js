// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    
    this.getDetails = function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    };
    
    
    this.getDetailsArrow = () => {
        return `Name (Arrow): ${this.name}, Age: ${this.age}`;
    };
}


const person1 = new Person('Sanket', 20);


console.log(person1.getDetails());        
console.log(person1.getDetailsArrow());   
