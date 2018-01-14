//BUBBLE SORT FUNCTION

const bubbleSort = (arr) => {
  arr = [...arr]; // Copy the array.
  let end = arr.length - 1;

  while(end > 0) {
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {

        // Swap two values
        let largerValue = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = largerValue;

      }
    }
    end--;
  }
  return arr;
}

const values = [];
for (let i = 0; i < 1000; i++) {
  values.push( Math.random() * 10000 );
};

console.log( bubbleSort( values ) );




//
// const bubbleSort = function (arr) {
//   let output = [];
//   debugger;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] <= arr[i + 1]) {
//       continue;
//     } else {
//       arr[i] = arr[i + 1];
//       arr[i + 1] = arr[i];
//     };
//     output.unshift(arr[length - 1]);
//   };
//   console.log(output);
// };
//
// bubbleSort([1,3,11,4,77]);
// bubbleSort([99,2,55,22,1]);
// bubbleSort([8,6,12,44,99]);


// const bubbleSort = function (arr) {
//   let output = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] <= arr[i + 1]) {
//       output.push(arr[i]);
//       output.push(arr[i + 1]);
//     } else {
//       output.push(arr[i + 1]);
//       output.push(arr[i]);
//     };
//     arr.unshift(arr[length - 1]);
//   };
//   console.log(output);
// };
//
// bubbleSort([1,3,11,4,77]);
// bubbleSort([99,2,55,22,1]);
// bubbleSort([8,6,12,44,99]);
