// functions

// function declaration
// function add1 (num1: number, num2: number): number {
//     return num1 + num2
// }
// add1(1, 2)

// // function expression
// let printName = function (name: string):string{
//     return "name is : " + name;
// }
// console.log(printName("sayed"));

// arrow function
// spread operation
// let greeting = (...names: string[]): void => {
//     console.log(names)
//     console.log("greeting: " + names.join(' and '))
// }
// greeting("sayed", "moneer", "waleed", "hassan");

//////////////////////////////////////////////////////////////////////////
// union types

//Question:
// Create a TypeScript function that can accept either a number or a string as an argument
// and ensures the argument type is preserved during execution. The function should output the value passed to it.
// Demonstrate the function by calling it with the value 2.

// function func(x: number | string): number | string {
//     return x;
// }
//
// func(true);

// let func = (any: number | string) => {
//     console.log(any)
// }
// func(2)
// let x: string | number;

//////////////////////////////////////////////////////////////////////////
// optional parameters

// let func = (firstName: string, lasName?: string) => {
//     if(lasName){
//         console.log(firstName, lasName);
//     }else{
//         console.log(firstName);
//     }
// }
// func("sayed", "hassan")

//////////////////////////////////////////////////////////////////////////
// default parameters

// let func = (firstName: string, lasName: string = "sayed") => {
//     if(lasName){
//         console.log(firstName, lasName);
//     }else{
//         console.log(firstName);
//     }
// }
// func("sayed", "hassan")
//
//



