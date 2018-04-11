function printReverse(a){
    for(var i = a.length-1; i>=0; i--){
        console.log(a[i]);
    }
}

printReverse([1,2,3,4]);


//function that takes array and returns true if all elements in array are the same
function isUniform(arr){
    var item = arr[0];
    for(var i = 0; i<arr.length; i++){
        if(i !== item);{
            return false;
            
        }
    }
    return true;
}

isUniform([1,2,3,4]);

//function that accepts array and adds everything in array
function sumArray(x){
  var answer = 0;
    x.forEach(function(num){
              answer += num;
              });
        return answer;
    }

//function that prints max number from array
function maximum(num){
    var max = num[0];
    for(var i = 1; i< num.length; i++){
        if(num[i]>max){
            max = num[i];
        }
    }
    return max;
}