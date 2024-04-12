function calculateAge() {
  // Get the user's input for date of birth
  var dobInput = document.getElementById('dob').value;

  // Create a new Date object from the user's input
  var dob = new Date(dobInput);

  // Create a new Date object for today's date
  var now = new Date();
  
  // Calculate the age by subtracting the birth year from the current year
  var age = now.getFullYear() - dob.getFullYear();
  
  // Check if the birthday has occurred this year
  if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
    age--; // If not, decrease the age by 1
  }
  
  // Get the result element to display the age
  var result = document.getElementById('result');
  
  // Set the result to show the calculated age
  result.innerHTML = "You are " + age + " years old.";
}
