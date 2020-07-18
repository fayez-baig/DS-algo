// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (key in charMapA) {
//     if (charMapA[key] !== charMapB[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// function buildCharMap(str) {
//   charMap = {};

//   const str1 = str.replace(/[^\w]/g, "").toLowerCase();
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap + 1 || 1;
//   }
//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (key in charMapA) {
//     if (charMapA[key] !== charMapB[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// function buildCharMap(str) {
//   charMap = {};

//   const str1 = str.replace(/[^\w]/g, "").toLowerCase();
//   for (let char of str1) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//   return charMap;
// }

function anagrams(stringA, stringB) {
  const str1 = cleanString(stringA);
  const str2 = cleanString(stringB);

  return str1 === str2;
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
module.exports = anagrams;
