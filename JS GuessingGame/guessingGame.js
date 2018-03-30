//create secretNumber
var num = 24;

//as user for guess
var userInput = prompt("what number do you guess?");

//check guess

if(num == userInput){
    console.log("you guessed correctly");
    alert("you guessed correctly");
}

else if(num > userInput){
    console.log("your guess is too low");
    alert("your guess is too low");
}

else{
    alert("your guess is too high");
}