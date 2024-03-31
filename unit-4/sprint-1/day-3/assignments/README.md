# JS-PT-WEB14-S1-A1

#### Array and Objects

## Submission Instructions [Please note]

## Installation

```
npm install --engine-strict
```

## Test

```
npm test
```

## Test (Watch mode)

```
npm test -- --watchAll
```

## Maximum marks - 18

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example /js-201 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## file structure

most of your work would happen in the `src/index.js` and `src/school.js` files.

<span style="color: green"> Read the test results carefully, they may provide you with some extra information.</span>

```
✅ submit the problem [1 mark]

### Test cases for the index.js 
----------------------------------------

✅ function combiningArrays must return correct groceries array [2 marks]
✅ function cloningObjects must return correct personCopy object-1 [1 mark]
✅ function cloningObjects must return correct personCopy object-2 [1 mark]
✅ function mergingObjects must return correct studentWithCourse object-1 [1 mark]
✅ function mergingObjects must return correct studentWithCourse object-2 [1 mark]
✅ function combiningNestedArrays must return the correct combinedArray array [1 mark]

### Test cases for employee data on the index.js 
✅ function employeeInformation Extract name and department of the second employee [1 mark]
✅ function averageSalary return averageSalary of all employees [1 mark]
✅ function thirdEmployeeInfo return a string with third employee info [1 mark]
✅ function destructuringToSwap return swapped employees array [1 mark]
✅ function highestPaid return employee with the highest salary [1 mark]


### Test cases for the school.js 
----------------------------------------
✅ function countCalculation return object with count calculation,mathTeachersCount,historyTeachersCount,mathStudentsCount,historyStudentsCount [1 mark]
✅ function findTopStudent return the student with the highest score [1 mark]
✅ function addNewDept return school object with updated dept [1 mark]
✅ function highestStudentCountDepartment returns the department name with the highest count [1 mark]
✅ function generateGreeting return a string with a greeting message [1 mark]

```
_<span style=" color: red">Note: all the return statements/ messages while creating methods are case sensitive please try to follow as it is you can check using a running test case otherwise you will lose marks for a particular part</span>._

## index.js [9]


<h3 style="color:#215dc8">
Problem 1: Combining Arrays [2]
</h3>

define a `combiningArrays` function that takes input as 
    - fruits array
    - vegetables array 

 - Create the 'groceries' array by combining 'fruits' and 'vegetables'

 - Your task is to create a new array **`groceries`** by combining both arrays using the spread operator is compulsory

 - `combiningArrays` return `groceries` array

```
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

console.log(combiningArrays(fruits, vegetables)) //[ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]
```

<h3 style="color:#215dc8">
Problem 2: Cloning Objects [1+1]
</h3>


define a `cloningObjects` function that takes input as 
    - person object with properties
       1. name
       2. age
       3. address

 - Create the 'personCopy' object by cloning the 'person' object

 - Your task is to create a new object **`personCopy`** by cloning the **`person`** object using the spread operator is compulsory

 - `cloningObjects` return `personCopy` object

```
const person = { name: "John", age: 30, address: "123 Main St" };

console.log(cloningObjects(person))//{ name: "John", age: 30, address: "123 Main St" }
```

<h3 style="color:#215dc8">
Problem 3: Merging Objects [1+1]
</h3>

define a `mergingObjects` function that takes input as 
    - student object
    - course

 - Create the 'studentWithCourse' object by merging 'student' and 'course'

 - You have two objects **`student`** and **`course`**. Your task is to create a new object **`studentWithCourse`** by merging the properties of both objects using the spread operator is compulsory

 - `mergingObjects` return `studentWithCourse` object

```
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };

console.log(mergingObjects(student, course)) // { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }
```

<h3 style="color:#215dc8">
Problem 4: Combining Nested Arrays [1]
</h3>

define a `combiningNestedArrays` function that takes input as 
    - array1
    - array2

 - Create the 'combinedArray' by combining the nested arrays from 'array1' and 'array2'

 - You have two arrays **`array1`** and **`array2`**, each containing nested arrays. Your task is to create a new array **`combinedArray`** by combining the nested arrays from both arrays using the spread operator is compulsory

 - `combiningNestedArrays` return `combinedArray` array

```
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

console.log(combiningNestedArrays(array1, array2))//[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
```

<h2 style="color:#215dc8">
employee data on index.js  [5]
</h2>

<h3 style="color:#215dc8">
Problem 5: Employee Information [1]
</h3>

- You are given an array of employee objects, each containing information about an employee. 

- Your task is to utilize destructuring to extract and manipulate the data based on specific requirements.

- define an `employeeInformation` function that takes input as 
    - employees

 -  Extract the **`name`** and **`department`** of the second employee in the array and assign them to variables `secondEmployeeName` and `secondEmployeeDepartment`.

 - `employeeInformation` return object with secondEmployeeName and secondEmployeeDepartment 

```
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(employeeInformation(employees))// { secondEmployeeName: 'Jane Smith',secondEmployeeDepartment: 'Finance' }
```

<h3 style="color:#215dc8">
Problem 6: averageSalary [1]
</h3>
- Create a function **`averageSalary`** that takes an array of employees and calculates the average salary of all employees using destructuring. 

- **Note: use for-of-loop only.**

