class Employee {
    constructor(id, name, salary, role) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.role = role;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}, Role: ${this.role}`;
    }
}

// Creating employee objects
const emp1 = new Employee(101, "Alice", 50000, "Developer");
const emp2 = new Employee(102, "Bob", 60000, "Designer");
const emp3 = new Employee(103, "Charlie", 55000, "Manager");

// Displaying employee details
document.writeln(emp1.getDetails() + "<br>");
document.writeln(emp2.getDetails() + "<br>");
document.writeln(emp3.getDetails() + "<br>");
