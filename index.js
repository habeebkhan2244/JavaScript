// let value = 1;
// console.log(value > 0 ? value : -value);


// value = -5;
// let res = value > 0 ? value : -value;
// console.log(res); //5

// var age , voteable ;
// age = "age";
// voteable = (age < 18)? "Too young" : "Old enough";
// console.log(voteable + "to vote");


/**
 * Example 1 
 * 
 * "if" statement 
 * 
 */

// let i = 10 ;
// if (i > 0){
//   console.log(i);
// }

// if (i){
//   console.log(i);
// }

// if (i<0){
//   console.log(i);
// }

// }else {
//   console.log("i is less than 10")
// }

/**
 * Example 2
 * 
 * "id else" statement
 */

// const myArray = [4, true, "abc", null,  10];

// if (myArray.length > 5 ){
//   console.log("Array is large");
// }else{
//   console.log("Array is small");
// }

 /**
 * EXAMPLE 3
 * 
 * Chaining "if" and "if else" statements 
 */
// let color = "green";

// if (color === "green"){
//   console.log("It is green color");
// } else if (color === "yellow") {
//   console.log("It is yellow color");
// } else if (color === "red") {
//   console.log("It is red color");
// } else  {
//   console.log("color is unknown");
// }

/**
 * " switch" statement 
 */
// let color = "green  ";

// if (color === "green"){
//   console.log("It is green color");
// }else if (color === "yellow"){
//   console.log("It is yellow color");
// }else if (color === "red"){
//   console.log("It is color red");
// }else {
//   console.log("color is unknown")
// }

// switch (color){
//   case "green":
//     console.log("It is green color");
//     break;
//   case "yellow" :
//     console.log("It is yellow color");
//     break;
//   case "red":
//     console.log("It is red color");
//     break;
//   default:
//     console.log("The color is unknown");
// }

var person = {firstName: "john", lastName: "Doe", age: 50, eyeColor:"blue"}

var x = person;
x.age = 10;
console.log(person.firstName + " is " + person.age + " years old.")


