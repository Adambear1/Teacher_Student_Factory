Array.prototype.count = function (array) {
  array.reduce(function (acc, curr) {
    if (typeof acc[curr] == "undefined") {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }

    return acc;
  }, {});
};

class Person {
  constructor(total = []) {
    this.total = total;
  }

  getNames() {
    return console.log(
      this.total.map(({ name }) => {
        return name;
      })
    );
  }
  getAges() {
    return console.log(
      this.total.map(({ age }) => {
        return age;
      })
    );
  }
  getTotal() {
    return console.log(count(total));
  }

  async generate(role, name, age, input_1 = null, input_2 = null) {
    var newObj = new Object();
    if (input_1) {
      await newObj.push(input_1);
    }
    if (input_2) {
      await newObj.push(input_2);
    }
    newObj.name = await name;
    newObj.age = await age;
    newObj.role = await role;
    try {
      if (!newObj.name || !newObj.age || !newObj.role) {
        new Error("Missing Entries");
        return this.total.push(newObj);
      }
    } catch (error) {
      break;
    }
  }

  getAll() {
    console.log(this.total);
  }
}

module.exports = Person;
