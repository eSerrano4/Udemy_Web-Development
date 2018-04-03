//function sents 10 for x and 40 for y, subtracts 10 from 40
function test(x,y){
    return y-x;
}

test(10,40);

//function takes argument returns argument multiplied by 2 then console.log and return/2 do not run because a function ends when a return key is called.

function test2(x){
    return x*2;
    console.log(x);
    return x/2;
}

//function that checks if argument is even
function isEven(x){
    if(x % 2 ===0 ){
        return true;
    }
    else return false;
    
}

//function that performs factorial math
function factorial(y){
    var num = 1;
    
    for(var i = 1; i <= y; i++){
        
        num = num *i;
    }
    return num;
    
}

function kebabToSnake(str){
    
    var newStr = str.replace(/-/g, "_");
    return newStr;
    
}