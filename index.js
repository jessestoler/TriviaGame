$(document).ready(function() {
var counter = 15;
var counterTwo = 5;






    $("#start").on("click", go); 
    $(".right").on("click", reveal);
    $(".wrong").on("click", incorrect);
    
    $(".right").on("click", revealCounterTwo);
    $(".wrong").on("click", revealCounterTwo);
    
    function revealCounter() {
        counterTwo--;
    }
   
    function change() {
        $(this).attr("id", "mainQuestion")
    }

    function revealCounterTwo() {
      setInterval(function() { $("#questionTwo").css("visibility", "visible"); }, 5000);
      setInterval(function() { $("#questionOne").remove(); }, 5000);
      setInterval(function() { $(".result").html(""); }, 5000);
      setInterval(function() { $(".right").css("font-weight", "normal"); }, 5000);
        
        
        
    }

    function countdown() {
        counter--;
        
    }
        
    function go() {
        
        setInterval(function() { $(".result").html("Time's Up"); }, 15000);
        setInterval(function() { $(".right").css("font-weight", "bold"); }, 15000);
        $("#questionOne").css("visibility", "visible");
        
        
        
        
     }

    function reveal() {
        $(".right").css("font-weight", "bold");
        $(".result").html("Correct");
        
        
    } 

    function incorrect() {
        $(".right").css("font-weight", "bold");
        $(".result").html("Incorrect");
        
        
    }   

    
       
    

    
        

   

    
    

});