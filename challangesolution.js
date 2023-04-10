// //question 1
// function multiply(a, b) {
//     return a * b;
// }

// //question 2
// function evenOrOdd(num) {
//     if (num % 2 === 0) {
//         return "even";
//     }
//     // if the nummber is odd
//     else {
//         return "Odd";
//     }
// }

// console.log(evenOrOdd(103));

// //question 3
// function positiveSum(arr){
//     let sum = 0;
//     for (i =0; i < arr.length; i++){
//         if (arr[i]>0){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// // // question 4
// function removeChar(arr) {
//     return structuredClone.substring(1, str.length -1);
// }

// // question 5 
// let num = -9
// function makeNegative(num){
//     if(num<0){
//         return num;
//     } else{
//         return -num;
//     }
       
// }
// console.log(makeNegative(num))

// //question 6 
// function repeatString(n, s) {
//   let repeatedString = '';
//   for (let i = 0; i < n; i++) {
//     repeatedString += s;
//   }
//   return repeatedString;
// }

//question 7


// // try catch error
// //write a funtion that adds two numbers
// function addTwoNums(a,b){
//     try{

//     } catch (error) {}
// }

//referenceError, when you are calling a variable that has not been decleared 

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(positiveSum([1,-4,7,12]));