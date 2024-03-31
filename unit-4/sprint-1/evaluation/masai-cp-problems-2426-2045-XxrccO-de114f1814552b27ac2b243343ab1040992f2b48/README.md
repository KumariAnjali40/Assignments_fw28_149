# JS- Destructuring Array,Object,HOF Inbuilt Method  

## Submission Instructions [Please note]

## Maximum Marks - 23

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

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
## file structure

most of your work would happen in the `src` directory.
```
✅ Submit the problem [1 mark]

### Test cases for question1.js
----------------------------------------------
### Test cases for Problem 1
✅ Checking total marks student in array [2 marks]

### Test cases for Problem 2
✅ checking removeKeyValuePair in object[2 marks]

### Test cases for Problem 3
✅ array returned by massageArray to have property-value as expected [2 mark]
✅ array returned by massageArray to be as expected [2 mark]

### Test cases for question2.js
----------------------------------------------

### Test cases for Problem 1
✅ Pizza Available, Burger Available, Pizza Price, and Burger Price [1 mark]
✅ should calculate the total revenue correctly [1 mark]

### Test cases for question3.js
----------------------------------------------
✅ function combiningArrays must return correct groceries array [2 marks]
✅ function cloningObjects must return correct personCopy object-1 [1 mark]
✅ function cloningObjects must return correct personCopy object-2 [1 mark]
✅ function mergingObjects must return correct studentWithCourse object-1 [1 mark]
✅ function mergingObjects must return correct studentWithCourse object-2 [1 mark]
✅ function combiningNestedArrays must return the correct combinedArray array [1 mark]

### Test cases for employee data on question3.js 
✅ function employeeInformation Extract name and department of the second employee [1 mark]
✅ function averageSalary return averageSalary of all employees [1 mark]
✅ function thirdEmployeeInfo return a string with third employee info [1 mark]
✅ function destructuringToSwap return swapped employees array [1 mark]
✅ function highestPaid return employee with the highest salary [1 mark]


```

<span style="color: green"> Read the test results carefully, they may provide you with some extra information.</span>

_<span style=" color: red">Note: all the return statements/ messages while creating methods are case sensitive. Please try to follow as it is you can check using a running test case otherwise, you will lose marks for a particular part</span>._

# question1.js 

<h2 style="color:#215dc8">
 Problem statement.1
</h2> 
For an array with an object of student mark, you have to modify that array and change the total with all subject aggregate. Pass an array as an argument in the function `findTotal` and return a modified array with the total marks(sum of all the marks student got), from the function. You can refer below as an example.

- The data type for the "marks" of the subject is either a `number` or a `string`.

