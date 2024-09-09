class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, rollNo, course) {
        super(name, age);

        if (rollNo <= 0) {
            throw new Error("Roll number must be greater than zero.");
        }

        this.rollNo = rollNo;
        this.course = course;
    }

    getDetails() {
        const personDetails = super.getDetails();
        return `${personDetails}, Roll No: ${this.rollNo}, Course: ${this.course}`;
    }

    changeCourse(newCourse) {
        this.course = newCourse;
    }
}

try {
    const student1 = new Student("Alice", 20, 101, "Computer Science");
    console.log(student1.getDetails());

    student1.changeCourse("Mathematics");
    console.log(student1.getDetails());

    const student2 = new Student("Bob", 22, 0, "Physics");
} catch (error) {
    console.error(error.message);
}
