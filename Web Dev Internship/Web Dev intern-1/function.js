function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var dob = new Date(dobInput);
    var now = new Date();
    
    var age = now.getFullYear() - dob.getFullYear();
    
    // Check if the birthday has occurred this year
    if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
      age--;
    }
    var result = document.getElementById('result');
    result.innerHTML = "You are " + age + " years old.";
  }
  