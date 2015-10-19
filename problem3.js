// Projecteuler.net/problem=3
// Solved by John Smalley on 10-18-2015
/*Largest prime factor
Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

// variables
var primeFactor;
var max = 600851475143;


// checks if prime number
var isPrime = function(num) {
	for (var i = num - Math.floor(num/2); i > 1; i--) {
		// return false if divisible by another number
		if (num % i === 0) {
			return false;
		}
	}
	// return true if it is a prime number
	return true;
};

// finds max prime factors
for (var i = max - Math.floor(max/2); i > 1; i--) {
	if (max % i === 0) {
		if (isPrime(i)) {
			primeFactor = i;
			i = 0;
		}
	}
}

// prints max number
console.log(primeFactor);
