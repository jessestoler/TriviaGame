$(document).ready(function() {

var countdown = 15;
var counter = 0;
var end;
var expire;
var fin;
var questionSet = [$("#questionOne"), $("#questionTwo"), $("#questionThree"), $("#questionFour"), $("#questionFive"), $("#questionSix"), $("#questionSeven"), $("#questionEight"), $("#questionNine"), $("#questionTen"), $("#you")];
var rightCounter = 0;
var timesUp;
var wrongCounter = 0;

$(".right").on("click", correct);
$("#start").on("click", clock);
$("#start").on("click", go); 
$(".wrong").on("click", incorrect);
    
function clock() {
        
        setInterval(function(){ countdown--; }, 1000);
        
        
        setInterval(function(){ $("#timer").html(countdown); }, 1000);
        
         
    }

    function correct() {
        $("#timer").remove();
        setTimeout(function() { questionSet.shift(); }, 4975);
        setTimeout(function() { (questionSet[0]).remove(); }, 4950);
       
        setTimeout(function() { questionSet[0].css("visibility", "visible"); }, 5000);
        
        setTimeout(function() { countdown = 16; }, 5000);
        clearTimeout(fin);
        clearTimeout(timesUp);
        clearTimeout(expire);
        $(".right").css("font-weight", "bold");
        $(".result").html("You're Right!");
        setTimeout(function() { $(".result").html(""); }, 5000);
        setTimeout(function() { $(".right").css("font-weight", "normal"); }, 5000);
        fin = setTimeout(function() { $(".result").html("Time's Up!"); }, 20000);
        rightCounter++;
        $("#wins").html(rightCounter);
        counter++;
        clearTimeout(end);
        timesUp = setTimeout(function() { $(".result").html("Time's Up!"); }, 20000);
        expire =  setTimeout(function() { incorrect(); }, 20000);

        if (rightCounter < wrongCounter) {
            $("#you").html("You Lose");
        }
        else if (rightCounter == wrongCounter) {
            $("#you").html("You Tied"); 
        }
        else {
            $("#you").html("You Win!");
        }
        
    } 

   

    function go() {
        
        $("#scoreboard").css("visibility", "visible");
        questionSet[0].css("visibility", "visible");
        $("#start").remove();
        timesUp = setTimeout(function() { $(".result").html("Time's Up!"); }, 15000);
        end = setTimeout(function() { incorrect(); }, 15000);
        
        }

    

    function incorrect() {
        $("#timer").remove();
        setTimeout(function() { questionSet.shift(); }, 4975);
        setTimeout(function() { (questionSet[0]).remove(); }, 4950);
       
        setTimeout(function() { questionSet[0].css("visibility", "visible"); }, 5000);
        
        setTimeout(function() { countdown = 16; }, 5000);
        clearTimeout(timesUp);
        clearTimeout(fin);
        clearTimeout(expire);

        $(".right").css("font-weight", "bold");
        $(".result").html("You're Wrong");
        setTimeout(function() { $(".result").html(""); }, 5000);
        setTimeout(function() { $(".right").css("font-weight", "normal"); }, 5000);
        fin = setTimeout(function() { $(".result").html("Time's Up!"); }, 20000);
        wrongCounter++;
        $("#losses").html(wrongCounter);
        counter++;
        clearTimeout(end);
        timesUp = setTimeout(function() { $(".result").html("Time's Up!"); }, 20000);
        expire =  setTimeout(function() { incorrect(); }, 20000);
        
        if (rightCounter < wrongCounter) {
            $("#you").html("You Lose");
        }
        else if (rightCounter == wrongCounter) {
            $("#you").html("You Tied"); 
        }
        else {
            $("#you").html("You Win!");
        }
        
    }
});

    