- define an `averageSalary` function that takes input as 
    - employees

 - `averageSalary` return average salary

```
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(averageSalary(employees)) // 60000
```

<h3 style="color:#215dc8">
Problem 7: thirdEmployeeInfo [1]
</h3>

- Extract the `name`, **`age`,** and **`salary`** of the third employee and assign them to variables `thirdEmployeeName`,`thirdEmployeeAge,` and `thirdEmployeeSalary`

- calculate a bonus of `10%` on the salary

- define a `thirdEmployeeInfo` function that takes input as 
    - employees

 - `thirdEmployeeInfo` returns a string as `Employee: <thirdEmployeeName>, Age: <thirdEmployeeAge>, Salary: <thirdEmployeeSalary>, bonus:<calculatedBonus>`

```
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(thirdEmployeeInfo(employees))//Employee: Alex Johnson, Age: 35, Salary: 70000, bonus: 7000
```
<h3 style="color:#215dc8">
Problem 8: destructuringToSwap [1]
</h3>

- Use destructuring to swap the values of the first and last employees in the array.

- define a `destructuringToSwap` function that takes input as 
    - employees

 - `destructuringToSwap` return an object `employees`

```
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(destructuringToSwap(employees)) 
[
  { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
  { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
  { name: 'John Doe', age: 30, department: 'HR', salary: 50000 }
]

```
<h3 style="color:#215dc8">
Problem 9: highestPaid [1]
</h3>

- Write a function **`highestPaid`** that takes an array of employees and returns the employee with the highest salary using destructuring.

- **Note: use for-of-loop only.**

- define a `highestPaid` function that takes input as 
    - employees

 - `highestPaid` return an object employee object with a high salary 


```
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)) // { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

```

<h2 style="color:#215dc8">
School information on school.js [5]
</h2>

- You are responsible for managing student enrollment and generating statistics for a school using multilevel destructuring and other JavaScript concepts.

Use this school object data for problem no. 10,11, 12, and 13

```
const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};
```


<h3 style="color:#215dc8">
Problem 10: countCalculation [1]
</h3>

- Extract the `mathTeachersCount`,`historyTeachersCount`, `mathStudentsCount`, and  `historyStudentsCount` using multilevel destructuring.

- define a `countCalculation` function that takes input as 
    - school

 - `countCalculation` return an object with `mathTeachersCount`,`historyTeachersCount`, `mathStudentsCount`, and  `historyStudentsCount`

```
console.log(countCalculation(school))
 Output: {  
  mathTeachersCount: 5,
  historyTeachersCount: 3,
  mathStudentsCount: 150,
  historyStudentsCount: 100
}

```

<h3 style="color:#215dc8">
Problem 11: findTopStudent [1]
</h3>

- **`findTopStudent`** that takes a course name as a parameter and finds the student with the highest score in that course using multilevel destructuring.

- define a `findTopStudent` function that takes input as 
    - school (Object)
    - courseName (String)

 - `findTopStudent` return a string as `{topstudent object}`

```
console.log( findTopStudent(school, 'math'))
{
  name: 'Alice',
  className: 'Grade 5',
  scores: { math: 95, science: 88, history: 85, english: 92 }
}

```

<h3 style="color:#215dc8">
Problem 12: addNewDept [1]
</h3>

- Use the spread operator to add new departments for example **`art`** with teachers and students to the school's departments.

- define an `addNewDept` function that takes input as 
    - school (Object)
    - newDepartment (object)

 - `addNewDept` return a school object with an updated department.


```
console.log(addNewDept(school,newDepartment))

Output = {
  name: 'XYZ School',
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
    art: { teachers: 2, students: 50 }
  },
  courses: [ 'math', 'science', 'history', 'english' ],
  students: [
    { name: 'Alice', className: 'Grade 5', scores: [Object] },
    { name: 'Bob', className: 'Grade 4', scores: [Object] },
    { name: 'Charlie', className: 'Grade 5', scores: [Object] },
    { name: 'Diana', className: 'Grade 4', scores: [Object] }
  ]
}

```

<h3 style="color:#215dc8">
Problem 13: highestStudentCountDepartment[1]
</h3>

- **`highestStudentCountDepartment`** that returns the department (name) with the highest number of students.

- define a `highestStudentCountDepartment` function that takes input as 
    - school (Object)

 - `highestStudentCountDepartment` return string as `${highest count dept}`


```
console.log(highestStudentCountDepartment(school));//math

```

<h3 style="color:#215dc8">
Problem 14: Greeting Message [1]
</h3>

- You are creating a JavaScript function to generate a personalized greeting message.

- Your task is to create a function **`generateGreeting`** that generates a greeting message for a given name and language.

- The function should have a default parameter for the language, which is set to `English`.

1. Define a function **`generateGreeting`** that takes parameters **`name`** and **`language`** (default parameter: 'English').

2. Create an object **`greetings`** that contains greeting messages for different languages. Include at least English, Spanish, and French.

3. The function should return a formatted greeting message based on the provided name and language.

- define a `generateGreeting` function that takes input as 
    - name
    - language (Default English)

 - `generateGreeting` return string as follow

```
console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"

```

#### The Problem is tested on CP

<img src="https://i.imgur.com/Ur6hVbO.png" height="500px" />

### General guidelines

- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
