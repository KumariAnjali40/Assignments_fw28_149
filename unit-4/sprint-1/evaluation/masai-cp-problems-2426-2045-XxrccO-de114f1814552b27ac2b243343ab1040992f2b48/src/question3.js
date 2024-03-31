// **Problem 1: Combining Arrays** [2]

// You have two arrays **`fruits`** and **`vegetables`**. Your task is to create a new array **`groceries`** by combining both arrays using the spread operator.

function combiningArrays(fruits,vegetables) {
  // Create the 'groceries' array by combining 'fruits' and 'vegetables'
  const total=[...fruits,...vegetables];
  return total;
}

const fruits = ["mango", "grape", "papaya"];
const vegetables = ["tomato", "cucumber", "onion"];

console.log(combiningArrays(fruits, vegetables)); // [ "mango", "grape", "papaya", "tomato", "cucumber", "onion" ]

// **Problem 2: Cloning Objects** [1+1]

// You have an object **`person`** with properties **`name`**, **`age`**, and **`address`**. Your task is to create a new object **`personCopy`** by cloning the **`person`** object using the spread operator.

function cloningObjects(item) {
  // Create the 'personCopy' object by cloning the 'person' object
  const personCopy={...item};
  return personCopy;

}

const person = { name: "John", age: 30, address: "123 Main St" };

console.log(cloningObjects(person)); // { name: "John", age: 30, address: "123 Main St" }

// **Problem 3: Merging Objects** [1+1]
// You have two objects **`student`** and **`course`**. Your task is to create a new object **`studentWithCourse`** by merging the properties of both objects using the spread operator.

function mergingObjects(student,course) {
  // Create the 'studentWithCourse' object by merging 'student' and 'course'
  const studentWithCourse={...student,...course};
  return studentWithCourse;
}
const student = { name: "Nrupul", age: 25 };
const course = { courseName: "Math", teacher: "Mr. Bhat" };

console.log(mergingObjects(student, course)); // { name: 'Nrupul', age: 25, courseName: 'Math', teacher: 'Mr. Bhat' }

// **Problem 4: Combining Nested Arrays** [1]

// You have two arrays **`array1`** and **`array2`**, each containing nested arrays. Your task is to create a new array **`combinedArray`** by combining the nested arrays from both arrays using the spread operator.

function combiningNestedArrays(array1,array2) {
  // Create the 'combinedArray' by combining the nested arrays from 'array1' and 'array2'
  const combinedArray=[...array1,...array2];
  return combinedArray;
}
const array1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const array2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];

console.log(combiningNestedArrays(array1, array2)); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]

// ### employee data  [5]

// You are given an array of employee objects, each containing information about an employee. Your task is to utilize destructuring to extract and manipulate the data based on specific requirements.

// **Employee Data:**

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

// **Problem 5: Employee Information** [1]

function employeeInformation(employees) {
  // Extract the **`name`** and **`department`** of the second employee in the array and assign them to variables `secondEmployeeName` and `secondEmployeeDepartment`.
  const[,secondEmployee]=employees;
  const{name:secondEmployeeName,department:secondEmployeeDepartment}=secondEmployee;
  return {secondEmployeeName,secondEmployeeDepartment};
}

console.log(employeeInformation(employees)); // { secondEmployeeName: 'Jane Smith',secondEmployeeDepartment: 'Finance' }

//**Problem 6: averageSalary** [1]
function averageSalary(employees) {
  // Create a function **`averageSalary`** that takes an array of employees and calculates the average salary of all employees using destructuring.
  // **Note: use for-of-loop only.**
  let totalSalary=0;
  for(const employee of employees){
    const{salary}=employee;
    totalSalary+=salary;
  }
  if(employees.length===0){
    return 0;
  }
  return totalSalary/employees.length;
}

console.log(averageSalary(employees)); // 60000

// **Problem 7: thirdEmployeeInfo** [1]

function thirdEmployeeInfo(employees) {
  // Extract the `name`, **`age`,** and **`salary`** of the third employee and assign them to variables `thirdEmployeeName`,`thirdEmployeeAge,` and `thirdEmployeeSalary` and calculate a bonus of 10% on the salary.
  // Print a message `Employee: <thirdEmployeeName>, Age: <thirdEmployeeAge>, Salary: <thirdEmployeeSalary>, bonus:<calculatedBonus>`.
  const {name:thirdEmployeeName, age:thirdEmployeeAge, salary:thirdEmployeeSalary }=employees[2];
  const bonus=0.1*thirdEmployeeSalary;

  return `Employee :${thirdEmployeeName}, Age: ${thirdEmployeeAge},Salary: ${thirdEmployeeSalary}, bonus: ${bonus}`;
}
console.log(thirdEmployeeInfo(employees)); //Employee: Alex Johnson, Age: 35, Salary: 70000, bonus: 7000

// **Problem 8: destructuringToSwap** [1]
function destructuringToSwap(employees) {
  // Use destructuring to swap the values of the first and last employees in the array.
  [employees[0],employees[employees.length-1]]=[employees[employees.length-1],employees[0]];
  return employees;
}

console.log(destructuringToSwap(employees));
//[
//   { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
//   { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
//   { name: 'John Doe', age: 30, department: 'HR', salary: 50000 }
// ]

// **Problem 9: highestPaid** [1]
function highestPaid(employees) {
  // **Note: use for-of-loop only.**
  let highestSalary=0;
  let higestPaidEmployee={};
  for(const employee of employees){
    if(employee.salary>highestSalary){
      highestSalary=employee.salary;
      higestPaidEmployee={...employee};
    }
  }
  return higestPaidEmployee;
}

console.log(highestPaid(employees)); // { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

//Dont remove below export statement part
export {
  combiningArrays,
  cloningObjects,
  mergingObjects,
  combiningNestedArrays,
  employeeInformation,
  averageSalary,
  thirdEmployeeInfo,
  destructuringToSwap,
  highestPaid,
};