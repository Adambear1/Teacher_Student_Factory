var Person = require("./PersonFactory");
var PersonFactory = new Person();

class Student extends Person {
  constructor(role = "Student", name, age, grade, focus) {
    this.role = role;
    this.name = name;
    this.age = +age;
    this.grade = +grade;
    this.focus = focus;
    this.qualifiedStudent = new Object();
    this.typeStudent = new Object();
  }
  checkQualifiedStudent() {
    if (this.grade >= 90) {
      return { qualifiedStudent: true };
    } else {
      return { qualifiedStudent: false };
    }
  }
  checkTypeStudent() {
    if (
      this.focus === "Art" ||
      this.focus === "History" ||
      this.focus === "Political Science"
    ) {
      return { typeStudent: "Bachelors of Arts" };
    }
    if (this.focus === "Computer Science" || this.focus === "Data Science") {
      return { typeStudent: "Bachelors of Computer Science" };
    }
    if (this.focus === "Electrical Engineering" || this.focus === "Biology") {
      return { typeStudent: "Bachelors of Science" };
    }
  }
  add() {
    return PersonFactory.generate(
      this.role,
      this.name,
      this.age,
      this.qualifiedStudent,
      this.typeStudent
    );
  }
}

module.exports = Student;
