var Person = require("./PersonFactory");
var PersonFactory = new Person();
class Teacher extends Person {
  constructor(role = "Teacher", name, age, rating, yearsTeaching) {
    this.role = role;
    this.name = name;
    this.age = +age;
    this.rating = +rating;
    this.yearsTeaching = +yearsTeaching;
    this.qualifiedTeacher = new Object();
    this.tenuredTeacher = new Object();
  }

  checkQualifiedTeacher() {
    if (this.rating >= 90) {
      return (this.qualifiedTeacher = { qualifiedTeacher: true });
    } else {
      return (this.qualifiedTeacher = { qualifiedTeacher: false });
    }
  }
  checkTenuredTeacher() {
    if (this.yearsTeaching >= 20) {
      return (this.tenuredTeacher = { tenuredTeacher: true });
    } else {
      return (this.tenuredTeacher = { tenuredTeacher: false });
    }
  }

  add() {
    return PersonFactory.generate(
      this.role,
      this.name,
      this.age,
      this.qualifiedTeacher,
      this.tenuredTeacher
    );
  }
}

module.exports = Teacher;
