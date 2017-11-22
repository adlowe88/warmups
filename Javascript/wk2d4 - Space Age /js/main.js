// Space Age Warmup
//
// Given an age in seconds, calculate how old someone would be on:
//
// Earth: orbital period 365.25 Earth days, or 31557600 seconds
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that
 // they're 31 Earth-years old.
//
// There are 31557600 seconds in an Earth year.
//
// Bonus:
//
// Have the option of either returning the ages on all planets, or any of the above planets individually.


const planets = {

  [name: Earth, period: 1, seconds: 31557600],
  [name: Mercury, period: 0.2408467],
  [name: Venus, period: 0.61519726],
  [name: Mars, period: 1.8808158],
  [name: Jupiter, period: 11.862615],
  [name: Saturn, period: 29.447498],
  [name: Uranus, period: 84.016846],
  [name: Neptune, period: 164.79132],

  convertIndividual: function (num, key) {
    debugger;
    this.key.seconds = num / this.key.period;
    this.key.age = this.key.seconds / 86400;
    console.log(`The age of ${ this.key } is ${ this.key.age }`);
  }

};

planets.convert(34151389, "Mercury");

//To calculate the number of seconds
// const seconds = function (key) {
//   let seconds = planets.Earth.seconds / planets.key.period;
//   console.log(seconds);
// };
//
//
// //Convert into number of seconds /year
//
// const convert = function (period) {
//   //The number of seconds per year for the input planet
//   let seconds = (365.25 / period) * 24 * 60 * 60;
//   console.log(seconds);
// };


// const age = function (num, key) {
//   planets.Mercury.seconds = num / planets.Mercury.period;
//   //Convert to years
//   planets.Mercury.age = planets.Mercury.seconds / 86400;
//
//   planets.key.seconds = num / planets.key.period;
//   planets.
//
// };



const spaceAges = function(seconds) {
  for (let key in planets)) {
    let earthYears = seconds / 31557600;
    console.log ( planetAges[key] );
    console.log( `You age on ${key} is ${ earthYears / planetAges[key] }.` );
  };
};

spaceAges(31557600);

const singlePlanet = function (seconds, planet) {
  let earthYears = seconds / 31557600
  console.log( `Your age on ${planet} is ${earthYears / planetAges[key]}.`);
};

singlePlanet(seconds, "Earth");
