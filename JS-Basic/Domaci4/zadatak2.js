const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

let name = characters.map(function (character) {
  return character.name;
});
console.log(name);

let visina = characters.map(function (element) {
  return element.height;
});
console.log(visina);

const nameAndHeight = characters.map((characters) => ({
  name: characters.name,
  height: characters.height,
}));
console.log(nameAndHeight);

const onlyName = characters.map((characters) => characters.name.split(" ")[0]);

console.log(onlyName);

//***REDUCE***
//1. Get total mass of all characters
const mass = characters.reduce((i, current) => i + current.mass, 0);
console.log(`Sume of all mass is ${mass}`);

//2. Get total height of all characters
const height = characters.reduce((some, current) => some + current.height, 0);
console.group(`Sum of all height is ${height}`);

// //3. Get total number of characters by eye color
const totalNumber = characters.reduce(
  (some, current) => some + current.eye_color,
  0
);
// console.log(`total number of character by eye color is${totalNumber}`);

//4. Get total number of characters in all the character names
const totalNumOfCharacters = characters.reduce(
  (acc, cur) => acc + cur.name.length,
  0
);

console.log(totalNumOfCharacters);

//***FILTER***
//1. Get characters with mass greater than 100
const filterMass = characters.filter((characters) => characters.mass > 100);
console.log(filterMass);

//2. Get characters with height less than 200

const charLess = characters.filter((characters) => characters.height < 200);
console.log(charLess);
//3. Get all male characters

const charGenderMale = characters.filter(
  (characters) => characters.gender === "male"
);
console.log(charGenderMale);
//4. Get all female characters

const charGenderFemale = characters.filter(
  (characters) => characters.gender === "female"
);

console.log(charGenderFemale);

//***SORT***
//1. Sort by mass
const sortMass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortMass);

//2. Sort by height

const sortHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortHeight);

//3. Sort by name
const byName = characters.sort((a, b) => {
  a.name < b.name ? 1 : -1;
});
console.log(byName);

//4. Sort by gender
const genderSort = characters.sort((a, b) => {
  a.gender === "male" && b.gender === "male" ? 1 : -1;

  // if (a.gender === "male" && b.gender === "male") return 1;
  // else return -1;
});
console.log(genderSort);

//***EVERY***
//1. Does every character have blue eyes?
const charEvery = characters.every(
  (characters) => characters.eye_color === "blue"
);
console.log(charEvery);
//2. Does every character have mass more than 40?
const charMass = characters.every((characters) => characters.mass > 40);
console.log(charMass);
//3. Is every character shorter than 200?
const charShort = characters.every((characters) => characters.height < 200);
console.log(charShort);
//4. Is every character male?
const charGender = characters.every(
  (characters) => characters.gender === "male"
);
console.log(charGender);
//***SOME***
//1. Is there at least one male character?
const someChar = characters.some((characters) => characters.gender === "male");
console.log(someChar);

//2. Is there at least one character with blue eyes?
const someEyeys = characters.some(
  (characters) => characters.eye_color === "blue"
);
console.log(someEyeys);

//3. Is there at least one character taller than 210?
const someheigth = characters.forEach((characters) => characters.height > 210);
console.log(someheigth);

//4. Is there at least one character that has mass less than 50?
const someMass = characters.some((characters) => characters.mass < 50);
console.log(someMass);
