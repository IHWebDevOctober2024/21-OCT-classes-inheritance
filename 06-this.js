console.clear();

console.log(this);

console.log(globalThis);

let timer = 100;
/* 
const myInterval = setInterval(() => {
  timer--;
  console.log(`This is the timer: ${timer}`);

  if (timer < 90) {
    clearInterval(myInterval);
  }
}, 50);

console.log("THIS IS TIMER: ", timer); */

/* setTimeout(() => {
  // Asynchronous code
  console.log("THIS IS GOING TO BE DISPLAYED AFTER ONE SECOND");
}, 1000); */

// console.log("Outside of the TIMEOUT"); // this is displayed before the setTimeout
