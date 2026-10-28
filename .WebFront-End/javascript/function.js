// Exercise 1 

function sayWelcome(name) {
    return `welcome, ${name} to class room!`;
}

console.log(sayWelcome("សុខា"));

// Exercise 2 

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(15, 25)); 

// Exercise 3 

function minutesToSeconds(minutes) {
    return minutes * 60;
}

console.log(minutesToSeconds(5));

// Exercise 4 

function getRectangleArea(width, height) {
    return width * height;
}

console.log(getRectangleArea(6, 8));

// Exercise 5 

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(10));
console.log(isEven(7)); 

// Exercise 6 

console.log(getCourseInfo());
function getCourseInfo() {
    return "Information couse for JavaScript";
}

// Exercise 7 

function calculateAverage(scores) {
    if (scores.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}
console.log(calculateAverage([80, 90, 70, 100]));

// Exercise 8 

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2026));

// Exercise 9 

function findMaxNumber(numbers) {
    if (numbers.length === 0) return null;
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(findMaxNumber([12, 45, 9, 87, 33]));

// Exercise 10 

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

// Exercise 11 

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));

// Exercise 12 

function calculateNetPay(hoursWorked, hourlyRate, taxRate) {
    let grossPay = 0;
    
    if (hoursWorked > 40) {
        let regularHours = 40;
        let overtimeHours = hoursWorked - 40;
        grossPay = (regularHours * hourlyRate) + (overtimeHours * hourlyRate * 1.5);
    } else {
        grossPay = hoursWorked * hourlyRate;
    }
    
    let netPay = grossPay - (grossPay * taxRate);
    return netPay;
}
console.log(calculateNetPay(45, 10, 0.1));

// Exercise 13 

function checkPalindrome(word) {
    let lowerWord = word.toLowerCase();
    let reversedWord = lowerWord.split('').reverse().join('');
    return lowerWord === reversedWord;
}
console.log(checkPalindrome("Madam"));
console.log(checkPalindrome("Frontend"));

// Exercise 14 

function computeProgressiveTax(salary) {
    let tax = 0;
    if (salary > 1000) {
        tax += (salary - 1000) * 0.10;
        tax += (1000 - 300) * 0.05;
    } else if (salary > 300) {
        tax += (salary - 300) * 0.05;
    }
    return tax;
}
console.log(computeProgressiveTax(1200));

// Exercise 15 

function computeProgressiveTax(salary) {
    let tax = 0;
    if (salary > 1000) {
        tax += (salary - 1000) * 0.10;
        tax += (1000 - 300) * 0.05;
    } else if (salary > 300) {
        tax += (salary - 300) * 0.05;
    }
    return tax;
}
console.log(computeProgressiveTax(1200));