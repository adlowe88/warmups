// Arrays - Flatten and Reverse
//
// The goal of this exercise is to manipulate arrays by creating a function that can
// reverse an array and by creating a function that can flatten an array.
// Do not use any libraries to complete this task - write this stuff from scratch
// using standard JS methods and objects.
//
// Make two functions
// reverse
// flatten
//
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]
// You only need to make flatten work to one level deep! You should be able to flatten this
//  - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]
//
// Hint: You're going to need to be looping through the arrays to get a solution.

// Takes and array of arrays matrix and return an array of elements.

const arrays = ["Hello", ["World", 42] ];

const flatten = function (arrays) {
  let merged = [];
  return merged = merged.concat.apply(merged, arrays);
};

console.log(flatten( arrays ));

// function flatten(arrayOfArrays){
//   return [].concat.apply([], arrayOfArrays);
// }

const array = [1, 2, 3, 4];

const reverse = function (array) {
  return array.reverse();
};

console.log( reverse(array) );

const array1 = [1, 2, 3, 4];

const reverse1 = function (array) {

  let output = [];

  for ( let i = array1.length - 1; i >= 0; i--) {
    output.push(array1[i]);
  };
  return output;
};

console.log( reverse1(array1) );

const array2 = [1, 2, 3, 4];

const reverse2 = function (array2) {
  let output = [];
  //To create a NEW copy of an array you need slice()
  //Why? clone the Array object itself, array contents however are copied by reference
  // and are not deep cloned.
  const newArray = array.slice();

  for (let i = 0; i < array.length; i++) {

    let index = newArray.shift();
    // console.log(index);
    output.unshift(index);
  };
  return output;
};

console.log(reverse2(array2));


const reverse 3 = function () {

}:
