// Pairwise
//
// Given an array arr, find element pairs whose sum equal the second argument arg and
// return the sum of their indices.
//
// If multiple pairs are possible that have the same numeric elements but different indices,
// return the smallest sum of indices. Once an element has been used, it cannot be reused to pair
//  with another.
//
// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are
//  [7, 13] and [9, 11]. We can then write out the array with their indices and values.
//
// Index	0	1	2	3	4 Value	7	9	11	13	15 Below we will take their corresponding indices and add them.
//
// 7 + 13 = 20 => Indices 0 + 3 = 3 9 + 11 = 20 => Indices 1 + 2 = 3 3 + 3 = 6 => Return 6


//iterate through the array and see if i + ( i + 1 ) = num

//
// const pairwise = function (arr, num) {
//   let indexSum = 0;
//   //read input and sort from lowest to highest
//   const sortedArray = arr.sort(function(a, b){return a - b});
//
//   for (let i = 0; i < sortedArray.length; i++) {
//     //the value we are currently using as first index
//     for (let j = i + 1; j < sortedArray.length; j++) {
//       if (sortedArray[i] + sortedArray[j] === num) {
//         indexSum = i + j;
//         break;
//       } else {
//         continue;
//       };
//     };
//   };
//   return indexSum;
// };
//
// console.log(pairwise([7, 9, 11, 13, 15], 20));
// console.log(pairwise([2, 5, 1, -1, 2, 23], 7));

const pairwise = function ( arr, arg ) {
  const pairArr = arr.slice();
  let sum = 0;
  for (let i = 0; i < pairArr.length; i++) {
    for (let j = i + 1; i < pairArr.length; j++) {
      if ( pairArr[i] + pairArr[j] === arg) {
        sum += i + j;
        pairArr[i] = pairArr[j] = NaN;
      };
    };
  };
  return sum;
};

console.log(pairwise([7, 9, 11, 13, 15], 20));
