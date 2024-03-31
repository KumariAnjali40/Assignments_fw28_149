// ## Question 2:

function Person(name,age,gender) {
    this.name=name;
  this.age=age;
  this.gender=gender;

  this.introduce=function(){
    return `Hello, my name is ${this.name}. I am ${this.age} years old and identify as ${this.gender}.`;
  }
  this.greet=function(){
    return `Greetings from ${this.name}!`;
  }
}

// const person1 = new Person('Alice', 30, 'female');

// //properties
// console.log(person1.name); // Alice
// console.log(person1.age); // 30
// console.log(person1.gender); // female

// //methods
// console.log(person1.introduce()); //Hello, my name is Alice. I am 30 years old and identify as female.
// console.log(person1.greet());     //Greetings from Alice!

function Student(name,age,gender,studentID,major) {
  Person.call(this,name,age,gender);
  this.studentID=studentID;
  this.major=major;

  this.enroll = function (course) {
    return `${this.name} is enrolling in ${course}.`;
  };
  this.submitAssignment=function(assignment){
    return `${this.name} is submitting ${assignment} for evaluation.`;
  }
  this.getGrades=function(){
     return  `${this.name} is retrieving their grades.`;
  }
  this.toString=function(){
    return `Student: ${this.name}, Major: ${major}`
  }
}
Object.setPrototypeOf(Student.prototype, Person.prototype);
// const student1 = new Student(
//   "Alice",
//   20,
//   "Female",
//   "ST12345",
//   "Computer Science"
// );
// //properties
// console.log(student1.name); // Alice
// console.log(student1.age); // 20
// console.log(student1.gender); // Female
// console.log(student1.studentID); // ST12345
// console.log(student1.major); // Computer Science

// //methods
// console.log(student1.introduce()); // Hello, my name is Alice. I am 20 years old and identify as Female.
// console.log(student1.greet()); // Greetings from Alice!
// console.log(student1.enroll("Computer Networks")); // Alice is enrolling in Computer Networks.
// console.log(student1.submitAssignment("Network Protocols")); // Alice is submitting Network Protocols for evaluation.
// console.log(student1.getGrades()); // Alice is retrieving their grades.
// console.log(student1.toString()); // Student: Alice, Major: Computer Science

function Professor(name,age,gender,employeeID,department) {
  Person.call(this,name,age,gender);
  this.employeeID=employeeID;
  this.department=department;

  this.teach=function(course){
     return `${this.name} is teaching ${course}.`
  }
  this.gradeAssignment=function(assignment){
    return `${this.name} is grading ${assignment}.`
  }
  this.holdOfficeHours=function(){
    return `${this.name} is holding office hours.`
  }
  this.toString=function(){
    return `Professor: ${this.name}, Department: ${department}`
  }
}
Object.setPrototypeOf(Professor.prototype, Person.prototype);
// const professor1 = new Professor(
//   "Dr. Smith",
//   45,
//   "Male",
//   "EMP123",
//   "Computer Science"
// );

// //properties
// console.log(professor1.name); // Dr. Smith
// console.log(professor1.age); // 45
// console.log(professor1.gender); // Male
// console.log(professor1.employeeID); // EMP123
// console.log(professor1.department); // Computer Science


// //methods
// console.log(professor1.introduce()); // Hello, my name is Dr. Smith. I am 45 years old and identify as Male.
// console.log(professor1.greet()); // Greetings from Dr. Smith!
// console.log(professor1.teach("Software Engineering")); // Dr. Smith is teaching Software Engineering.
// console.log(professor1.gradeAssignment("Final Project")); // Dr. Smith is grading Final Project.
// console.log(professor1.holdOfficeHours()); // Dr. Smith is holding office hours.
// console.log(professor1.toString()); // Professor: Dr. Smith, Department: Computer Science

function TeachingAssistant(name,age,gender, employeeID, course) {
  Person.call(this,name,age,gender);
  this.employeeID=employeeID;
  this.course=course;


  this.assistProfessor=function(){
    return `${this.name} is assisting the professor.`;
  }
  this.provideFeedback=function(assignment){
    return `${this.name} is providing feedback on ${assignment}.`;
  }
  this.scheduleOfficeHours=function(){
    return  `${this.name} is scheduling office hours.`
  }
  this.toString = function () {
    return `Teaching Assistant: ${this.name}, Course: ${this.course}`;
  };
}
Object.setPrototypeOf(TeachingAssistant.prototype,Person.prototype);
// const ta1 = new TeachingAssistant(
//   "John",
//   25,
//   "Male",
//   "TA987",
//   "Data Structures"
// );

// //properties
// console.log(ta1.name); // John
// console.log(ta1.age); // 25
// console.log(ta1.gender); // Male
// console.log(ta1.employeeID); // TA987
// console.log(ta1.course); // Data Structures

// // methods
// console.log(ta1.introduce()); // Hello, my name is John. I am 25 years old and identify as Male.
// console.log(ta1.greet()); // Greetings from John!
// console.log(ta1.assistProfessor()); // John is assisting the professor.
// console.log(ta1.provideFeedback("Homework 3")); // John is providing feedback on Homework 3.
// console.log(ta1.scheduleOfficeHours()); // John is scheduling office hours.
// console.log(ta1.toString()); // Teaching Assistant: John, Course: Data Structures

// don't remoove below export statement
export { Person, Student, Professor, TeachingAssistant };
