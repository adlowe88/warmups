// Happy Numbers
// A happy number is defined by the following process:
//
// Starting with any positive integer,
// replace the number by the sum of the squares of its digits, and
// repeat the process until
// the number equals 1 (where it will stay),
// or it loops endlessly in a repeating cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers, while those
// for which this process do not end in 1 are unhappy numbers.
//
// Task
// Your task is to write a program in Javascript which prints the first 10 happy numbers,
// starting from 1.
//
// Here are the first 10 happy numbers, for you to compare your output against:
//
// 1
// 7
// 10
// 13
// 19
// 23
// 28
// 31
// 32
// 44

//Find sum of squares of it's digits
//!= 1 continue, else break

const happyNumbers = function ( num ) {
  let sum = 0;
  //Find the number of digits in the num
  let numDigits = num.toString().length;
  //Read num input, check if it is positive
  if ( num > 0 ) {
    //Take the first digit and add it's square to sum
    let firstDigit = num % 10;
    sum += (firstDigit * firstDigit);
    //Break down number into digits
    for (let i = 10; i < numDigits; i *= 10) {
      let nextdigit = num / i % 10;
      //Add sum of square to sum
      sum += (nextDigit * nextDigit);
      console.log(sum);
    }
  };
}

happyNumbers(10);
