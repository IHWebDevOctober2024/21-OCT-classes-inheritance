class Person {
  static numberOfPeople = 0; // a property we can access using the Class only, not the object

  constructor(surname, lastname, email, bootcamp, hobbies) {
    this.surname = surname;
    this.lastname = lastname;
    this.email = email;
    this.bootcamp = bootcamp;
    this.hobbies = hobbies;

    Person.numberOfPeople++;
  }

}

class Teacher extends Person {
  static numberOfTeachers = 0;
  // I'm creating a new class based on Person
  constructor(surname, lastname, email, bootcamp, hobbies) {
    super(surname, lastname, email, bootcamp, hobbies); // I'm calling here the consturctor of the superior class
    this.isAdmin = true;
    Teacher.numberOfTeachers++;
  }
}

class Student extends Person {
  constructor(surname, lastname, email, bootcamp, hobbies) {
    super(surname, lastname, email, bootcamp, hobbies); // I'm calling here the consturctor of the superior class
    this.isAdmin = false;
  }
}

const teacherUX = new Teacher("Mica", "Katzman", "mica@ironhacl.com", "UX UI", [
  "Design mind blowing patterns",
  "Kebabs",
]);

const student1 = new Student("Jorge", "Nieto", "jorge@ironhacl.com", "UX UI", [
  "Design mind blowing patterns",
  "Kebabs",
]);

console.log(student1);

console.log("NUMBER OF PEOPLE: ", Person.numberOfPeople);
console.log("NUMBER OF TEACHERS: ", Teacher.numberOfTeachers);

console.log(teacherUX.__proto__);

const array = [231,43,45,45]

console.log(student1.__proto__.__proto__);
