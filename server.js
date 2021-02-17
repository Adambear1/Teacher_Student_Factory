var { createInterface } = require("readline");
var Person = require("./PersonFactory");
var PersonFactory = new Person();
var Teacher = require("./TeacherFactory");
var TeacherFactory = new Teacher();
var Student = require("./StudentFactory");
var StudentFactory = new Student();
var rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = () => {
  rl.question("What is your name?:\n    ", (name) => {
    rl.question("What is your age?:\n    ", (age) => {
      rl.question(
        "What is your role?: \n [T]eacher \n [S]tudent   ",
        (role) => {
          switch (role.toLowerCase()) {
            case "t" || "teacher":
              return teacherPrompt(name, age);
            case "s" || "student":
              return studentPrompt(name, age);
            default:
              console.log("Invalid input, lets try again...\n\n");
              return main();
          }
        }
      );
    });
  });
};
const errPrompt = () => {
  console.log("Invalid input, lets try again...\n\n");
  return main();
};
const errCatch = (name, age) => {
  if (!name || !age) {
    console.log(
      "Looks like we're missing some input... Please try again... \n\n"
    );
    return main();
  }
};
const continuePrompt = (type, name, age, input_1, input_2) => {
  rl.question("Would you like to continue? [Y]es \n [N]o \n", (confirm) => {
    switch (confirm.toLowerCase()) {
      case "y" || "yes":
        if (type === "Teacher") {
          return TeacherFactory(null, name, age, input_1, input_2)
            .checkQualifiedTeacher()
            .checkTenuredTeacher()
            .add();
        }
        if (type === "Student") {
          console.log(name);
          console.log(age);
          console.log(input_1);
          console.log(input_2);
          return StudentFactory(null, name, age, input_1, input_2)
            .checkQualifiedStudent()
            .checkTypeStudent()
            .add();
        }
        return main();
      case "n" || "no":
        return rl.close();
      default:
        return errPrompt();
    }
  });
};
const teacherPrompt = async (name, age) => {
  await errCatch(name, age);
  rl.question("What is your rating as a teacher [0-100]?:\n   ", (rating) => {
    (+rating < 0 || +rating > 100) && errPrompt();
    rl.question(
      "How long have you been a teacher [in years]?:\n    ",
      (tenure) => {
        !tenure && errPrompt();
        return continuePrompt("Teacher", name, age, rating, tenure);
      }
    );
  });
};
const studentPrompt = async (name, age) => {
  await errCatch(name, age);
  rl.question("What is your cumulative GPA? [0-4]?:\n   ", (GPA) => {
    (+GPA < 0 || +GPA > 4) && errPrompt();
    rl.question(
      "What is your focus: \n [A]rt \n [H]istory  \n [P]olitical Science? \n [C]omputer Science \n [D]ata Science \n [E]lectrical Engineering \n [B]iology:\n    ",
      (focus) => {
        if (
          focus.toLowerCase() !== "a" ||
          focus.toLowerCase() !== "h" ||
          focus.toLowerCase() !== "p" ||
          focus.toLowerCase() !== "c" ||
          focus.toLowerCase() !== "d" ||
          focus.toLowerCase() !== "e" ||
          focus.toLowerCase() !== "b"
        ) {
          return errPrompt();
        }
        focus = focus === "a" && "Art";
        focus = focus === "h" && "History";
        focus = focus === "p" && "Political Science";
        focus = focus === "c" && "Computer Science";
        focus = focus === "d" && "Data Science";
        focus = focus === "e" && "Electrical Engineering";
        focus = focus === "b" && "Biology";
        return continuePrompt("Student", name, age, GPA, focus);
      }
    );
  });
};

rl.on("close", () => {
  PersonFactory.getAll();
  return process.exit(0);
});

main();
