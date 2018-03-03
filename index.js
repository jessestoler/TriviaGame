$(document).ready(function() {

var questionSet = [$("#questionOne"), $("#questionTwo"), $("#questionThree"), $("#questionFour"), $("#questionFive"), $("#questionSix"), $("#questionSeven"), $("#questionEight"), $("#questionNine"), $("#questionTen"), $("#you")];

var rightCounter = 0;
var wrongCounter = 0;
var counter = 0;





    $(".guess").on("click", reveal); 
    $("#start").on("click", go); 
    $(".right").on("click", correct);
    $(".wrong").on("click", incorrect);
    $(".wrong").on("click", badGuess);
    $(".right").on("click", goodGuess);
    $(".guess").on("click", ultimate);
    $(".guess").on("click", videotape);

    function videotape() {
        if (counter == 10) {
            setTimeout(function() { $("#you").css("visibility", "visible"); }, 5000);

        }
    }
    
    function ultimate() {
        if (rightCounter > wrongCounter) {
            $("#you").html("You Win");
        }
        else {
            $("#you").html("You Lose");
        }
    }
    
    function badGuess() {
        wrongCounter++;
        $("#losses").html(wrongCounter);
        counter++;
        
        
    }

    function goodGuess() {
        rightCounter++;
        $("#wins").html(rightCounter);
        counter++;
    }


    function reveal() {
        $(".right").css("font-weight", "bold");
       
        setTimeout(function() { questionSet.shift(); }, 4975);
        setTimeout(function() { (questionSet[0]).remove(); }, 4950);
        setTimeout(function() { $(".right").css("font-weight", "normal"); }, 5000);
        setTimeout(function() { questionSet[0].css("visibility", "visible"); }, 5000);
        setTimeout(function() { $(".result").html(""); }, 4950);

    }

        
    function go() {
        
        $("#scoreboard").css("visibility", "visible");
        questionSet[0].css("visibility", "visible");
        $("#start").remove();
        }

    function correct() {
        $(".result").html("You're Right!");
        
        
    
        
        
    } 

    function incorrect() {
        $(".result").html("You're Wrong");
        
        
        
        
        
    }

   
    
    
       });