// Age Verification.
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if age can access the site
function canAccessSite(age) {
  return age > 18;
}

// Function to validate age input
function isValidAge(age) {
  const num = parseInt(age);
  return !isNaN(num) && num >= 0 && num <= 120;
}

// Prompt user for their age
rl.question('Please enter your age: ', (input) => {
  // Validate input
  if (!isValidAge(input)) {
    console.log('Invalid input. Please enter a number between 0 and 120.');
    rl.close();
    return;
  }

  // Convert to number
  const age = parseInt(input);

  // Check access and display result

    if (age < 18) {
        console.log("You must be atleast eighteen years old to access to this site.");
    }

    else if (age > 18 && age < 120) {
        console.log("You are old enough to access to this site.");
    }


    else {
        console.log("You must be honest about your age.");
    }


  // Close the readline interface
  rl.close();
});




