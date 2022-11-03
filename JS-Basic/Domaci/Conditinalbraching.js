// 1.Using if..else, write the code which gets a number via prompt and then shows in alert:
// •	1, if the value is greater than zero,
// •	-1, if less than zero,
// •	0, if equals zero.
// In this task we assume that the input is always a number.

let number = 0;

if (number > 0) {
  console.log("Value is greater then zero");
} else if (number < 0) {
  console.log("value is less then zero");
} else {
  console.log("Value equals zero");
}

// 2. 1.Using if..else, write the code which gets a number via prompt and then shows in alert:
// •	1-3, if the value is greater than zero but less then 3
// •	3-5, if value is greater then 3 but less then 5
// •	5-7 if value is qreater then 5

let taskTwo = 4;

if (taskTwo > 0 && taskTwo < 3) {
  console.log("Number is greater then 0 but less then 3");
} else if (taskTwo > 3 && taskTwo < 5) {
  console.log("value is greater then 3 but less then 5");
} else {
  console.log("value is qreater then 5");
}

// 3 Rewrite a code using tenerary operators
// let result;
// let a = 1;
// let b = 2;

// if (a + b < 5) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let a = 1;
let b = 2;

let result = a + b < 5 ? "Below" : "Over";

console.log(result);

// 4. Want to find out how old you'll be? Calculate it!
// •	Store your birth year in a variable.
// •	Store a future year in a variable example 2050
// •	Calculate your 2 possible ages for that year based on the stored values.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

let myYear = 1993;
let futureYear = 2050;

let totalage = myYear - futureYear;
let totalAgeTwo = futureYear - myYear;
console.log(`I will be either ${totalage} or i will be ${totalAgeTwo}`);

// Give user the info!
// •	Write a javascript program that will ask user 3 questions in order
// •	What is your age?
// •	What is your name?
// •	what do you do for a living?
// •	After the user has given all the answers, alert the user that Username is {name answer from your user} age is {age answer from user} and he is doing {work answer from user)
// let someWord = "someword";
// let changedWord = "";

// for (let i = 0; i < someWord.length; i++) {
//   if (i === 0 || i === 1) {
//     changedWord += someWord[i].toUpperCase();
//   } else {
//     changedWord += someWord[i];
//   }
// }
