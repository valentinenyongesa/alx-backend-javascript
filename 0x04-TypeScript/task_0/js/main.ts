// Define the interface for Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two instances of Student
const student1: Student = {
    firstName: "Val",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Paul",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const renderTable = (students: Student[]) => {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const header1 = headerRow.insertCell();
    const header2 = headerRow.insertCell();
    header1.textContent = "First Name";
    header2.textContent = "Location";

    students.forEach(student => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });

    document.body.appendChild(table);
};

// Call renderTable function with studentsList array
renderTable(studentsList);
