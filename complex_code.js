/* 
   filename: complex_code.js 
   content: A complex code example demonstrating various JavaScript concepts and features.
*/

// Function to generate a random number between two given values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calculate the factorial of a given number using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Class representing a person with name and age properties
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Array of objects representing employees
const employees = [
  {
    name: "John",
    age: 30,
    department: "HR",
  },
  {
    name: "Emily",
    age: 25,
    department: "Finance",
  },
  {
    name: "Michael",
    age: 35,
    department: "IT",
  },
];

// Function to filter employees based on department and age
function filterEmployees(department, minAge, maxAge) {
  return employees.filter(employee => employee.department === department && employee.age >= minAge && employee.age <= maxAge);
}

// Example usage of the above functions and classes
const randomNumber = getRandomNumber(1, 10);
console.log(`Random number: ${randomNumber}`);

const factorialResult = factorial(randomNumber);
console.log(`Factorial of ${randomNumber}: ${factorialResult}`);

const person = new Person("Alice", 28);
console.log(person.getDetails());

const filteredEmployees = filterEmployees("HR", 25, 40);
console.log("Filtered Employees:");
filteredEmployees.forEach(employee => {
  console.log(`Name: ${employee.name}, Age: ${employee.age}`);
});

// ... (more code with additional complex functionality)