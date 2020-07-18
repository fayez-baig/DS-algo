// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   newString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }

// function reverse(str) {
//   let reversed = "";
//   for (const characters of str) {
//     reversed = characters + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   str.split("").reduce((reversed, character) => reversed + character, "");
// }

module.exports = reverse;
