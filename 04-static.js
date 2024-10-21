console.clear();

class Person {
  static numberOfPeople = 0; // a property we can access using the Class only, not the object
  #id;
  #cash;
  constructor(surname, lastname, email, bootcamp, hobbies, id) {
    this.surname = surname;
    this.lastname = lastname;
    this.email = email;
    this.bootcamp = bootcamp;
    this.hobbies = hobbies;
    this.#id = id;
    this.#cash = 0;
    Person.numberOfPeople++;
  }

  addMoney(amount) {
    this.#cash += amount;
  }

  withdraw(amount) {
    this.#cash -= amount;
  }

  checkMoney() {
    console.log(`You have ${this.#cash}€`);
  }
}

const user1 = new Person(
  "Lolo",
  "Trololó",
  "trololo@gmail.com",
  "Ironhack Web dev",
  ["Eat pizza", "gaming", "Coffee"],
  "456546546E"
);

const user2 = new Person(
  "Lolo",
  "Trololó",
  "trololo@gmail.com",
  "Ironhack Web dev",
  ["Eat pizza", "gaming", "Coffee"],
  "21354654654F"
);

console.log(user1);
console.log(user2);

user1.addMoney(100);


user1.checkMoney()