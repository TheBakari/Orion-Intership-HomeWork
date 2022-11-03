// const numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// const daysInWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// 1 Log in console the numbers from 0 to 15 using for loop
for (let i = 0; i <= 15; i++) {
  console.log(i);
}
//2. Print the numbers from 12 to 24 using while loop
let str = "",
  i = 12;
while (i <= 24) {
  str += i + ",";
  i += 1;
}

console.log(str);
//3. Log in console the ODD numbers from numDaysInMonth array
const numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const odds = numDaysInMonth.filter((number) => {
  return number % 2 !== 0;
});
console.log(odds);
//4. Log in console  the EVEN numbers from 10 to -20
for (let i = -20; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//5. Log in console all the elements of the daysInWeek   array
const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function days(week) {
  week.forEach(function (i) {
    console.log(i);
  });
}
days(daysInWeek);
//6. Calculate the sum of all the numbers in the numDaysInMonth array and log it in console
const numDaysInMont = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let sum = 0;

for (let i = 0; i < numDaysInMont.length; i++) {
  sum += numDaysInMont[i];
}

console.log(sum);

//  7. Find in super hero object list s how many super heroes have power level higher than  90
const superheroes = [
  {
    name: "Bruce Wayne",
    alias: "Batman",
    powerLevel: 50,
  },
  {
    name: "Wade Wilson",
    alias: "Deadpool",
    powerLevel: 90,
  },
  {
    name: "Peter Parker",
    alias: "Spiderman",
    powerLevel: 70,
  },
  {
    name: "Kristin Wells",
    alias: "Superwoman",
    powerLevel: 99,
  },
  {
    name: "Barry Allen",
    alias: "The Flash",
    powerLevel: 80,
  },
  {
    name: "Diana Prince",
    alias: "Wonder Woman",
    powerLevel: 90,
  },
  {
    name: "Ororo Munroe",
    alias: "Storm",
    powerLevel: 85,
  },
  {
    name: "Helen Parr",
    alias: "Elastigirl",
    powerLevel: 70,
  },
];

for (let i = 0; i < superheroes.length; i++) {
  //console.log(superheroes[i].powerLevel);
  if (superheroes[i].powerLevel > 90) {
    console.log(
      `Heroes that have more then 90 power Level are ${superheroes[i].powerLevel}`
    );
  }
}

//8. Write javascript program to check what day of the week is today.
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dan = new Date();
let day = weekday[dan.getDay()];
console.log(day);

// 9. Find and log in console how many letters “e” are in the next quote:
let quote =
  "There are times in life when people must know when not to let go. Balloons are designed to teach small children this";
count = 0;
for (let i = 0; i < quote.length; i++) {
  if (quote.charAt(i) == "e") {
    count += 1;
  }
}
console.log(count);
