// retirement function
function retirementYear(){
   
      //Question 1 How old are you?
       var age = $('#Age').val();
  
    //Question 2 How old do you want to be when you retire?
    var retirementAge = $('#retirementAge').val();

    var retirement = parseFloat(retirementAge - age);
    var result = new Date().getFullYear() + retirement; //current year + retirement 
    if(retirementAge=="" || age==""){
      retirement = 0;
      age = 0;
      retirementAge = 0;
    }
 
      //Show the results
      $('#finalScoreText').text("Your are "+ age + " years old. ");
      $('#retire').text("You want to be " + retirementAge + " years old when you retire.");
      $('#result').text("In " + result + " you can retire.");
  }


      // Display 
        $(document).ready(function(){ 
            $(".btn2").click(function(){
                  $(".test").show();
            });
        });
      
  