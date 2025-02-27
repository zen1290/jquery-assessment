$(document).ready(function () {
    $("#calculate").click(function () {
   
      const dob = new Date($("#dob").val());
  
    
      if (isNaN(dob.getTime())) {
        $("#result").text("Please enter a valid date of birth.");
        return;
      }
  
      
      const today = new Date();
  
      let age = today.getFullYear() - dob.getFullYear();
      const monthDifference = today.getMonth() - dob.getMonth();
  
     
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < dob.getDate())
      ) {
        age--;
      }
  
      // Display the result
      $("#result").text(`Your age is ${age} years.`);
    });
  });