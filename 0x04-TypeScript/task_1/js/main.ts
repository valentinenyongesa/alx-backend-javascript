interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

class TeacherClass implements Teacher {
    constructor(public firstName: string, public lastName: string, public fullTimeEmployee: boolean, public location: string, public yearsOfExperience?: number) {
        Object.defineProperty(this, 'firstName', { writable: false });
        Object.defineProperty(this, 'lastName', { writable: false });
    }
}

// Example usage
const teacher3 = new TeacherClass('John', 'Doe', false, 'London');
teacher3.contract = false;

console.log(teacher3);
