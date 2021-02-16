var Person = require("./PersonFactory")
class TeacherFactory{
    constructor(rating, yearsTeaching){
        this.rating = rating;
        this.yearsTeaching = yearsTeaching
    }

    qualifiedTeacher(){
        if(+this.rating >= 90){
            return {"qualifiedTeacher": true}
        }
        else{
            return {"qualifiedTeacher": false}
        }
    }
    seniorTeacher(){
        if(+this.yearsTeaching >= 20){
            return {"seniorTeacher": true}
        }
        else{
            return {"seniorTeacher": false}
        }
    }

    add(){
        Person.generate(this.qualifiedTeacher(), this.seniorTeacher())
    }
}

module.exprots = new TeacherFactory()