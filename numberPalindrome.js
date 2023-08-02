// Import the 'readline' module from Node.js standard library
const readline = require('readline');

// Function to check if a given number is a palindrome
function isPalindrome(n) {
  let result = 0;
  let q = n;

  // Reverse the number by extracting its digits
  while (q !== 0) {
    let rem = q % 10;// Extract the last digit
    result = result * 10 + rem;// Build the reversed number by adding the extracted digit
    q = Math.floor(q / 10);// Remove the last digit from the original number
  }
  // If the reversed number is equal to the original number, it's a palindrome
  return result === n;
}

// Main function to run the program
function main() {
  // Create an interface for reading input from the user and writing output to the console
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Ask the user to enter a number
  rl.question("Enter a number and we will tell you if it is a palindrome or not: ", (n) => {
    rl.close();
    if (isPalindrome(Number(n))) {
      console.log("The number you entered is a palindrome");
    } else {
      console.log("No, the number entered is not a palindrome");
    }
  });
}

main();
