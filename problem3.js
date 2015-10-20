// Projecteuler.net/problem=3
// Solved by John Smalley on 10-18-2015
/*Largest prime factor
Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

// variables
var tempPrimeFactor = 2; // hold temporary prime factor
var highPrimeFactor = 0; // hold highest found prime factor
var number = 600851475143; // number used to find prime factor
var leftOver = number; // left overs from every divisions


for (var i = 2; i <= leftOver; i++) {
	// checks to see if the number is divisible, i will always
	// be a prime factor
	if (leftOver % i === 0) {
		// stores the prime factor found
		tempPrimeFactor = i;
		// stores the left over of the number being divided by the 
		// prime factor
		leftOver = leftOver / i; 
		// assigns the highest prime factor if it was found
		if (tempPrimeFactor > highPrimeFactor) {
			highPrimeFactor = tempPrimeFactor;
		}

		// reset the prime factor counter
		i = 2;
	}
}

// displays the highest prime factor for the number
console.log(highPrimeFactor);
