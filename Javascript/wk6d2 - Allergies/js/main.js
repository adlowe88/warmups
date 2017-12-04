// Allergies Warmup
//
// An allergy test produces a single numeric score which contains the information
// about all the allergies the person has (that they were tested for).
//
// The list of items (and their value) that were tested are:
//
// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
//
// Now, given just that score of 34, your program should be able to say:
//
// Whether Tom is allergic to any one of those allergens listed above.
// All the allergens Tom is allergic to.
//
// const total = 0;

// const allergyBits = {eggs: 1, peanuts: 2, shellfish: 4, strawberries: 8,
// tomatoes: 16, chocolate: 32, pollen: 64, cats: 128};

// const allergens = {
//
//   scorecard: {
//     1: "eggs",
//     2: "peanuts",
//     4: "shellfish",
//     8: "strawberries",
//     16: "tomatoes",
//     32: "chocolate",
//     64: "pollen",
//     128: "cats"
//   },
//
//   getKeys: function () {
//
//     // const keys = Object.keys (this.scorecard).reverse();
//     // console.log(keys);
//     //
//     // option2 = keys.map(function (num) {
//     //   return parseInt(num);
//     // });
//     // console.log(option2);
//
//     option3 = Object.keys (this.scorecard).map(Number).reverse();
//     console.log(option3);
//     return option3;
//   }
//
//   getList: function (score) {
//     const keys = this.getKeys();
//     let returnArr = [];
//
//     for (let i = 0; i < keys.length; i++) {
//       // console.log(keys[i]);
//       if ( score >= keys[i]) {
//         returnArr.push ( this.scorecard [ keys[i] ]);
//         console.log( this.scorecard [ keys[i] ]);
//       };
//     };
//
//     console.log(`returnArr = ${ returnArr}`);
//   },
//
//   list: function (score) {
//     console.log(score);
//     let allergyList = this.getList( score );
//     console.log( allergyList );
//
//     if ( allergyList.length > 0 ) {
//       console.log(`You are allergic to: ${allergyList.join(',')}.`);
//     } else {
//       console.log(`No allergies`);
//     }
//   }
//
//
// };





const scores = function (num) {
  let output = "";
  if ((num & 1) !== 0) {
    output += "egg";
  };
  if ((num & 2) !== 0) {
    output += "peanuts";
  };
  if ((num & 4) !== 0) {
    output += "shellfish";
  };
  if ((num & 8) !== 0) {
    output += "stawberries";
  };
  if ((num & 16) !== 0) {
    output += "tomatoes";
  };
  if ((num & 32) !== 0) {
    output += "chocolate";
  };
  if ((num & 64) !== 0) {
    output += "pollen";
  };
  if ((num & 128) !== 0) {
    output += "cats";
  };
  return output;
};
