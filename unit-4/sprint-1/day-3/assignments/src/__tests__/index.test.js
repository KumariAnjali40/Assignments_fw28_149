//get deatils test cases

import {
  countCalculation,
  findTopStudent,
  addNewDept,
  highestStudentCountDepartment,
  generateGreeting,
} from "../school";
import {
  combiningArrays,
  cloningObjects,
  mergingObjects,
  combiningNestedArrays,
  employeeInformation,
  averageSalary,
  thirdEmployeeInfo,
  destructuringToSwap,
  highestPaid,
} from "../index";

global.score = 1;

describe("Test cases for index.js", function () {
  test("function combiningArrays must return correct groceries array", () => {
    // const checkthis = IkeaPurchase.toString();
    // expect(checkthis).not.toContain("this");

    const fruits = ["f1", "f2", "f3", "f4"];
    const vegetables = ["v1", "v2"];
    const groceries = combiningArrays(fruits, vegetables);
    expect();

    expect(typeof groceries).toBe("object");
    expect(groceries.length).toBe(6);
    expect(groceries[3]).toBe("f4");
    expect(groceries[4]).toBe("v1");

    const fruits1 = ["apple", "banana", "orange", "grapes", "strawberry"];
    const vegetables1 = ["carrot", "broccoli", "spinach", "tomato", "cucumber"];
    const groceries1 = combiningArrays(fruits1, vegetables1);
    expect();

    expect(typeof groceries1).toBe("object");
    expect(groceries1.length).toBe(10);
    expect(groceries1[2]).toBe("orange");
    expect(groceries1[5]).toBe("carrot");

    global.score += 2;
  }); //2
  test("function cloningObjects must return correct personCopy object-1", () => {
    const person = {
      firstName: "Emily Smith",
      age: 28,
      address: "456 Elm Ave",
    };
    const personUpdated = cloningObjects(person);
    expect();

    expect(typeof personUpdated).toBe("object");
    expect(personUpdated.firstName).toBe("Emily Smith");
    expect(personUpdated.age).toBe(28);
    expect(personUpdated.address).toBe("456 Elm Ave");

    global.score += 1;
  }); //1
  test("function cloningObjects must return correct personCopy object-2", () => {
    const person = {
      firstName: "Michael Johnson",
      age: 35,
      address: "789 Maple St",
    };
    const personUpdated = cloningObjects(person);
    expect();

    expect(typeof personUpdated).toBe("object");
    expect(personUpdated.firstName).toBe("Michael Johnson");
    expect(personUpdated.age).toBe(35);
    expect(personUpdated.address).toBe("789 Maple St");

    global.score += 1;
  }); //1
  test("function mergingObjects must return correct studentWithCourse object-1", () => {
    const student = { name: "Bob", age: 22 };
    const course = { courseName: "Science", teacher: "Ms. Johnson" };

    const newStudent = mergingObjects(student, course);

    expect(typeof newStudent).toBe("object");
    expect(newStudent.name).toBe("Bob");
    expect(newStudent.age).toBe(22);
    expect(newStudent.courseName).toBe("Science");
    expect(newStudent.teacher).toBe("Ms. Johnson");

    global.score += 1;
  }); //1
  test("function mergingObjects must return correct studentWithCourse object-2", () => {
    const student = { name: "john", age: 52 };
    const course = { courseName: "computer", teacher: "sharma" };

    const newStudent = mergingObjects(student, course);

    expect(typeof newStudent).toBe("object");
    expect(newStudent.name).toBe("john");
    expect(newStudent.age).toBe(52);
    expect(newStudent.courseName).toBe("computer");
    expect(newStudent.teacher).toBe("sharma");

    global.score += 1;
  }); //1
  test("function combiningNestedArrays must return the correct combinedArray array", () => {
    const arr1 = [0, 1, 2, 3, 4, 5];
    const arr2 = [0, 1, 2, 3, 5];
    const arr3 = [3, 3, 3];
    const arr4 = [4, 4, 4, 4];

    const ans = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 5];
    const ans2 = [3, 3, 3, 4, 4, 4, 4];
    const updatedArr = combiningNestedArrays(arr1, arr2);

    expect(typeof updatedArr).toBe("object");
    expect(updatedArr.length).toBe(11);
    expect(updatedArr).toEqual(ans);

    const updatedArr2 = combiningNestedArrays(arr3, arr4);

    expect(typeof updatedArr2).toBe("object");
    expect(updatedArr2.length).toBe(7);
    expect(updatedArr2).toEqual(ans2);

    global.score += 1;
  }); //1
});

