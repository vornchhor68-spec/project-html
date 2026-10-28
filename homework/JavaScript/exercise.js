// Exercise 1️

const hasPain = false;
const hasStudentcard = true;
const canAttenClass = hasPain && hasStudentcard ? "Attendent" : "Not attendent";
console.log(canAttenClass);

// Exercise 2

const hasWaletBalance = false;
const hasBankAccount = true;
const canPay = hasWaletBalance || hasBankAccount ? "Can Pay" : "Can't Pay";
console.log(canPay);

// Exersice 3

let score = 45;
if(score > 50){
    console.log("Passed!");
}
else{
    console.log("Fail!!");
}

// Exersice 4️

let isOnline = true;
let status = isOnline ? "online" : "offline";
console.log(status);

// Exersice 5

const trafficLight = "red";
switch (trafficLight){
    case "red": 
    console.log("Stop");
    break;
    case "yellow": 
    console.log("Get ready!");
    break;
    case "green": 
    console.log("Go!");
    break;
    default: 
    console.log("Light is broked");
}

// Exersice 6 

const isPasswordCorrect = true;
const isAccountLocked = false;
const requires2FA = true;
const isOtpValid = true;
const canLogin = isPasswordCorrect && !isAccountLocked || requires2FA && isOtpValid ? "Can Login" : "Can't Login!";
console.log(canLogin);

// Exercise 7 

let age = 60;
let tickPrice;

if(age < 12){
    tickPrice = 5;
    console.log(`$${tickPrice}`);
}
else if(age >= 60){
    tickPrice = 6;
    console.log(`$${tickPrice}`);
}
else if(12 < age <= 60){
    tickPrice = 10;
    console.log(`$${tickPrice}`);
}
else{
    console.log("None!");
}

// Exercise 8 

const planType = "pro";
const planSpeed = planType === "basic" ? "10 Mbps" : 
                  planType === "standard" ? "30 Mbps" : 
                  planType === "pro" ? "100 Mbps" : "Unknown";
console.log(planSpeed);

// Exercise 9 

const currentDay = "Saturday";
switch (currentDay){
    case "Monday": 
    case "Tuesday": 
    case "Wednesday": 
    case "Thursday": 
    case "Friday": 
    console.log("Work day!");
    break;

    case "Saturday": 
    case "Sunday": 
    console.log("Day off!!");
    break;
}

// Exercise 10 

const years = 2024;
const isLeapYears = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeapYears);

// Exercise 11 

let a = 15, b = 42, c = 27;
let maxNumber;

if (a < c < b){
    maxNumber = b;
    console.log(maxNumber);
}
else {
    console.log("None!");
}

// Exercise 12 

const result1 = "Apple" || "Banana";
const result2 = "" || "Default Name";
const result3 = "User" && 0 && "Admin";
const result4 = null ?? "Fallback";
console.log(result1, result2, result3, result4);

// Result: Apple Default Name 0 Fallback;

// result1 = Apple;​ (||) នឹងស្វែងរកតម្លៃដែលមានភាពជា Truthy (តម្លៃពិត) ពីឆ្វេងទៅស្តាំ.
// result 2 = Default Name; ("") ចាត់ទុជាតម្លៃមិនពិតដូច្នេះវាមិនចាប់យកមកទេ.
// result 3 = 0; (&&) នឹងស្វែងរកតម្លៃដែលមានភាពជា Falsy យកមកបង្ហាញដោយសារ​ "User" and "Admin" ជា Truthy​ ទើបវាមិនយកមក.
// result 4 = Fallback; (??) ពិនិត្យរកតម្លៃដែលជា null ឬ ុundefined។ ដោយសារតម្លៃខាងឆ្វេងគឺ null វានឹងប្តូរតម្លៃទៅយកតម្លៃស្តាំគឺ "Fallback" វិញ។

// Exercise 13 


if (!(isWeekend || isHoliday)) { goToWork(); }

// កូដ Refactor ឡើងវិញ
if (!isWeekend && !isHoliday) {
  goToWork();
}

// Exercise 14

let salary = 1200;
let taxAmount = 0;

if (salary > 1000) {
  taxAmount = (salary - 1000) * 0.10;
  salary = 1000;
}

if (salary > 300) {
  taxAmount = (salary - 300) * 0.05;
}

console.log(`$${taxAmount}`);

// Exercise 15

let day = 31, month = 4, year = 2026;
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

let maxDays = 31;
if (month === 4 || month === 6 || month === 9 || month === 11) {
  maxDays = 30;
} else if (month === 2) {
  maxDays = isLeapYear ? 29 : 28; 
}

if (month >= 1 && month <= 12 && day >= 1 && day <= maxDays) {
  console.log("True Date");
} else {
  console.log("False Date!");
}
