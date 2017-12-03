// Simple Sums
//
// Back to the world of Javascript! See if you can remember how it works...
//
// Write a program that can calculate the sum of the first n elements of the following sequences:
//
// s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
// s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
// For example:
//
// s1(4) = 0
// s2(4) = 10
// Use any language of your choice.
//
// Can you guess what the sum would be if n is infinity?

//read input
//check if number
//while char === " " continue

// str = new String ();
// eval ( str )

// s1 = 1 - 1 + 1 - 1 + 1 - 1  //etc
// s2 = 1 + 2 + 3 + 4 + 5 + 6  //etc
//
// const convertToString = function (s) {
//   s += ""
//   return s;
//   console.log (s);
// };
//
// const simpleSums = function (s1) {
//   return
// };

// simpleSums (s1);

const s1 = function (num) {

  let output = 1;

  for (let i = 0; i < num; i ++) {


    if (i % 2 === 0) {

      output --;

    } else {

      output ++;
    };
  };
  return output;
};

// const s1 = function ( num ) {
//   return num % 2 === 0 ? 0 : 1;
//   //OR num % 2 ? 0 : 1;
// };

console.log( s1 (10) );
console.log( s1 (9) );

const s2 = function (num) {
  let prevStep = 0;

  for (let i = 1; i <= num; i++) {

    prevStep += i;
  };
  return prevStep;
};

// const s2 = function () {
//   return ( num * (num + 1) / 2);
// };

console.log( s2(4) );
console.log( s2(10) );
