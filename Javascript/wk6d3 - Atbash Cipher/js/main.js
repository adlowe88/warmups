// Atbash Cipher - JavaScript
//
// The Atbash cipher is a simple substitution cipher that relies on transposing all
//  the letters in the alphabet such that the resulting alphabet is backwards.
//  The first letter is replaced with the last letter, the second with the second-last, and so on.
//
// An Atbash cipher for the Latin alphabet would be as follows:
//
// Plain:  abcdefghijklmnopqrstuvwxyz
// Cipher: zyxwvutsrqponmlkjihgfedcba
// It is a very weak cipher because it only has one possible key, and it is a simple
// monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.
//
// Examples
//
// Encoding "test" gives "gvhg"
// Decoding "gvhg" gives "test"

const plain = "abcdefghijklmnopqrstuvwxyz";
const cipher = "zyxwvutsrqponmlkjihgfedcba";

const atbash = function (str) {
  //Store result
  let output = "";
  //Convert input to lower case letters
  str = str.toLowerCase();
  //loop through and find index of letter in plainArr
  for (let i = 0; i < str.length; i++) {
    //Reading the letter
    let letter = str.charAt(i);
    //Index of the char in the plain array
    let letterIndex = plain.indexOf(letter);
    //if it is a letter or not, otherwise exit
    if (letterIndex >= 0) {
      //Find the char at that index in the cipher
      let cipherLetter = cipher.charAt(letterIndex);
      output += cipherLetter;
    } else {
      console.log("Not a valid word!");
    };
  };
  console.log(output);
  return output;
};

atbash("test");
atbash("gvhg");
