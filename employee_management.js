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

// Task 2: Create a Department Class

class Department {
    constructor(name) {
        this.name = name; // Name of the department
        this.employees = []; // Array to store Employee objects 
        }

    // Method to add an Employee object to the employees array
    addEmployee(employee) {
        this.employees.push(employee);
    }

    // Method to calculate and return the total salary of all employees in the department
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
}

// Example usage
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

// Creating employee instances
const charlie = new Employee("Charlie", 120000, "Engineering Manager", "Engineering");

const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const diana = new Employee("Diana", 130000, "Marketing Manager", "Marketing");

// Adding employees to their respective departments
engineering.addEmployee(alice);
engineering.addEmployee(charlie);

marketing.addEmployee(bob);
marketing.addEmployee(diana);

// Calculating total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`); // Output: Total salary for Engineering: $200000
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);     // Output: Total salary for Marketing: $205000
