// Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
// Suggestions
//
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.


let str = "";
let output = "";
let check = false;

const anagram = {

  arrayLoop: function (str, arr) {
    str = str.toLowerCase();
    console.log(str);

    //Loop through the array
    for (let i = 0; i < arr.length; i++) {
      //Save the word at index i into testWord
      let testWord = arr[i];
      // console.log(arr[i]);
      //testWord.length = str
      //At each index, loop through the letters and search for in str
      for (let i = 0; i < str.length; i++) {
        //If the testWord contains the letter at str[i] at any point, continue, else break
        if (testWord.search(str[i]) > -1) {
          check = true;
          //DOUBLE LETTER CASE???
          continue;
        } else {
          check = false;
          break;
        }
      }
    }
    // if (check) {
    //   console.log(testWord);
      // return testWord;
    // }
  },
};

  // const anagrams = ["enlists", "google", "inlets", "banana"];
//
//
// const anagram = function (word) {
//   console.log(word);
//   for (let i = 0; i < anagrams.length; i++) {
//     anagrams[i];
//     if (word.toUpperCase().split("").sort().join("") === anagrams[i].split("").sort().join("")) {
//       return anagrams[i];
//     };
//   };
//   return "No Match!";
// };
//
// console.log(anagram("listen"));






//read input
//toLowerCase
//loop through the array
//at each index, check if it is a string, and then iterate through all the letters
//if letters match, then return current index, else continue
