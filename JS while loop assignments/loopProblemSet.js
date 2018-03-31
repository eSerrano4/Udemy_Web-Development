
// Print All Numbers between -10 and 19
var numOne = -10;
while(numOne<=19){
    console.log(numOne);
    numOne++;
}

//Print all even numbers between 10 and 40
var numTwo = 10;

while (numTwo <=40){
    if(numTwo % 2 === 0){
    console.log(numTwo);
    }
    numTwo++;
}

//print all odd numbers between 300 and 333
var numThree = 300;

while(numThree <= 333){
    if(numThree %2 !== 0){
        console.log(numThree);
    }
    numThree++;
}

//print all numbers divisible by 5 and 3 between 5 and 50
var numFour = 5;

while(numFour <= 50){
    if(numFour % 5 === 0 && numFour % 3 === 0){
        console.log(numFour);
    }
    numFour++;
}
