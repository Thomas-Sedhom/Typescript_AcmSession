// detect errors in runtime
// const user = {name: "batekha", age:25};
// console.log(user.address);
// var user = {name: "thomas", age: 25};
// console.log(user.address);
// const person = {name: "sayed", age:25};
// console.log(person.address)

// let person = {name: sayed, age: 25};
// console.log(5 == '5');

//
//----------------------------------------------------------------------------------------
// differance between var and let

//0- redeclare
// let printName = (name) => {
//     console.log("user name is" + name);
// }
// printName(25);
//
// let printName = (name, age) => {
//     console.log("user name is " + name + ", age is " + age);
// }
// printName("thomas");

// let x = 5;
// var x = "sayed"
// console.log(x)

// 1- block scoped
// if(true){
//     var x = 4;
//     let y = 4;
// }
// console.log(x);
// console.log(y);

// 2- hoisting
//To understand how JavaScript hoisting works and why it behaves this way, we need to address a common misconception:
//JavaScript is not purely interpreted line-by-line. Instead, JavaScript engines like V8 first parse and compile the code
//before executing it.
//During this process, the engine creates execution contexts, where variables and functions are "hoisted" to the top of their
//scope, but only the declarations—not the initializations.
// console.log(x); // undefined
// var x = 5;
// console.log(x);

// 3- redeclare
// var x = 5;
// var x = 6;
// console.log(x);
//
// let x = 5;
// let x = 6;
// console.log(x);

// 4 - Closures in Loops
// let has block-level scope, so each loop iteration gets a new scoped variable, and closures capture the correct value.
// var has function-level scope, meaning all iterations share the same variable, and closures will all capture the final value of the variable after the loop finishes.
// for(let i = 0; i < 3; i++){
//     setTimeout(() => {console.log(i)}, 1000);
// }

/*
setTimeout(() => (console.log(2), 1000)
setTimeout(() => (console.log(2), 1000)
setTimeout(() => (console.log(2), 1000)
*/
/*
0 => let i = 0
1 => let i = 1
2 => let i = 2
setTimeout(() => (console.log(0), 1000));
setTimeout(() => (console.log(1), 1000));
setTimeout(() => (console.log(2), 1000));
*/
