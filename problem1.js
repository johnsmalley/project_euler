// Projecteuler.net/problem=1
// Solved by John Smalley on 10-18-2015
/*Multiples of 3 and 5
Problem 1 - If we list all the natural numbers below 10 that are multiples 
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

// Store sum of all the multiples between 3 or 5
var sum = 0;

// for loop checking between 0 and 1000
for (var i = 0; i < 1000; i++) {
	// checks if the number is a multiple of 3
	// and adds that value to the sum
	if (i % 3 === 0) {
		sum += i;
	}
	// checks if the number is a multiple of 5
	// and adds that value to the sum
	else if (i % 5 === 0) {
		sum += i;
	}
}

// displays the sum of all the multiples of 3 or 5 below 1000
console.log(sum);