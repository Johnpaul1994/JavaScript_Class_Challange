//question 1
function multiply(a, b) {
    return a * b;
}

// question 2
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    }
    // if the nummber is odd
    else {
        return "Odd";
    }
}

// question 3
function positiveSum(arr){
    let sum = 0;
    for (i =0; i < arr.length; i++){
        if (arr[i]>0){
            sum += arr[i];
        }
    }
    return sum;
}

// question 4
function removeChar(arr) {
    return structuredClone.substring(1, str.length -1);
}

// question 5 
let n = 0.34
function makeNegative(num){
    if(num<0){
        return num;
    } else {
        return -num;
    }
}