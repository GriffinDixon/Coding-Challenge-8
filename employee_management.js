// Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        // Initialize properties
        this.name = name;            // Name of the employee
        this.salary = salary;        // Salary of the employee
        this.position = position;    // Position of the employee
        this.department = department; // Department of the employee
    }

    // Return details of the employee
    getDetails() {
        return `${this.name} is a ${this.position} in the ${this.department} department with a salary of $${this.salary}.`;
    }
}

// Console Log
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
console.log(alice.getDetails()); // Output: Alice is a Developer in the Engineering department with a salary of $80000.

// Task 2: 