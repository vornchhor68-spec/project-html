// let day = 28, month = 2, year = 2026;
// const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// let maxDays = 31;
// if (month === 4 || month === 6 || month === 9 || month === 11) {
//   maxDays = 30;
// } else if (month === 2) {
//   maxDays = isLeapYear ? 29 : 28; 
// }

// if (month >= 1 && month <= 12 && day >= 1 && day <= maxDays) {
//   console.log("True Date");
// } else {
//   console.log("False Date!");
// }


// for (let i = 1; i <= 10; i++){
//     console.log(`5 x ${i} = ${5 * i}`);
// }

let word = "JAVASCRIPT";
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

console.log(reversedWord);