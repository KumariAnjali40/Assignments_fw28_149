//get deatils test cases
import {
  // re
  UniqueString,
  ProductOfMultipleOfThreeOrFive,
  // fi
  palindromesString,
  findImage,
  // m
  swapStrings,
  // fo
  countWords,
  // combination
  sumOfSquaresOfOddNumbers,
  massageArray,
  // Implementation methods problem statement
  ImplementationPS6,
  ImplementationPS7,
  ImplementationPS9,
  ImplementationPS10,
} from "../index";
global.score = 1;

describe("Array methods and expected return", function () {
  //Test cases for problem 1
  test("Object with the count of each unique string in the array", () => {
    const strings = [
      "apple",
      "banana",
      "apple",
      "orange",
      "banana",
      "pear",
      "apple",
    ];
    const strings1 = ["apple", "banana", "apple", "banana", "apple"];

    let ans = { apple: 3, banana: 2, orange: 1, pear: 1 };
    let ans1 = { apple: 3, banana: 2 };

    expect(UniqueString(strings)).toMatchObject(ans);
    expect(UniqueString(strings1)).toMatchObject(ans1);
    global.score += 1;
  });
  test("sum of all numbers that are divisible by 3 or 5.", function () {
    const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

    let o2 = ProductOfMultipleOfThreeOrFive(numbers);
    expect(o2).toEqual(1817);
    global.score += 1;
  });
  //5
  test("a new array containing only the strings that are palindromes.", function () {
    const words = [
      "racecar",
      "hello",
      "deified",
      "world",
      "level",
      "programming",
      "radar",
      "civic",
      "javascript",
    ];

    expect(palindromesString(words)).toMatchObject([
      "racecar",
      "deified",
      "level",
      "radar",
      "civic",
    ]);
    global.score += 1;
  });

  // 7
  test("write a function that returns a new array containing only the file paths that have a .png or .jpg extension,", function () {
    const filePaths = [
      "/images/pic1.jpg",
      "/images/pic2.png",
      "/assets/img/background.jpg",
      "/assets/img/logo.png",
      "/downloads/document.pdf",
      "/downloads/image.png",
      "/downloads/image.jpg",
    ];

    let ans = [
      "/images/pic1.jpg",
      "/images/pic2.png",
      "/assets/img/background.jpg",
      "/assets/img/logo.png",
      "/downloads/image.png",
      "/downloads/image.jpg",
    ];

    expect(findImage(filePaths)).toMatchObject(ans);
    global.score += 1;
  });
  // 8
  test("write a function that returns a new array where each string has its first and last letters swapped", function () {
    const strings = [
      "Hello",
      "world",
      "this",
      "is",
      "an",
      "example",
      "array",
      "of",
      "strings",
    ];

    let ans = [
      "oellH",
      "dorlw",
      "shit",
      "si",
      "na",
      "example",
      "yrraa",
      "fo",
      "strings",
    ];

    expect(swapStrings(strings)).toMatchObject(ans);
    global.score += 1;
  });
  test(" write a function that logs the number of words in each sentence to the console", function () {
    const sentences = [
      "The quick brown fox jumps over the lazy dog.",
      "She sells seashells by the seashore.",
      "I have a dream that one day this nation will rise up.",
      "To be or not to be, that is the question.",
      "In the beginning, God created the heavens and the earth.",
    ];

    const logSpy = jest.spyOn(global.console, "log");

    countWords(sentences);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(5);

    expect(logSpy).toHaveBeenCalledWith("sentence 1 contains 9 words.");
    expect(logSpy).toHaveBeenCalledWith("sentence 2 contains 6 words.");
    expect(logSpy).toHaveBeenCalledWith("sentence 3 contains 12 words.");
    expect(logSpy).toHaveBeenCalledWith("sentence 4 contains 10 words.");
    expect(logSpy).toHaveBeenCalledWith("sentence 5 contains 10 words.");
    // expect(logSpy.mock.calls).toContainEqual(['some other message']);

    logSpy.mockRestore();

    global.score += 1;
  });
  // 14
  test("write a function sumOfSquaresOfOddNumbers that returns the sum of the squares of all odd numbers.", function () {
    const numbers = [1, 2, 3, 4, 5, 7];
    expect(sumOfSquaresOfOddNumbers(numbers)).toEqual(84);

    global.score += 1;
  });
  // 15
  test("write a function massageArray() is expected to return an array of objects removing all the empty data and structure the data.", function () {
    let typeOfCourse = [
      { id: 1, name: "Developer" },
      { id: 2, name: "Tester" },
    ];
    let CourseDurationDirectory = {
      1: `6 month`,
      2: `1 year`,
      3: `2 year`,
    };
    let Category = {
      3: "Fullstack",
      4: "manual tester",
      5: "automation tester",
    };
    let exampleInputArray = [
      {
        courseName: "masai frontend web26",
        courseDuration: 2,
        Category: 3,
        type: 1,
        techTools: {
          1: "HTML",
          2: "CSS",
          3: "javaScript",
          4: "React",
          5: "Redux",
          6: "Node.js",
          7: "Express",
          8: "MongoDB",
          9: "Bootstrap",
          10: "",
          11: "",
          12: "",
          13: "",
          14: "",
          15: "",
          16: null,
          17: null,
          18: null,
          19: null,
          20: null,
        },
        techdetails: {
          1: "HTML is the standard markup language for Web pages.",
          2: "CSS is the language we use to style an HTML document. ",
          3: "JavaScript is the programming language of the Web. JavaScript is easy to learn.",
          4: "React is a JavaScript library for building user interfaces.",
          5: "Redux is an open-source JavaScript library for managing and centralizing application state.",
          6: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
          7: "Express is a minimal and flexible Node.js web application framework .",
          8: "MongoDB is a document database. It stores data in a type of JSON format called BSON.",
          9: "Bootstrap utilizes Sass for a modular and customizable architecture. ",
          10: "",
          11: "",
          12: "",
          13: "",
          14: "",
          15: "",
          16: null,
          17: null,
          18: null,
          19: null,
          20: null,
        },
      },
      {
        courseName: "foundation batch",
        courseDuration: 2,
        Category: 4,
        type: 2,
        techTools: {
          1: "aptitude",
          2: "GitHub",
          3: "C",
          4: "",
          5: "",
          6: "",
          7: "",
          8: "",
          9: "",
          10: "",
          11: "",
          12: "",
          13: "",
          14: "",
          15: "",
          16: null,
          17: null,
          18: null,
          19: null,
          20: null,
        },
        techdetails: {
          1: "1. a natural ability or skill: 2. a natural ability or skill:",
          2: "The open source community is the heart of GitHub and fundamental to how we build software today.",
          3: "C is a general-purpose programming language, developed in 1972",
          4: "",
          5: "",
          6: "",
          7: "",
          8: "",
          9: "",
          10: "",
          11: "",
          12: "",
          13: "",
          14: "",
          15: "",
          16: null,
          17: null,
          18: null,
          19: null,
          20: null,
        },
      },
      {
        courseName: "Java batch",
        courseDuration: 1,
        Category: 5,
        type: 1,
        techTools: {
          1: "ETL",
          2: "Perl",
          3: "C#",
          4: "Python",
          5: "PHP",
          6: "",
          7: "",
          8: "",
          9: "",
          10: "",
          11: "",
          12: "",
          13: "",
          14: "",
          15: "",
          16: null,
          17: null,
          18: null,
          19: null,
          20: null,
        },
        techdetails: {
          1: "ETL is used to replicate and auto sync data from various source databases to a cloud data warehouse",
          2: "Perl is a high-level scripting language",
          3: "C# was originally designed to be easy to learn and use",
          4: "Python is one of the most beginner-friendly programming languages out there.",
          5: "PHP is a scripting language running on the server side",
          6: "",
          7: "",
          8: "",
          9: "",
          10: "",
          11: "",
          12: "",
          13: "",
          14: "",
          15: "",
          16: null,
          17: null,
          18: null,
          19: null,
          20: null,
        },
      },
    ];
    let eo1 = [
      {
        courseName: "masai frontend web26",
        courseDuration: "1 year",
        Category: "Fullstack",
        type: "Developer",
        techTools: [
          {
            language: "HTML",
            details: "HTML is the standard markup language for Web pages.",
          },
          {
            language: "CSS",
            details: "CSS is the language we use to style an HTML document. ",
          },
          {
            language: "javaScript",
            details:
              "JavaScript is the programming language of the Web. JavaScript is easy to learn.",
          },
          {
            language: "React",
            details:
              "React is a JavaScript library for building user interfaces.",
          },
          {
            language: "Redux",
            details:
              "Redux is an open-source JavaScript library for managing and centralizing application state.",
          },
          {
            language: "Node.js",
            details:
              "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
          },
          {
            language: "Express",
            details:
              "Express is a minimal and flexible Node.js web application framework .",
          },
          {
            language: "MongoDB",
            details:
              "MongoDB is a document database. It stores data in a type of JSON format called BSON.",
          },
          {
            language: "Bootstrap",
            details:
              "Bootstrap utilizes Sass for a modular and customizable architecture. ",
          },
        ],
      },
      {
        courseName: "foundation batch",
        courseDuration: "1 year",
        Category: "manual tester",
        type: "Tester",
        techTools: [
          {
            language: "aptitude",
            details:
              "1. a natural ability or skill: 2. a natural ability or skill:",
          },
          {
            language: "GitHub",
            details:
              "The open source community is the heart of GitHub and fundamental to how we build software today.",
          },
          {
            language: "C",
            details:
              "C is a general-purpose programming language, developed in 1972",
          },
        ],
      },
      {
        courseName: "Java batch",
        courseDuration: "6 month",
        Category: "automation tester",
        type: "Developer",
        techTools: [
          {
            language: "ETL",
            details:
              "ETL is used to replicate and auto sync data from various source databases to a cloud data warehouse",
          },
          {
            language: "Perl",
            details: "Perl is a high-level scripting language",
          },
          {
            language: "C#",
            details: "C# was originally designed to be easy to learn and use",
          },
          {
            language: "Python",
            details:
              "Python is one of the most beginner-friendly programming languages out there.",
          },
          {
            language: "PHP",
            details: "PHP is a scripting language running on the server side",
          },
        ],
      },
    ];
    expect(massageArray(exampleInputArray)).toMatchObject(eo1);

    global.score += 1;
  });
  // 21
  test("create a new object called `newObj` using the `students` array & the `subjectsHash` object.", function () {
    let subjectsHash = {
      1: "Javascript",
      2: "HTML",
      3: "CSS",
      4: "Java",
      5: "Rust",
    };

    let students = [
      { id: 1, name: "Prateek", subjectID: 5 },
      { id: 2, name: "Yogesh", subjectID: 2 },
      { id: 3, name: "Nrupul", subjectID: 4 },
      { id: 4, name: "Prateek", subjectID: 1 },
    ];
    let ans = {
      Prateek: ["Rust", "Javascript"],
      Yogesh: ["HTML"],
      Nrupul: ["Java"],
    };
    expect(ImplementationPS6(students)).toMatchObject(ans);

    global.score += 1;
  });
  // 22
  test("separate entities for 5 subjects and their marks,in the new array, we just have one entry called marks.", function () {
    let prateekMarksData = {
      name: "Prateek",
      subject1: "Javascript",
      subject2: "HTML",
      subject3: "CSS",
      subject4: null,
      subject5: null,
      marks1: 90,
      marks2: 81,
      marks3: 80,
      marks4: null,
      marks5: null,
    };

    let nrupulMarksData = {
      name: "Nrupul",
      subject1: "Java",
      subject2: "Python",
      subject3: null,
      subject4: null,
      subject5: null,
      marks1: 95,
      marks2: 85,
      marks3: null,
      marks4: null,
      marks5: null,
    };

    let allStudentsMarksData = [prateekMarksData, nrupulMarksData];

    let ans = [
      {
        name: "Prateek",
        marks: [
          { subject: "Javascript", score: 90 },
          { subject: "HTML", score: 81 },
          { subject: "CSS", score: 80 },
        ],
      },
      {
        name: "Nrupul",
        marks: [
          { subject: "Java", score: 95 },
          { subject: "Python", score: 85 },
        ],
      },
    ];
    expect(ImplementationPS7(allStudentsMarksData)).toMatchObject(ans);

    global.score += 1;
  });
  // 24
  test("write a function to find out the number of young people and voter,midaged people and voter and old people and voter .", function () {
    const voters = [
      { name: "Bob", age: 30, voted: true },
      { name: "Jake", age: 32, voted: true },
      { name: "Kate", age: 25, voted: false },
      { name: "Sam", age: 20, voted: false },
      { name: "Phil", age: 21, voted: true },
      { name: "Ed", age: 55, voted: true },
      { name: "Tami", age: 54, voted: true },
      { name: "Mary", age: 31, voted: false },
      { name: "Becky", age: 43, voted: false },
      { name: "Joey", age: 41, voted: true },
      { name: "Jeff", age: 30, voted: true },
      { name: "Zack", age: 19, voted: false },
    ];
    let ans = {
      numYoungVotes: 0,
      numYoungPeople: 2,
      numMidVotesPeople: 5,
      numMidsPeople: 8,
      numOldVotesPeople: 2,
      numOldsPeople: 2,
    };
    expect(ImplementationPS9(voters)).toMatchObject(ans);

    global.score += 1;
  });
  // 25
  test("find out the unique flaver of ice-cream and the number of people liked it.", function () {
    const data = [
      {
        name: "Superman",
        favoriteIceCreams: [
          "Strawberry",
          "Vanilla",
          "Chocolate",
          "Cookies & Cream",
        ],
      },
      {
        name: "Batman",
        favoriteIceCreams: [
          "Cookies & Cream",
          "Mint Chocolate Chip",
          "Chocolate",
          "Vanilla",
        ],
      },
      {
        name: "Flash",
        favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
      },
      {
        name: "Aquaman",
        favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
      },
      {
        name: "Green Lantern",
        favoriteIceCreams: [
          "Vanilla",
          "French Vanilla",
          "Vanilla Bean",
          "Strawberry",
        ],
      },
      {
        name: "Robin",
        favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
      },
    ];

    let ans = {
      Strawberry: 3,
      Vanilla: 4,
      Chocolate: 5,
      "Cookies & Cream": 2,
      "Mint Chocolate Chip": 3,
      "Rocky Road": 1,
      Pistachio: 1,
      Banana: 1,
      "French Vanilla": 1,
      "Vanilla Bean": 1,
    };
    expect(ImplementationPS10(data)).toMatchObject(ans);

    global.score += 1;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
