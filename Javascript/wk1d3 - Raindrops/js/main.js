// Warmup - Raindrops
//
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
// Examples
//
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// // Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

// const raindropSpeak = function (num) {
//   let output;
//   //Case for singular
//   if (num % 3 === 0) {
//     output = "In raindrop-speak, this would be a simple "Pling"";
//   } else if (num % 5 === 0) {
//     output = "In raindrop-speak, this would be a simple "Plang"";
//   } else if (num % 7 === 0 ) {
//     output = "In raindrop-speak, this would be a simple "Plong"";
//   } else {
//     output = `Raindrop speak doesn't know what to make of that, so it just goes with the straightforward ${num}`;
//   };
//
//   //Case for double
//   if ((num % 3 === 0) && (num % 5 === 0) && (num 7 !== 0)) {
//     output = "In raindrop-speak, this would be a "PlingPlong"."
//   } else if ((num % 5 === 0) && (num % 7 === 0) && (num 3 !== 0)) {
//     output = "In raindrop-speak, this would be a "PlangPlong"."
//   } else if ((num % 3 === 0) && (num % 7 === 0) && (num % 5 !== 0) ) {
//     otuput = "In raindrop-speak, this would be a "PlingPlong"."
//   } else {
//     output = `Raindrop speak doesn't know what to make of that, so it just goes with the straightforward ${num}`;
//   };
//
//   //Case for triple
//   if ((num % 3 === 0) && (num % 5 === 0) && (num % 7 === 0)) {
//     output = "In raindrop-speak, this would be a "PlingPlangPlong"."
//   } else {
//     output = `Raindrop speak doesn't know what to make of that, so it just goes with the straightforward ${num}`;
//   };
//   console.log(output);
// };
//
//
// raindropSpeak(28);
// raindropSpeak(1755);
// raindropSpeak(34);


const raindrops = function(num) {
  let str1, str2, str3;
  // If the number contains 3 as a factor, output 'Pling'.
  if (num % 3 === 0) {
    str1 = 'Pling';
  } else {
    str1 = '';
  }
  // If the number contains 5 as a factor, output 'Plang'.
  if (num % 5 === 0) {
    str2 = 'Plang';
  } else {
    str2 = '';
  }
  // If the number contains 7 as a factor, output 'Plong'.
  if (num % 7 === 0) {
    str3 = 'Plong';
  } else {
    str3 = '';
  }
  // If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
  const raindropMessage = str1 + str2 + str3;
  if (!raindropMessage) {
    return num.toString();
  } else {
    return raindropMessage;
  }

  console.log(raindropMessage);
};

raindrops(28);
raindrops(1755);
raindrops(34);
