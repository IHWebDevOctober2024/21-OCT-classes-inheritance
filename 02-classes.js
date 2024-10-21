console.clear();
class User {
  constructor(userName, hobbies = ["Go to the campus"] /*default value*/) {
    // this is the function that is going to run every time I create a new user;
    this.userName = userName;
    this.hobbies = hobbies;
    this.campus = "Ironhack Barcelona"; // all the Users are going to share this one
  }

  sayHi() {
    console.log(`Hi, I'm ${this.userName}`);
  }
}

const user1 = new User("Marcel", ["Music", "Gaming", "Coding"]);
const user2 = new User("Marina");


user1.sayHi()
user2.sayHi()

console.log(user1);