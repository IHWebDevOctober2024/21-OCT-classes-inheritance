// I'm creating my own array method
Array.prototype.logAll = function () {
  //console.log(this); // this gives me access to the array

  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
};

const myArray = [132, 123, 321, 321];
const otherArray = ["Hello", "world"];

myArray.logAll();
otherArray.logAll();

const name = "adsdsankdsa";

String.prototype.capitalizeFirst = function () {
  const firstChar = this[0].toUpperCase();
  const rest = this.slice(1);

  return firstChar + rest;
};

console.log(name.capitalizeFirst());

// otherArray.capitalizeFirst() // this is not going to work, our method is just for strings
