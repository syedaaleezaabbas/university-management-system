#! /usr/bin/env node
class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    rollNumber: number;
    courses: Course[] = [];

    constructor(name: string, age: number, rollNumber: number) {
        super(name, age);
        this.rollNumber = rollNumber
    }

    registerForCourses(course: Course): void {
        this.courses.push(course); 
    }
}

class Instructor extends Person {
    salary: string;
    courses: Course[] = [];

    constructor (name: string, age: number, salary: string) {
        super(name, age);
        this.salary = salary;
    }

    assignCourse(course: Course): void {
        this.courses.push(course)
    }
}

class Course {
    id: number;
    name: string;
    students: Student[] = [];
    instructors: Instructor[] = [];

    constructor (id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    addStudent (std: Student): void {
        this.students.push(std);
    }

    setInstructor(instructor: Instructor): void {
        this.instructors.push(instructor);
    }
}   

class Department {
    name: string;
    courses: Course[] = [];
    constructor(name: string) {
        this.name = name;
    }

    addCourse(course: Course): void {
        this.courses.push(course);
    }
}

const std1 = new Student("Aleeza", 23, 1234);
const std2 = new Student("Maryem", 24, 1342);

const instructor1 = new Instructor("Sir Hamzah", 23, "$80000");
const instructor2 = new Instructor("Sir Faraz", 30, "$70000");

const course1 = new Course(1, "Blockchain");
const course2 = new Course(2, "Metaverse");

const d1 = new Department("computer science");


// Register students for courses
std1.registerForCourses(course1); // aleeza blockchain
std2.registerForCourses(course2)
std1.registerForCourses(course2)


// Add courses to departments
d1.addCourse(course1);
d1.addCourse(course2);


// Add students to courses
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);


// Set instructors for courses
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);


console.log(d1.courses[0]);
console.log(instructor1.courses);
console.log(std1.courses[0]);
console.log(course1.students);
console.log(std1.courses);
console.log(d1.courses);











