Array.prototype.count = function(array){
    array.reduce(function (acc, curr) {
        if (typeof acc[curr] == "undefined") {
          acc[curr] = 1;
        } else {
          acc[curr] += 1;
        }

        return acc;
      }, {})
}

class Person {
  constructor(name, age, role, total = []) {
    this.name = name;
    this.age = age;
    this.role = role;
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
    return console.log(
      count(total))
  }

  generate(input_1 = null, input_2 = null) {
    var newObj = new Object();
    if(input_1) this.total.push(input_1)
    if(input_2) this.total.push(input_2)
    newObj.name = this.name;
    newObj.age = this.age;
    newObj.role = this.role;
    this.total.push(newObj);
    return console.log(`Added ${newObj} \n\n The New List is Now: ${this.total}`)
  }
}

module.exports = new Person()