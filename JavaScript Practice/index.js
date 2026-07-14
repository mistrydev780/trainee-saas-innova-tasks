import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// let name = prompt("Enter Your Name: ");
// console.log(name);



// let age = 20;

// console.log(age <=18 ? "you can not vote" : "You can vote");



// let age = 15;

// if(age<=18){
//     console.log("You can not vote");
// }
// else{
//     console.log("You can vote");  
// }



// const time = new Date();
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting);



// const day = Number(prompt("Enter 1 to 7 number weeks"))

// switch (day){
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday")
//         break;

//     case 3:
//         console.log("wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("sturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break
//         default:
//             console.log("No day Maching");

// }



// for (let i = 1; i <= 10; i++) {

//     console.log(i);

// }



// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++
// }



// let i = 1;
// do{
//     console.log("Hello World");
//     i++  
// }while(i<=10)



// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         break;
//     }
//             console.log(i);
// }



// for(let i = 1;i<=10;i++){
//     if(i == 6){
//         continue;
//     }
//     console.log(i);
    
// }



// let name = prompt("Enter your Name  : ")
// console.log(name);
// let a = "Hello";
// let b = "Dev";
// let c= a.concat(b)
// console.log(a.concat(b));
// console.log(a.split(b));
// console.log(a.lastIndexOf(''))



// function div(a,b,c){
//     console.log((a,b,c)/3);
// }

// div(10,20,30)



// function sayHello (name){
//     console.log("Hello"  +" "+  name);
// }

// sayHello("Dev")


// function add(a,b){
//     return a +b;
// }
// add(10,10)


// let x = sumAll(8, 123, 500, 115, 44, 88);

// function sumAll() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   console.log(sum);
// }



// function add(a,b){
//     let sum=a+b;
//     console.log(sum);
// }

// add(10,20)



// const add = function(a,b){
// let sum = a + b;
// console.log(sum);
// }

// add(10,10)


// const person = {
//   name: "Dev Mistry",
//   age: 30,
//   city: "Bardoli"
// };

// console.log(person.name);



const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const names = users.map(user => user);

console.log(names); 

