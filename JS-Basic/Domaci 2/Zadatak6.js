function myFunction(string) {
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(myFunction("abcdefghijklmn"));
