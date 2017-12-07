// Objects!
//
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}


// Multiply each value in objectToMap by a random number and return an object with the changed values
const randomNumber = _.random(20);
console.log(randomNumber);

const mappedObject = _.mapObject(objectToMap, function (val, key) {
  return val * randomNumber;
});

console.log(mappedObject);

// Get an array version of objectToMap that looks like this:
// [["start", 100], ["middle", 853], ["end", 912]]
const objectToArray = _.pairs(objectToMap);
console.log(objectToArray);
// Flip objectToMap around so that it looks like this:
 // { "100" : "start", "853" : "middle", "912" : "end" }
 const invertedObject = _.invert(objectToMap);
 console.log(invertedObject);
// Remove the "start" key from objectToMap in two different ways
const omitKey = _.omit(objectToMap, "start");
console.log(omitKey);

const omitKeyPredicate = _.omit(objectToMap, function (value, key) {
  return key === "start";
});

console.log(omitKeyPredicate);
