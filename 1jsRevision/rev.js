// log

// console.log(5)
// console.error("error")
// console.log(5)
// console.error("sayed")

///////////////////////////////////////////////////
// var - let - const

// x = 5.6;
// console.log(x);
// x = "sayed"
// console.log(x);
// var x = 5;
// console.log(x)
// let y = 5;
// y = "sayed"
// console.log(y);
// z = "sayed"
// console.log(z)

///////////////////////////////////////////////////
// functions

// function declaration
//
// function add1 (num1, num2){
//     console.log(num1+num2);
// }
// add1(1, 2)

// function expression
// let add = function (a, b) {
//     return a + b
// }
//
// console.log(add(1,2))

// arrow function
// let add = num1 => num1 ;
// let add3 = (num1, num2) => {num1 + num2};
// console.log(add3(1, 2))

// callback function
// function add(num1, num2, callback) {
//      let result = num1 + num2;
//     return callback(result);
// }
// function multi(num1) {
//     return num1 * 5;
// }
// function div(num1) {
//     return num1 / 5;
// }
// let current = false;
// if(current) {
//    console.log(add(5, 10, (num) => num * 5)))
// }else{
//     console.log(add(5, 10, div));
// }

// function add(num1, num2, callback){
//     let result = num1 + num2;
//     return callback(result);
// }
//
// function multi(num){
//     return num * 5
// }
//
// function div(num){
//     return num / 5
// }
//
// let x = false;
//
// if(x == true){
//    console.log(add(5, 10, (num) => num * 5))
// }else{
//     console.log(add(5, 10, div))
// }

// setTimeOut
// setTimeout(() => console.log(4), 2000);
// console.log(1)

// map => create a new array by applying a provided function to each element
// let arr = [9, 4, 1, 5];
// arr = arr.map((x) => x * 5)
// console.log(arr)

// filter => create a new array with all elements that pass a given condition
// let arr = [5, 2, 9];
// let x = arr.filter((x) => x <= 5)
// console.log(x)

// reduce => reduce an array to a single value by executing a callback function on each element in the array
// let arr = [5, 9, 6];
// let x = arr.reduce((acc, curr) => acc + curr, 5)
// console.log(x)

// let arr = [5, 9, 6];
//
// // let arr2
// arr.forEach((item) => item += 1);
//
// console.log(arr);