- **`Hint`** : use Object.values() [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

- **input**
```javascript
let arr =[
    {
    name: "student1",
    subjects:[{Maths:60},{History:30},{English:"50"},{Biology:"40"}],
    total:""
    },
    {
    name: "student2",
    subjects:[{Maths:"35"},{History:"66"},{English:"20"},{Biology:"30"}],
    total:""
    }
    ]
    console.log(findTotal(arr));
```
- **Output**
```javascript
  [
    {
    name: "student1",
    subjects:[{Maths:60},{History:30},{English:"50"},{Biology:"40"}],
    total:180
    },
    {
    name: "student2",
    subjects:[{Maths:"35"},{History:"66"},{English:"20"},{Biology:"30"}],
    total:151
    }
  ]
```


<h2 style="color:#215dc8">
 Problem statement.2
</h2>  

For an object with user details, you have to create a function removeKeyValuePair that takes input as 
  - user object
  - key to remove (string)

the function *removeKeyValuePair* will `return` the object without the key-value pair you have given for example we are passing `city` should get the object of a user without `city` as follows 

- You can use any method to implement but the recommended one is using the *spread operator*.[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

**Input**
```javascript
const user = {
  name: "john",
  password: "john@11",
  id: "7468uwe",
  city: "New York",
}
```
**Output**
```
// console.log(removeKeyValuePair(user, "city"));//{ name: 'john', password: 'john@11', id: '7468uwe' }
```
<h2 style="color:#215dc8">
 Problem statement.3
</h2> 
The function `massageArray()` is expected to return an array of objects.

Parameter of `massageArray()`: `inputArray` of type array

### Provided `MadeInArea`:
```javascript
let MadeInArea = [
  { id: 1, name: "India" },
  { id: 2, name: "USA" },
];
```
### Provided `categories`
```javascript
let categoriesDirectory = {
  1: "ASUS",
  2: "HP",
  3: "Dell",
};
```
### Example Input Array:
```javascript
let exampleInputArray = [
  {
    idProduct: "8TH GEN CORE I7",
    strProduct: "ASUS ZENBOOK FLIP 13 UX362FA LAPTOP",
    Category: 1,
    Area: 2,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "8th Gen",
    strDetail3: "8 MB",
    strDetail4: "Quad Core",
    strDetail5: "8565U",
    strDetail6: "Intel",
    strDetail7: "Core i7",
    strDetail8: "1.8 GHz",
    strDetail9: "4.6 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },

  {
    idProduct: "8TH GEN CORE I5",
    strProduct: "HP ELITEBook X360 (4SU65UT) LAPTOP",
    Category: 2,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "8th Gen",
    strDetail3: "6 MB",
    strDetail4: "Quad Core",
    strDetail5: "8250U",
    strDetail6: "Intel",
    strDetail7: "Core i5",
    strDetail8: "1.6 GHz",
    strDetail9: "3.4 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
  {
    idProduct: "7TH GEN PENTIUM GOLD",
    strProduct: "DELL INSPIRON 15 3583 LAPTOP",
    Category: 3,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "7th Gen",
    strDetail3: "2 MB",
    strDetail4: "Dual Core",
    strDetail5: "5405U",
    strDetail6: "Intel",
    strDetail7: "Pentium Gold",
    strDetail8: "1.6 GHz",
    strDetail9: "2.3 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
];
```
- If `strSpecification` and `strDetail` is null or "" avoid them in the output array.
### Expected output with the above input:
```javascript
    let eo1 = [
    {
      productId: "8TH GEN CORE I7",
      productTitle: "ASUS ZENBOOK FLIP 13 UX362FA LAPTOP",
      Category: "ASUS",
      MadeInArea: "USA",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "8th Gen" },
        { Specification: "Cache", detail: "8 MB" },
        { Specification: "Core", detail: "Quad Core" },
        { Specification: "Model", detail: "8565U" },
        { Specification: "Brand", detail: "Intel" },
        { Specification: "Series", detail: "Core i7" },
        { Specification: "Speed", detail: "1.8 GHz" },
        { Specification: "Boost upto", detail: "4.6 GHz" },
      ],
    },
    {
      productId: "8TH GEN CORE I5",
      productTitle: "HP ELITEBook X360 (4SU65UT) LAPTOP",
      Category: "HP",
      MadeInArea: "India",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "8th Gen" },
        { Specification: "Cache", detail: "6 MB" },
        { Specification: "Core", detail: "Quad Core" },
        { Specification: "Model", detail: "8250U" },
        { Specification: "Brand", detail: "Intel" },
        { Specification: "Series", detail: "Core i5" },
        { Specification: "Speed", detail: "1.6 GHz" },
        { Specification: "Boost upto", detail: "3.4 GHz" },
      ],
    },
    {
      productId: "7TH GEN PENTIUM GOLD",
      productTitle: "DELL INSPIRON 15 3583 LAPTOP",
      Category: "Dell",
      MadeInArea: "India",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "7th Gen" },
        { Specification: "Cache", detail: "2 MB" },
        { Specification: "Core", detail: "Dual Core" },
        { Specification: "Model", detail: "5405U" },
        { Specification: "Brand", detail: "Intel" },
        { Specification: "Series", detail: "Pentium Gold" },
        { Specification: "Speed", detail: "1.6 GHz" },
        { Specification: "Boost upto", detail: "2.3 GHz" },
      ],
    },
  ];
```
### Mapping of properties from input to expected output
- idProduct maps to productId
- strProduct maps to productTitle
- Category maps to Category, but the id turns into the name
- MadeInArea maps to MadeInArea, but the id turns into the name
- Finally, 20 strSpecification & 20 strDetail turns into a single entry of Specification which is an array of object. Each object of Specification contains a key called Specification and another key called detail.

# question2.js
<h2 style="color:#215dc8">
 Problem statement.1
</h2> 

- object `foodDeliveryService` is already provided in the template use this for problem as follows 

```javascript
  const foodDeliveryService = {
  serviceName: "TastyBites Delivery",
  location: "Foodville",
  restaurants: {
    italianCorner: {
      menu: {
        pizza: { available: 20, price: 12 },
        pasta: { available: 30, price: 10 },
        salad: { available: 15, price: 8 },
      },
      orders: [
        { id: 1, items: ["pizza", "pasta"], total: 22 },
        { id: 2, items: ["salad", "pasta"], total: 18 },
        { id: 3, items: ["pizza", "pasta"], total: 12 },
      ],
    },
    burgerJoint: {
      menu: {
        burger: { available: 25, price: 8 },
        fries: { available: 40, price: 4 },
        drink: { available: 30, price: 2 },
      },
      orders: [
        { id: 1, items: ["burger", "fries"], total: 12 },
        { id: 2, items: ["drink", "burger", "fries"], total: 14 },
        { id: 3, items: ["drink"], total: 2 },
      ],
    },
  },
  restaurantNames: ["italianCorner", "burgerJoint"],
};

```

### Level-Problem 1-1

- Extract the `pizzaAvailable`, `burgerAvailable`, `pizzaPrice`, and `burgerPrice` using multilevel destructuring

- Create function `findDetails` which takes `foodDeliveryService` as input and *return* object as 
    
```
    {
    pizzaAvailable: no of pizza available,
    burgerAvailable: no of burger available,
    pizzaPrice: the price of pizza,
    burgerPrice: the price of  burger,
  }
```

- Hint: use destructuring 

```javascript
//Example Invocation
console.log(findDetails(foodDeliveryService).pizzaAvailable); // 20
console.log(findDetails(foodDeliveryService).burgerAvailable); // 25
console.log(findDetails(foodDeliveryService).pizzaPrice); // 12
console.log(findDetails(foodDeliveryService).burgerPrice); // 8
```

### Level-Problem 1-2
- Write a function `calculateTotalRevenue` that calculates and returns the total revenue from all completed orders across all restaurants.

- Create function `calculateTotalRevenue` which take `foodDeliveryService` as input and *return*  a String as
`Total Revenue: {totalRevenue}`

```
//Example Invocation
 console.log(calculateTotalRevenue(foodDeliveryService)); //80 = (22+18+12+12+14+2)
```



# question3.js

<h3 style="color:#215dc8">
Problem 1: Combining Arrays [2]
</h3>

define a `combiningArrays` function that takes input as 
    - fruits array
    - vegetables array 

 - Create the 'groceries' array by combining 'fruits' and 'vegetables'

 - Your task is to create a new array **`groceries`** by combining both arrays using the spread operator is compulsory

 - `combiningArrays` return `groceries` array

```javascript
const fruits = ["mango", "grape", "papaya"];
const vegetables = ["tomato", "cucumber", "onion"];

console.log(combiningArrays(fruits, vegetables)); // [ "mango", "grape", "papaya", "tomato", "cucumber", "onion" ]
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

```javascript
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

```javascript
const student = { name: "Nrupul", age: 25 };
const course = { courseName: "Math", teacher: "Mr. Bhat" };

console.log(mergingObjects(student, course)); // { name: 'Nrupul', age: 25, courseName: 'Math', teacher: 'Mr. Bhat' }
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

```javascript
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
employee data on question3.js  [5]
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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


```javascript
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)) // { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

```



#### The Problem is tested on CP

<img src="https://i.imgur.com/C3eNkHs.png" height="500px" />

### General guidelines
- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
