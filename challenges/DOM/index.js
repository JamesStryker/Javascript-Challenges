'use strict';

//objects

//again btn
let reset = document.querySelector(".again");
//check btn
let check = document.querySelector(".check");

//create a random number btwn 1-20
let answer = Math.floor(Math.random()*20)+1;
//question mark/number display
let mysteryNumber = document.querySelector(".number");
//player guess
let guess = document.getElementById("guess");
//default setting

let score = 20;
let highscore = 0;

check.addEventListener('click', function(){
    
        if(!guess){
            document.querySelector(".message").textContent = "No Number!";
        }
        else{
            if(answer==guess.value){
                mysteryNumber.textContent = answer;
                document.body.style.backgroundColor = "#60b347";
                document.querySelector(".message").textContent = "Correct Answer!";
                reset.style.backgroundColor = "red";

                if(score > highscore){
                    highscore = score;
                    document.querySelector(".highscore").textContent = highscore;
                }
            }else if(answer>guess.value){
                document.querySelector(".message").textContent = "Too Low";
                score--;
                document.querySelector(".score").textContent = score;
            }else if(answer<guess.value){
                document.querySelector(".message").textContent = "Too High";
                score--;
                document.querySelector(".score").textContent = score;
            } 
        }
        
    
})

reset.addEventListener('click', function(){
    score = 20;
    mysteryNumber.textContent = "?";
    document.querySelector(".score").textContent = score;
    answer = Math.floor(Math.random()*20)+1;
    guess.value = "";
    document.body.style.backgroundColor = "#222";
    document.querySelector(".message").textContent = "Start guessing...";
    reset.style.backgroundColor = "#eee";
})