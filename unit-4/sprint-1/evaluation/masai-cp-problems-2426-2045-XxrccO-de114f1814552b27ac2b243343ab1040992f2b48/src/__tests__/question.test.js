import {
  findTotal,
  removeKeyValuePair,
  exampleInputArray,
  massageArray,
} from "../question1";
import {
  findDetails,
  calculateTotalRevenue,
} from "../question2";

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
} from "../question3";


global.score = 1;

///*********************************************************Test cases for question1.js */

describe("Problem-4", () => {
  const arr1 = findTotal([
    {
      name: "student1",
      subjects: [
        { Maths: 60 },
        { History: 780 },
        { English: "50" },
        { Biology: "20" },
      ],
      total: "",
    },
    {
      name: "student2",
      subjects: [
        { Maths: "95" },
        { History: "26" },
        { English: "43" },
        { Biology: "50" },
      ],
      total: "",
    },
    {
      name: "student3",
      subjects: [
        { Maths: "67" },
        { History: "276" },
        { English: "453" },
        { Biology: "420" },
      ],
      total: "",
    },
  ]);
  test("checking array total amount in array", () => {
    expect(Array.isArray(arr1)).toBe(true);
    expect(arr1[0].total).toBe(910);
    expect(arr1[1].total).toBe(214);
    expect(arr1[2].total).toBe(1216);
    global.score += 2;
  });
});

describe("Problem-6", () => {
  test("checking removeKeyValuePair in object", () => {
    const user = {
      name: "test",
      password: "test343",
      id: "dgjgg566",
      city: "GOA",
    };
    expect(removeKeyValuePair(user, "password").password).toBe(undefined);

    global.score += 2;
  }); //2
});
describe("Problem-7", () => {
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

  let exampleInputArray2 = [
    {
      idProduct: "9TH GEN CORE I7",
      strProduct: "ASUS ROG STRIX SCAR III G531GU-ES016T GAMING LAPTOP",
      Category: 1,
      Area: 1,
      strSpecification1: "Processor",
      strSpecification2: "Generation",
      strSpecification3: "Cache",
      strSpecification4: "Core",
      strSpecification5: "Model",
      strSpecification6: "",
      strSpecification7: "",
      strSpecification8: "",
      strSpecification9: "",
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
      strDetail2: "9th Gen",
      strDetail3: "12 MB",
      strDetail4: "Hexa Core",
      strDetail5: "9750H",
      strDetail6: "",
      strDetail7: "",
      strDetail8: "",
      strDetail9: "",
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
      idProduct: "10TH GEN CORE I3",
      strProduct: "HP PAVILION X360 14-DH1008TU LAPTOP",
      Category: 2,
      Area: 2,
      strSpecification1: "",
      strSpecification2: "",
      strSpecification3: "",
      strSpecification4: "",
      strSpecification5: "",
      strSpecification6: "",
      strSpecification7: "Series",
      strSpecification8: "Speed",
      strSpecification9: "Cache",
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
      strDetail1: "",
      strDetail2: "",
      strDetail3: "",
      strDetail4: "",
      strDetail5: "",
      strDetail6: "",
      strDetail7: "Core i3",
      strDetail8: "2.1 GHz",
      strDetail9: "4 MB",
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
      idProduct: "9TH GEN CORE I5",
      strProduct: "DELL INSPIRON G3 3590 GAMING LAPTOP",
      Category: 3,
      Area: 1,
      strSpecification1: "Processor",
      strSpecification2: "Generation",
      strSpecification3: "",
      strSpecification4: "",
      strSpecification5: "",
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
      strDetail1: "Intel Core i5",
      strDetail2: "9th Gen",
      strDetail3: "",
      strDetail4: "",
      strDetail5: "",
      strDetail6: "NVIDIA",
      strDetail7: "Core i5",
      strDetail8: "2.4 GHz",
      strDetail9: "4.1 GHz",
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
  test("array returned by massageArray to have property-value as expected", function () {
    let o1 = massageArray(exampleInputArray);
    let o2 = massageArray(exampleInputArray2);

    expect(o1[0].productId).toBe("8TH GEN CORE I7");
    expect(o1[0].productTitle).toBe("ASUS ZENBOOK FLIP 13 UX362FA LAPTOP");
    expect(o1[0].Category).toBe("ASUS");
    expect(o1[0].MadeInArea).toBe("USA");

    expect(o2[1].productId).toBe("10TH GEN CORE I3");
    expect(o2[1].productTitle).toBe("HP PAVILION X360 14-DH1008TU LAPTOP");
    expect(o2[1].Category).toBe("HP");
    expect(o2[1].MadeInArea).toBe("USA");

    global.score += 2;
  });

  test("array returned by massageArray to be as expected", function () {
    let o1 = massageArray(exampleInputArray);
    expect(o1).toMatchObject(eo1);

    // let o2 = massageArray(exampleInputArray2);
    // expect(o2).toMatchObject(eo2);

    global.score += 2;
  });
});

///*********************************************************Test cases for question2.js */

describe("Problem-8", () => {
  const mockService = {
    serviceName: "TastyBites Delivery",
    location: "Foodville",
    restaurants: {
      italianCorner: {
        menu: {
          pizza: { available: 40, price: 12 },
          pasta: { available: 74, price: 10 },
          salad: { available: 12, price: 8 },
        },
        orders: [
          { id: 1, items: ["pizza", "pasta"], total: 22 },
          { id: 2, items: ["salad", "pasta"], total: 18 },
          { id: 3, items: ["pizza"], total: 12 },
        ],
      },
      burgerJoint: {
        menu: {
          burger: { available: 41, price: 9 },
          fries: { available: 10, price: 4 },
          drink: { available: 20, price: 7 },
        },
        orders: [
          { id: 1, items: ["burger", "fries"], total: 12 },
          { id: 2, items: ["drink", "burger", "fries"], total: 14 },
          { id: 3, items: ["drink"], total: 7 },
        ],
      },
    },
    restaurantNames: ["italianCorner", "burgerJoint"],
  };
  it("Pizza Available ,Burger Available,Pizza Price, and Burger Price", () => {
    expect(findDetails(mockService).pizzaAvailable).toBe(40);
    expect(findDetails(mockService).burgerAvailable).toBe(41);
    expect(findDetails(mockService).pizzaPrice).toBe(12);
    expect(findDetails(mockService).burgerPrice).toBe(9);
    global.score += 1;
  });

  it("should calculate the total revenue correctly", () => {
    const totalRevenue = calculateTotalRevenue(mockService);
    expect(totalRevenue).toContain("85");
    global.score += 1;
  });
});


///*********************************************************Test cases for question3.js */

describe("Test cases for question3.js", function () {
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

describe("Test cases for employee on question3.js page", () => {
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

afterAll(() => {
  console.log("Final Score is", global.score);
});