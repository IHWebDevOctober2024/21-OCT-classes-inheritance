// Object Oriented Programming

// when we have functions inside objects we call them METHODS

const user = {
  userName: "Arnaldo",
  lastName: "García",
  // this is a method
  // using the function keyword syntax
  sayHi: function () {
    console.log(`Hi! I'm ${this.userName} and super nice to meet you`);
    console.log(this);
  },
  // shorthand syntax
  sayBye() {
    console.log(`This is the sayBye shorthand syntax ${this.userName}`);
    console.log(this);
  },
  // arrow function syntax
  callLucas: () => {
    console.log(`This is the callLucas arrow function syntax ${this.userName}`);
    console.log(this); // this is refering to the global object, in this case it doesn't work
  },

  addAge(age) {
    this.age = age;
  },
};

user.sayHi();
user.sayBye();
user.callLucas();

user.addAge(39);

console.log("THIS IS THE LAST CONSOLE.LOG: ", this);
