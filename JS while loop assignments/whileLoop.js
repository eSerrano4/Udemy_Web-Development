//while loop that increments by 2 prints out odd numbers
var num =1;

while(num <= 10){
    console.log(num);
    num +=2;
}

//while loop prints out numbers that are divisible by 4

var numTwo = 1;

while(numTwo <= 20){
    if(numTwo % 4 ===0){
        console.log(numTwo);
    }
    numTwo++;
}

//inifinite loop shows what not to do in a while loop
var numThree = 100;

while(numThree < 150){
    console.log(numThree + 1);
    numThree--;
}