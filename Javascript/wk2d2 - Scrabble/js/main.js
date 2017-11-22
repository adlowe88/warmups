// Scrabble Score
//
// Write a program that, given a word, computes the scrabble score for that word.
//
// scrabble("cabbage")
// # => 14
// Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.
//
// Letter Values
//
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// Extensions
//
// You can play a :double or a :triple letter.
// You can play a :double or a :triple word.

//iterate through string
//compare each letter to hard coded scores
//return scores
//


const word = {

  values: {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  },

  scrabble: function (word) {
    let score = 0;
    word = word.toUpperCase();
    console.log(word);

    for (let i = 0; i < word.length; i++) {
      // console.log(word[i]);
      for (let key in this.values) {
        // console.log(this.values[key]);
        //Within the two arrays, can you find the current letter in the arrays?
        if (this.values[key].indexOf(word[i]) > -1) {
          score += parseInt(key);
          break;
        }
      }
    }
    return score;
  }
};

//You could invert the values and keys (i.e. LIST EVERY LETTER + SCORE) then you can look up the letter
// and just return its value --> which would make it easier to search for scores

// const wordScore = function (str) {
//   //Read input and iterate through the string
//   for (let i = 0; i < str.length; i++) {
//     for (key in scores[i]) {
//       if (scores[i][key].indexOf(str[i]) !== -1) {
//         score.push(scores.key[i]);
//       };
//     };
//   };
//   return score;
// };
//
//
//
// const wordScore = function (str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.search[Object.values(scores[i])]) {
//       score = Object.values(scores);
//     };
//   };
//   return score;
// };
//
// const scrabble = function (str) {
//   let word = str.toUpperCase();
//
//
// };
