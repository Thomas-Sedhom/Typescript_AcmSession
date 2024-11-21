// detect errors in compile time
// const person = {name: sayed, age:25};
// let person = {name: sayed, age: 25};
// console.log(person.name);

// redeclare
// let printName = (name) => {
//     console.log("user name is" + name);
// }
// printName(25);
//
// let printName = (name, age) => {
//     console.log("user name is " + name + ", age is " + age);
// }
// printName("thomas");

//----------------------------------------------------------------------------------------
// poor data types
// let printName = (name: String) => {
//     console.log("user name is" + name);
// }
// printName("x");
// let printName = (name: string, age: number) => {
//     console.log("user name is" + name);
// }
// printName("x");
// const username = "thomas";
// console.log(usernme);