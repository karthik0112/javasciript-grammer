"use strict";
class Person {
    constructor(name) {
       this.personName = name;
    }
    person1() {
       return " my name is "+ this.personName;
    }
 }
 class Student extends Person {
    constructor(name,age) {
        super(name);
       this.age=age;
    }
    person2() {
       return super.person1()+', iam ' +this.age;
    }
 }

 let person3=new Student("karthi","22");
 console.log(person3.person2());