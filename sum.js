// Write a node program that takes in an unlimited number of command
// line arguments, goes through each and prints out the sum of them.
// If any argument is not a whole number, skip it. Do support negative
// numbers though. If any argument is not a number, output an error
// message. We need at least two arguments.

// 1. Identify INPUT(S)
// 2. Identify OUTPUT / (identify edge-cases)
// 3. PROCESSING ---> Break it into smaller pieces...
            //   ---> Break THOSE pieces into smaller pieces...

/**
 * sum of command-line numbers provided by user
 * 
 * @param {Array<number>} numbers Array of numbers from CLI
 * @return {number} Sum of all provided numbers
 */
function sum(numbers) {
    let sum = 0;

    // make sure there are at least 2 numbers
    if(numbers.length < 2) {
        return console.log('NEEDS TO BE AT LEAST TWO NUMBERS.');
    }

    // command-line numbers...

    // loop through numbers

        // make sure it is a whole number (or output error)

        // add numbers to the sum total

    return sum;
}

console.log(
    sum([1]), // Show error
    sum([1, 2, 3]) // 6
);

