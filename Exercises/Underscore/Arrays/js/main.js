// Arrays!
//
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
const uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];
const arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// Create an array of every five numbers between 30 and 101
const range = _.range(30, 102, 5);
console.log(range);

// Turn bumpyArr into one flat array (no nested arrays)
const flatBumpy = _.flatten(bumpyArr)
console.log(flatBumpy);

// Remove all of the falsey elements in the uncompactedArr
const noFalsey = _.without(uncompactedArr, false, NaN, undefined);
console.log(noFalsey);

// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
const allArrays = [ [ 1, 25, 100 ], [ 1, 14, 25 ], [24, Infinity, -0] ];
const unique = _.uniq(_.flatten(allArrays));
console.log(unique);

// Find the index of the first element in numbers that is over 7 and is even
const evenOver7 = _.findIndex(numbers, function(num){
  return (num > 7 && num % 2 === 0);
});
console.log(evenOver7);

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
const object = _.object([ "age", "location" ], [ NaN, undefined ]);
console.log(object);
