#### Array and Array Methods

## Submission Instructions [Please note]

## Installation

```
npm install --engine-strict
```

## Test

```
npm t
```

## Test (Watch mode)

```
npm t -- --watchAll
```

## Maximum marks - 13

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example /js-201 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## file structure

most of your work would happen in the `src/index.js` file.

<span style="color: green">read the test results carefully, they may provide you with some extra information.</span>

```
✅ submit the problem [1 mark]
✅ Object with the count of each unique string in the array-[1 marks]
✅ sum of all numbers that are divisible by 3 or 5.-[1 marks]
✅ a new array containing only the strings that are palindromes.-[1 marks]
✅ write a function that returns a new array containing only the file paths that have a .png or .jpg extension-[1 marks]

✅ write a function that returns a new array where each string has its first and last letters swapped-[1 marks]

✅ write a function that logs the number of words in each sentence to the console-[1 marks]

✅ write a function sumOfSquaresOfOddNumbers that returns the sum of the squares of all odd numbers-[1 marks]
✅ write a function massageArray() is expected to return an array of objects removing all the empty data and structure the data.-[1 marks]

✅ create a new object called `newObj` using the `students` array & the `subjectsHash` object.-[1 marks]
✅ separate entities for 5 subjects and their marks,in the new array, we just have one entry called marks.-[1 marks]
✅ write a function to find out the number of young people and voter,midaged people and voter and old people and voter .-[1 marks]
✅ find out the unique flaver of ice-cream and the number of people liked it.-[1 marks]

```

_<span style=" color: red">Note: all the return statements/ messages while creating methods are case sensitive please try to follow as it is you can check using a running test case otherwise you will lose marks for a particular part</span>._

## Problem statement (complete the following functions).

### Reduce functions (marks-1*1)

#### UniqueString

- input

```javascript
const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];
```

- output

```javascript
{ apple: 3, banana: 2, orange: 1, pear: 1 }

```

- provided a function` UniqueString` that takes an array of strings as input and returns an object with the count of each unique string in the array, using .reduce() array method.

#### ProductOfMultipleOfThreeOrFive

- input

```javascript
const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
```

- output

```javascript
1817;
```

- provided a function that takes an array of numbers, use .reduce() to find the sum of all numbers that are divisible by 3 or 5, and return a single number.

### Filter functions (marks-2\*1)

#### palindromesString

- input

```javascript
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
```

- output

```javascript
    [
      "racecar",
      "deified",
      "level",
      "radar",
      "civic",
    ]
```
- Given an array of strings, write a function that returns a new array containing only the strings that are palindromes (i.e., read the same backwards as forwards) using .filter().



#### findImage
- input

```javascript
 const filePaths = [
      "/images/pic1.jpg",
      "/images/pic2.png",
      "/assets/img/background.jpg",
      "/assets/img/logo.png",
      "/downloads/document.pdf",
      "/downloads/image.png",
      "/downloads/image.jpg",
    ];
```

- output

```javascript
    [
      "/images/pic1.jpg",
      "/images/pic2.png",
      "/assets/img/background.jpg",
      "/assets/img/logo.png",
      "/downloads/image.png",
      "/downloads/image.jpg",
    ]
```
- Given an array of strings representing file paths, write a function that returns a new array containing only the file paths that have a `.png` or `.jpg` extension, using .filter()
- as in the output `.pdf` file is not there.

### Map functions (marks-1*1)

#### swapStrings
- input

```javascript
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

```

- output

```javascript

    [
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

```
- Given an array of strings, write a function that returns a new array where each string has its first and last letters swapped using .map().



### ForEach functions (marks-1\*1)

#### countWords
- input

```javascript
const sentences = [
      "The quick brown fox jumps over the lazy dog.",
      "She sells seashells by the seashore.",
      "I have a dream that one day this nation will rise up.",
      "To be or not to be, that is the question.",
      "In the beginning, God created the heavens and the earth.",
    ];

```

- output

```javascript
output should look like this.
"sentence 1 contains 9 words."
```
- Given an array of strings representing sentences, write a function that logs `(console.log())` the number of words in each sentence to the console using .forEach()
- for each sentence print a message `"sentence 1 contains 9 words."` in console.
- here in the message `1` is index(one base(starts from one)) of the sentence and `9` is the number of words it contains.both the value should be changed as per the sentence.

### combination all functions (marks-2\*1)

#### sumOfSquaresOfOddNumbers
- input

```javascript
 const numbers = [1, 2, 3, 4, 5, 7];

```

- output

```javascript
84

```
- Given an array of numbers, write a function sumOfSquaresOfOddNumbers that returns the sum of the squares of all odd numbers using .map(), .filter(), and .reduce().

#### massageArray
- input

```javascript
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
```

- output

```javascript
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

```
- The function massageArray() is expected to return an array of objects.
- it takes array `exampleInputArray` as a input and return array `eo1` as a output.
- If techTools and techdetails values are `null` or `""` avoid them in the output array.
- *`courseName`* maps to courseName
- *`courseDuration`* maps to Category, but the id turns into the name
- *`type`* maps to typeOfCourse, but the id turns into the name
- *`Category`* maps to CourseDurationDirectory, but the id turns into the name
- finally, 20 key-value pair techTools object & 20 key-value pair techdetails object turns into a single entry of `techTools` which is an array of object. Each object of techTools contains a key called `language` and another key called `details`.

### Implementation the right methods (marks-4\*1)

#### ImplementationPS6
- input

```javascript
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

```

- output

```javascript
{
      Prateek: ["Rust", "Javascript"],
      Yogesh: ["HTML"],
      Nrupul: ["Java"],
}
```
- create a new object called `newObj` using the `students` array &  
the `subjectsHash` object.
- `newObj` contains unique students as key and an array of subjects as value.

#### ImplementationPS7
- input

```javascript
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

```

- output

```javascript
    [
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
    ]
```
- `ImplementationPS7` function takes the `allStudentsMarksData` to get a new array called `massagedData`.

- Instead of separate entities for 5 subjects and their marks,
 in the new array, we just have one entry called `marks`. 
 marks is an array of objects. the objects of `marks`
 contains `subject` and `score` to therre crosponding values.


#### ImplementationPS9

- input

```javascript
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
```

-  sample output

```javascript
    {
      numYoungVotes: 0,
      numYoungPeople: 2,
      numMidVotesPeople: 5,
      numMidsPeople: 8,
      numOldVotesPeople: 2,
      numOldsPeople: 2,
    }

```
- ImplementationPS9 function takes voters array as a input and returns the sample output .
- the values are the count of object meet the condition.

- numYoungVotes: voters age <= 20 and given the vote,
- numYoungPeople: voters age <= 20,
- numMidVotesPeople: voters age >20 and age<=45  and given the vote,
- numMidsPeople: voters age >20 and age<=45,
- numOldVotesPeople: voters age >45 and given the vote,
- numOldsPeople: voters age >45,
    


#### ImplementationPS10
- input

```javascript
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
```

- output

```javascript
{
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
    }
```
- `ImplementationPS10`  function takes `data` array as a input and returns a object with unique `favoriteIceCreams` as key and the value is the count of how many people liked it.

- as example `Vanilla Bean` only liked by `Green Lantern` so the here the value is `1`.

#### The Problem is tested on CP

<img src="https://i.imgur.com/ekDMz8W.png" height="500px" />

### General guidelines

- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
