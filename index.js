

// }

// console.log(typeof(3));

// const makeWithdraw = balance => (function(copyBalance) {
//     let balance = copyBalance; // This variable is private
//     let doBadThings = function() {
//       console.log(balance);
//     };
//     doBadThings();
   
//     return {
//       withdraw: function(amount) { 
        
//         if (balance >= amount) {
//           balance -= amount;
//           return balance;
//         } else {
//           return "Insufficient money";
//         }
//       },
//     }
//   })(balance);
  
//   const firstAccount = makeWithdraw(500); // "I will do bad things with your money"
//   console.log(firstAccount.balance); // undefined
//   console.log(firstAccount.withdraw(200)); // 80
//   console.log(firstAccount.withdraw(300)); // 50
//   console.log(firstAccount.doBadThings); // undefined, this method is private
//   const secondAccount = makeWithdraw(20);
//   secondAccount.withdraw(30); // "Insufficient money"
//   secondAccount.withdraw(20);  // 0

// const thirdAccount = makeWithdraw(1000);
// console.log(thirdAccount.withdraw(500));
// console.log(thirdAccount.withdraw(200));
// console.log(thirdAccount.withdraw(100));
// console.log(thirdAccount.withdraw(100));

//CHALLENGE
// Create a function "WaitingFn" with single parameter "timeInMs" and inside of the function create "while" loop and this loop should be running during "timeInMs".
// HINT : Date.now() - current time in ms since 1970


// function waitingFn(timeInMs) {
//     const futureTime = Date.now() + timeInMs;
//     while (futureTime > Date.now()) {
//         // waiting...
//     }
// }
// setTimeout(() =>  console.log("call back is executed"), 2000);


// waitingFn(3000);

// console.log("Last statement in global execution context");





// function longString(str) {
//     const MAX_LENGTH = 15;


//     if (str.length > MAX_LENGTH) {
//         let newString;
//         newString = str.substring(0, MAX_LENGTH) + "...";
//         console.log(newString);
//     } else {
//         console.log(str);
//     }
// }

// longString("This is a long string");
// longString("short string");

// Where to use VAR?
//Example 1

// comment