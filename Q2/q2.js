// JavaScript Document

class Person {
  //constructor is called when creating a new Person
  constructor(name, age, gender, interests) {
    //sets instance variables
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  //Prints the Person's name to the console
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

  //says in the console that the person has left
  bye() {
    console.log(`${this.name} has left the building. Bye for now!`);
  };
}

//creating new Person objects
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//by extending Person, Teacher gets all of the instance variables and methods included in person, along with any defined here
class Teacher extends Person {
  //this constructor calls the constructor for person to set local variables, and sets the subject and grade
  constructor(name, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

//Creating new Teacher object
let jessica = new Teacher('Jessica', 30, 'female', ['JavaScript', 'Cats', 'Garfield'], 'JavaScript', '1st Year JavaScript');
