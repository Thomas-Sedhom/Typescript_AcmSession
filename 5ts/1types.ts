
// let name1: string = "sayed";
// console.log(name1, typeof name1)
//
// let age: number = 30;
// console.log(age, typeof age)
//
// let children: string[] = ["sayed", "khaled"];
// console.log(children, typeof children)
//
// let bol: boolean = true;
// console.log(bol, typeof bol)
//
// let anything: any = "sayed";
// anything = 25.6;
// console.log(anything, typeof anything)
//


// type assertion
// is a way to explicitly tell the TypeScript compiler about the type of a value
// let anything:any;
// const min = Math.floor(anything as number)
// const min = Math.floor(<Number>anything)
// console.log(min)

//-------------------------------------------------------------------------------------------------------
// enums
// enum Role{
//     instructor = 'instructor',
//     admin = 'admin',
//     superAdmin = 'superAdmin',
//     student = 'student',
// }
//
//
//
// function main(current: Role){
//     if(current == Role.admin){
//         adminDashboard();
//     }else if(current == Role.student){
//         studentDashboard();
//     }
// }
//
// function adminDashboard(){
//     console.log("admin dashboard");
// }
//
// function studentDashboard(){
//     console.log("student dashboard");
// }
//
// main(Role.admin)