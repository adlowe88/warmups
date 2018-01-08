// Prime Factors
// A prime number is any number greater than one that is only divisible by itself.
//
// 1 is not a prime number (it is not greater than 1).
// 2 is a prime number (it is greater than one and is only evenly divisible by itself and 1).
// 3 is a prime number (as above).
// 4 is not a prime number (it is evenly divisible by 2).
// The prime factors of an integer are the set of prime numbers will divide the integer exactly.
//
// Example
// What are the prime factors of 60?
//
// 1 is not a prime number.
// 2 is a prime number. 60 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 30.
// 30 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 15.
// 15 is not evenly divisible by 2.
// 3 is the next prime number. 15 is evenly divisible by 3 (therefore 3 is a prime factor of 60), and leaves 5.
// 4 is not a prime number.
// 5 is a prime number. 5 is evenly divisible by 5 (therefore 5 is a prime factor of 50), and leaves 1.
// When we get to 1, we're done.
// The prime factors of 60 are 2, 2, 3, 5
// You can check this yourself:
//
// 2 * 2 * 3 * 5
// = 4 * 15
// = 60
// Success!
// YOUR TASK
// Write a function in Javascript which takes a number as its argument and returns an array containing the prime factors of that number.

// num % i === 0

// const primeFactors = function ( num ) {
//   let output = [];
//   let isPrime;
//
//   //Find divisors from first prime
//   for (let i = 2; i <= num; i++) {
//     //If it is evenly divisible
//     if (num % i === 0) {
//       for (let j = 2; j < i / 2; j++ ) {
//         if (i % j === 0) {
//           isPrime = false;
//         } else {
//           isPrime = true;
//         }
//       }
//     }
//   }
//
// }

// const primeFactors = function ( num ) {
//   let output = [];
//
//   for ( let i = 2; i <= num; i++ ) {
//     while ( num % i === 0 ) {
//       output.push(i);
//       num /= i;
//     }
//   }
//   return output;
// };
//
// console.log(primeFactors(60));
// console.log(primeFactors(144));
// console.log(primeFactors(10));


const prime = {
  range: [],
  primeRange: [],
  primeFactorRange: [],

  getRange: function (num ) {
    this.range = [];
    for (let i = 2; i <= num; i++) {
      this.range.push(i);
    }
    return this.range;
  },

  getPrimeRange: function (arr) {
    this.primeRange = [];
    for (let i = 0; i < arr.length; i++) {
      let isPrime = true;
      let potentialPrime = arr[i];

      for (let j = 2; j < potentialPrime; j++) {
        if (potentialPrime % j === 0) {
          isPrime = false;
        }
      }

      if ( isPrime ) {
        this.primeRange.push(potentialPrime);
      }
    }
    return this.primeRange;
  },

  getPrimeFactorRange: function (num) {
    this.primeFactorRange = [];

    const numPrimes = prime.getPrimeRange( prime.getRange(num));
    //loop through primes
    for (let i = 0; i < numPrimes.length; i++) {
      while ( num % numPrimes[i] === 0) {
        this.primeFactorRange.push( numPrimes[i]);
        num /= numPrimes[i];
      }
    }
  }

};

// console.log(prime.getPrimeRange( prime.getRange(10) ));
console.log(prime.getPrimeFactorRange ( 60 ) );
