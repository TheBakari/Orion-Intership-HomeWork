//Convert number to string
// let a = 223;
// let text = a.toString(2);
// console.log(text);

// function numb() {
//   let a = 223;
//   let text = a.toString(2);
//   return text;
// }
// console.log(numb());
//////////////////////////

// let b = 5;
// function inc() {
//   const a = ++b;
//   return a;
// }
// console.log(inc());
///////////////////////////////////////////

// let a = 5;
// function decre() {
//   const b = --a;
//   return b;
// }
// console.log(decre());
////////////////////////////////

function sabiranje(a, b) {
  let c = a + b;
  return c;
}
console.log(sabiranje(5, 2));
////////////////////////////////////////
// let a = 1;
// let b = 2;

// let number = a - b;
// console.log(number);
function oduzimanje(a, b) {
  let c = a - b;
  return c;
}
console.log(oduzimanje(5, 2));
/////////////////////////////////////////

// let a = 1;
// let b = 2;

// let number = a * b;
// console.log(number);
function mnozenje(a, b) {
  let c = a * b;
  return c;
}
console.log(mnozenje(5, 2));
//////////////////////////////////
// let a = 1;
// let b = 2;

// let number = a / b;
// if (b == 0) {
//   console.log("The number is no devided by 0");
// } else {
//   a / b;
// }
// console.log(number);

function deljenje(a, b) {
  let c;
  if (b === 0) {
    console.log("the number can be devided by 0");
  } else {
    c = a / b;
  }
  return c;
}
console.log(deljenje(5, 0));
// ////////////////////////////////////////////////////////////////

function matematika(a, b) {
  let c = Math.pow(a, b);
  return c;
}
console.log(matematika(5, 2));

//kalkulator
// let a = 2;
// let b = 0;
// let op = "/";

// switch (op) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     if (b !== 0) {
//       console.log(a / b);
//     } else {
//       console.log("Can not devide by 0");
//     }
//     b !== 0 ? console.log(a / b) : console.log(" Can not devide by 0");
//     break;
//   default:
//     console.log("chose operator");
// }

//isGreaterthen

// let a = 12;
// let b = 2;
// if (a < b) {
//   console.log("B is greater then A");
// } else if (b < a) {
//   console.log("A is greater then B");
// } else if (a === b) {
//   console.log("Numbers are equal");
// }

function uporedi(a, b) {
  if (a === b) {
    console.log("Numbers are equal");
  } else if (b < a) {
    console.log("A is greater then B");
  } else {
    console.log("B is greater then A");
  }
}
console.log(uporedi(1, 2));
///////////////////////////////////////////////////////////////////////////
let a = 5;
let b = 10;

function minMax(a, b) {
  let c;
  c = Math.max(a, b);
  return c;
}
console.log(minMax(5, 2));
/////////////////////////////////////////////////////////////////////////
function maxMin(a, b) {
  let c;
  c = Math.min(a, b);
  return c;
}
console.log(maxMin(5, 222));
/////////////////////////////////////////////////////////////////////////////
function neka(a) {
  if (a % 2 === 0) {
    return true;
  } else return false;
}

console.log(neka(5));

////////////////////////////////////////
//JOin twi strings
let wordOne = "hello";
let wordTwo = "World";

function word(wordOne, wordTwo) {
  return `${wordOne} ${wordTwo}`;
}
console.log(word("hello", "World"));