describe("Test cases for employee on index.js page", () => {
  test("function employeeInformation Extract name and department of the second employee", () => {
    const employees = [
      {
        name: "Michael Brown",
        age: 25,
        department: "Marketing",
        salary: 55000,
      },
      { name: "Emma Wilson", age: 32, department: "Sales", salary: 58000 },
      {
        name: "Daniel Anderson",
        age: 29,
        department: "Operations",
        salary: 62000,
      },
      {
        name: "Johnn",
        age: 39,
        department: "placements",
        salary: 6200,
      },
    ];

    const ans = employeeInformation(employees);
    expect(ans.secondEmployeeName).toBe("Emma Wilson");
    expect(ans.secondEmployeeDepartment).toBe("Sales");

    global.score += 1;
  }); //1
  test("function averageSalary return averageSalary of all employees", () => {
    const employees = [
      {
        name: "Michael Brown",
        age: 25,
        department: "Marketing",
        salary: 55000,
      },
      { name: "Emma Wilson", age: 32, department: "Sales", salary: 58000 },
      {
        name: "Daniel Anderson",
        age: 29,
        department: "Operations",
        salary: 62000,
      },
      {
        name: "Johnn",
        age: 39,
        department: "placements",
        salary: 6200,
      },
    ];

    expect(averageSalary(employees)).toBe(45300);

    const employees1 = [{ salary: 100 }, { salary: 100 }];

    expect(averageSalary(employees1)).toBe(100);
    global.score += 1;
  }); //1
  test("function thirdEmployeeInfo return a string with third employee info", () => {
    const employees = [
      {
        name: "Michael Brown",
        age: 25,
        department: "Marketing",
        salary: 55000,
      },
      { name: "Emma Wilson", age: 32, department: "Sales", salary: 58000 },
      {
        name: "Daniel Anderson",
        age: 29,
        department: "Operations",
        salary: 62000,
      },
    ];

    expect(thirdEmployeeInfo(employees)).toContain(`Daniel Anderson`);
    expect(thirdEmployeeInfo(employees)).toContain(`29`);
    expect(thirdEmployeeInfo(employees)).toContain(`62000`);
    expect(thirdEmployeeInfo(employees)).toContain(`bonus: 6200`);

    global.score += 1;
  }); //1
  test("function destructuringToSwap return swapped employees array", () => {
    const employees = [
      {
        name: "Michael Brown",
      },
      { name: "Emma Wilson", age: 32, department: "Sales", salary: 58000 },
      {
        name: "Daniel Anderson",
        age: 29,
        department: "Operations",
        salary: 62000,
      },
      {
        name: "john",
      },

      {
        name: "siya",
        age: 21,
        department: "placements",
        salary: 41000,
      },
    ];

    const swappedEmployee = [
      { name: "siya", age: 21, department: "placements", salary: 41000 },
      { name: "Emma Wilson", age: 32, department: "Sales", salary: 58000 },
      {
        name: "Daniel Anderson",
        age: 29,
        department: "Operations",
        salary: 62000,
      },
      { name: "john" },
      { name: "Michael Brown" },
    ];

    expect(destructuringToSwap(employees)).toEqual(swappedEmployee);

    global.score += 1;
  }); //1
  test("function highestPaid return employee with the highest salary", () => {
    const employees = [
      {
        name: "Michael Brown",
      },
      { name: "Emma Wilson", age: 32, department: "Sales", salary: 58000 },
      {
        name: "Daniel Anderson",
        age: 29,
        department: "Operations",
        salary: 62000,
      },
      {
        name: "john",
      },

      {
        name: "siya",
        age: 21,
        department: "placements",
        salary: 41000,
      },
    ];

    const highest = {
      age: 29,
      department: "Operations",
      name: "Daniel Anderson",
      salary: 62000,
    };

    expect(highestPaid(employees)).toEqual(highest);

    global.score += 1;
  }); //1
});

describe("Test cases for school.js", function () {
  const school = {
    name: "ADC School",
    establishYear: 2023,
    departments: {
      math: { teachers: 5, students: 150 },
      history: { teachers: 3, students: 400 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english", "marathi"],
    students: [
      {
        name: "john",
        className: "Grade 8",
        scores: { math: 95, science: 88, history: 85, english: 42 },
      },
      {
        name: "sharma",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 65 },
      },
    ],
  };
  test("function countCalculation return object with count calculation,mathTeachersCount,historyTeachersCount,mathStudentsCount,historyStudentsCount", () => {
    const ansObj = countCalculation(school);
    console.log("ansObj", ansObj);

    expect(ansObj.mathTeachersCount).toBe(5);
    expect(ansObj.historyTeachersCount).toBe(3);
    expect(ansObj.mathStudentsCount).toBe(150);
    expect(ansObj.historyStudentsCount).toBe(400);
    global.score += 1;
  }); //1
  test("function findTopStudent return the student with the highest score", () => {
    const topMath = findTopStudent(school, "math");
    const topHistory = findTopStudent(school, "history");

    expect(topMath.name).toBe("john");
    expect(topHistory.name).toBe("sharma");

    global.score += 1;
  }); //1
  test("function addNewDept return school object with updated dept", () => {
    let dept = {
      math: { teachers: 5, students: 150 },
      history: { teachers: 3, students: 400 },
      english: { teachers: 4, students: 130 },
      computer: { teachers: 7, students: 20 },
    };

    let newDepartment = {
      computer: { teachers: 7, students: 20 },
    };
    let updatedSchool = addNewDept(school, newDepartment);
    expect(updatedSchool.departments).toEqual(dept);

    global.score += 1;
  }); //1
  test("function highestStudentCountDepartment returns the department name with the highest count", () => {
    const highCount = highestStudentCountDepartment(school);

    expect(highCount).toBe("history");
    global.score += 1;
  }); //1
  test("function generateGreeting return a string with a greeting message", () => {
    const highCount = highestStudentCountDepartment(school);

    expect(generateGreeting("siya")).toContain("Hello");
    expect(generateGreeting("siya")).toContain("siya");
    expect(generateGreeting("john", "French")).toContain("john");
    expect(generateGreeting("john", "French")).toContain("Bonjour");
    expect(generateGreeting("rechal", "Spanish")).toContain("Hola");
    expect(generateGreeting("rechal", "Spanish")).toContain("rechal");
    global.score += 1;
  }); //1
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
