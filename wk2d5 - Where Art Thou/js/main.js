// Wherefore art thou
//
// Make a function called whatIsInAName that will take two arguments. The function will look through an array of objects
// first argument) and returns an array of all objects that have matching property and value pairs (second argument).
//
// Each property and value pair of the source object has to be present in the object from the collection if it is to be
//  included in the returned array.
//
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first:
//   "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from
//   the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
//
// Spoiler - All the values die at the end of the function.
//
// HINT: Call the function like so:
//
const arrayObj = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
];

// whatIsInAName( arrayObj, { last: "Capulet" } );
// Bonus - see if you can get it to work with additional values in the second argument

// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

const whatIsInAName = function (arrObj, valuePair) {
  //Read the second argument
  //(for value in arrayObj) -- > search through object for the matching key value pair
  //Return the whole object
  // console.log(valuePair);
  //Convert valuePair into an array
  // let valuePairArr = [];
  // let valuePairArr2 = [];
  // valuePairArr.push(Object.keys(valuePair));
  // valuePairArr.push(Object.values(valuePair));
  // // let valuePairArr3 = valuePairArr.concat(valuePairArr2);
  // console.log(valuePairArr);

  //Store the valuePair into an array

  let valuePairArr = Object.keys(valuePair);
  console.log(valuePairArr);
  valuePairArr.push(Object.values(valuePair));
  console.log(valuePairArr);


  for (let i = 0; i < arrayObj.length; i++) {
    let arr = Object.entries(arrObj[i]);
    // console.log(arr);
    for (let i = 0; i < arr.length; i++){
      console.log(arr[i]);
      if (arr[i] === valuePairArr) {

      };
    };
  }
};

whatIsInAName(arrayObj, { last: "Capulet" });




// const whatIsInAName = function (collection, source) {
//   const srcKeys = Object.keys(source);
//   console.log( srcKeys );
//   console.log( source[srcKeys] );
//
//   collection.filter(function () {
//     console.log(obj[srcKeys]);
//     if ( obj.hasOwnPropety(srcKeys) && source[srcKeys] === obj[srcKeys] ) {
//       console.log(`true`);
//     };
//     return false;
//   });
// };
