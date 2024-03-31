// ** you can use the commentout function execution
// to see the output **

// reduce method
// qn:-1

function UniqueString(strings) {
// console.log(UniqueString(strings));
return strings.reduce((count, string)=>{
  if (count[string]) {
    count[string] += 1;
  } else {
    count[string] = 1;
  }
  return count;
}, {});
}
// qn :2

function ProductOfMultipleOfThreeOrFive(numbers){
   const sum=numbers.reduce((acc,n)=>{
     if(n%3===0 || n%5===0){
      return acc+n;
     }
     return acc;
   },0);
   return sum;
}
// console.log(ProductOfMultipleOfThreeOrFive(numbers1));

// filter method Qn:1\

function palindromesString(words) {
  const output= words.filter(word => {
    const indexWord = word.toLowerCase();
    const reversedWord = indexWord.split('').reverse().join('');
    return indexWord === reversedWord;
  });
  return output;
}
// console.log(palindromesString(words))

// filter method Qn:2

function findImage(filePaths) {

  const output= filePaths.filter(path=>{
      return path.endsWith(".jpg") || path.endsWith(".png");
  });
  return output;
}
// console.log(findImage(filePaths))

// map method Qn:1

function swapStrings(strings){
const output= strings.map(string=>{
 if(string.length<2){
  return string;
 }
 const fristChar=string.charAt(0);
 const lastChar=string.charAt(string.length-1);
 const swap=lastChar+ string.slice(1,-1)+fristChar;
 return swap;
});
return output;
}
// console.log(swapStrings(strings1));

// foreach method Qn:1
function countWords(sentences) {
  sentences.forEach((sentence, index) => {
    const words = sentence.split(' ');
    console.log(`sentence ${index + 1} contains ${words.length} words.`);
  });
}
// countWords(sentences)

// combination method Qn:1
function sumOfSquaresOfOddNumbers(numbers) {
 const oddNum=numbers.filter(num=>{
    return num%2==1;
 });
 const square=oddNum.map(squ=>{
   return squ*squ;
 });
 const sumOfOdd=square.reduce((sum,index)=>{
     return sum+index;
 });
return sumOfOdd;
}
// console.log(sumOfSquaresOfOddNumbers(numbers));

// combination method Qn:2
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
function massageArray(exampleInputArray) {
  return exampleInputArray.map((course) => ({
    courseName: course.courseName,
    courseDuration: CourseDurationDirectory[course.courseDuration],
    Category: Category[course.Category],
    type: typeOfCourse.find((type) => type.id === course.type).name,
    techTools: Object.keys(course.techTools)
      .filter((key) => course.techTools[key] && course.techdetails[key] && course.techTools[key] !== "" && course.techdetails[key] !== "")
      .map((key) => ({
        language: course.techTools[key],
        details: course.techdetails[key],
      }))
      .reduce((acc, obj) => (acc.push(obj), acc), []),
  }));

  
}
// console.log(massageArray(exampleInputArray));


// Implementation methods ps Qn:6

let subjectsHash = {
  1: "Javascript",
  2: "HTML",
  3: "CSS",
  4: "Java",
  5: "Rust",
};

function ImplementationPS6(students) {
  let newObj = {};

  students.forEach((student) => {
    let studentName = student.name;
    let subject = subjectsHash[student.subjectID];

    if (!newObj[studentName]) {
      newObj[studentName] = [];
    }

    if (subject) {
      newObj[studentName].push(subject);
    }
  });

  return newObj;
}
// console.log(ImplementationPS6(students));

// Implementation methods ps Qn:7

function ImplementationPS7(allStudentsMarksData) {
  return allStudentsMarksData.map((studentMarksData) => {
    let marks = [];

    for (let i = 1; i <= 5; i++) {
      let subjectKey = `subject${i}`;
      let marksKey = `marks${i}`;

      if (studentMarksData[subjectKey] && studentMarksData[marksKey] !== null) {
        marks.push({
          subject: studentMarksData[subjectKey],
          score: studentMarksData[marksKey],
        });
      }
    }

    return {
      name: studentMarksData.name,
      marks: marks,
    };
  });
}
// console.log(ImplementationPS7(allStudentsMarksData));


// Implementation methods ps Qn:9

function ImplementationPS9(voters) {
  let numYoungVotes =0;
  let numYoungPeople =0;
  let numMidVotesPeople =0;
  let numMidsPeople =0;
  let numOldVotesPeople =0;
  let numOldsPeople = 0;

  voters.forEach((voter) => {
    if(voter.age<=20){
      numYoungPeople++;
      if(voter.voted){
        numYoungVotes++;
      }
    } else if(voter.age>20 && voter.age<=45) {
      numMidsPeople++;
      if(voter.voted){
        numMidVotesPeople++;
      }
    } else if(voter.age>45){
      numOldsPeople++;
      if(voter.voted){
        numOldVotesPeople++;
      }
    }
  });
  return {
    numYoungVotes,
    numYoungPeople,
    numMidVotesPeople,
    numMidsPeople,
    numOldVotesPeople,
    numOldsPeople,
  };
}
// console.log(ImplementationPS9(voters));

// Implementation methods ps Qn:10
function ImplementationPS10(data) {
  const iceCreamCount=data.reduce((acc,index)=>{
    index.favoriteIceCreams.forEach((iceCream)=>{
      if(acc[iceCream]){
        acc[iceCream]+=1;
      }else{
        acc[iceCream]=1;
      }
    })
    return acc;
  },{})
  return iceCreamCount;
}
// console.log(ImplementationPS10(data));

// Dont remove below export statement part

export {
  // reruce
  UniqueString,
  ProductOfMultipleOfThreeOrFive,
  // filter
  palindromesString,
  findImage,
  // map
  swapStrings,
  // forEach
  countWords,
  // combination
  sumOfSquaresOfOddNumbers,
  massageArray,
  // Implementation methods problem statement
  ImplementationPS6,
  ImplementationPS7,
  ImplementationPS9,
  ImplementationPS10,
};
