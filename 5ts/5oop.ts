/*
Access Modifier Comparison:

| Modifier     | Accessible in the Class | Accessible in Derived Classes | Accessible Outside the Class | Shared Across Instances |
|--------------|--------------------------|-------------------------------|------------------------------|--------------------------
| **public**   | ✅                       | ✅                            | ✅                           | ❌                       |
| **protected**| ✅                       | ✅                            | ❌                           | ❌                       |
| **private**  | ✅                       | ❌                            | ❌                           | ❌                       |
| **static**   | ✅                       | ✅                            | ✅                           | ✅                       |

Explanation:
- `public`: Accessible everywhere. This is the default if no modifier is specified.
- `protected`: Accessible inside the class and its subclasses, but not outside the class.
- `private`: Accessible only within the class itself.
- `static`: Belongs to the class itself, shared across all instances, and accessed via the class name.
*/

/**
 * Create a TypeScript program using object-oriented programming (OOP) principles with the following requirements:
 *
 * 1. Define a base class `Animal`:
 *    - Includes two private properties: `name` (string) and `speed` (number).
 *    - A constructor that initializes `name` and `speed`.
 *    - Two public methods:
 *      - `getName()`: Returns the name of the animal.
 *      - `getSpeed()`: Returns the speed of the animal.
 *
 * 2. Create a derived class `Dog` that extends `Animal`:
 *    - The constructor takes `name` and `speed` and passes them to the `Animal` class using `super`.
 *    - Includes a `describe()` method that logs the name and speed of the dog in the format:
 *      "Dog name is: [name], speed is: [speed]".
 *
 * 3. Instantiate a `Dog` object with a name and speed of your choice.
 *    - Call the `describe()` method to print the dog's details.
 *
 * Expected Output:
 * For example, if the dog's name is `"sayed"` and its speed is `5000`, the output should be:
 * "Dog name is: sayed, speed is: 5000".
 */

/**
 * class Animal{
 *     private name: string;
 *     private speed: number;
 *     constructor(name:string, speed:number){
 *         this.name = name;
 *         this.speed = speed;
 *     }
 *      public getName(): string {
 *         return this.name;
 *     }
 *
 *     public getSpeed(): number {
 *         return this.speed;
 *     }
 * }
 * class Dog extends Animal{
 *     constructor(name:string, speed:number) {
 *         super(name, speed);
 *     }
 *     public describe(): void{
 *         console.log("Dog name is: " + this.getName() + ", speed is: " + this.getSpeed());
 *     }
 * }
 *
 * const dog1 = new Dog("sayed", 5000)
 *
 * dog1.describe()
 */

// abstract class Shape {
//      constructor(public color: string) {}
//
//     abstract area(): number;
//
//     // Non-abstract method
//     public describe(): string {
//         return `A ${this.color} shape.`;
//     }
// }
//
// class Circle extends Shape {
//     constructor(color: string, private radius: number) {
//         super(color);
//     }
//
//     public area(): number {
//         return Math.PI * this.radius * this.radius;
//     }
// }
//
// const myCircle = new Circle("red", 5);
// console.log(myCircle.describe()); // Output: A red shape.
// console.log(myCircle.area());     // Output: 78.53981633974483
//


