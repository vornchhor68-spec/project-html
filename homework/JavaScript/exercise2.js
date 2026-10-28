// Exercise 1 

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Exercise 2 

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}
console.log('Start!');

// Exercise 3 

const techList = ["HTML", "CSS", "JavaScript", "React"];

for (const tech of techList) {
    console.log(tech);
}

// Exercise 4 

for(i = 2; i <= 20; i += 2){
    console.log(i);
}

// Exercise 5 

let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}

console.log("ផលបូកសរុប:", sum);

// Exercise 6 

let text = "FRONTEND";
let reversedText = "";

for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
}
console.log(reversedText);

// Exercise 7 

const nums = [14, 25, 42, 67, 88];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 7 === 0) {
        console.log(nums[i]);
        break;
    }
}

// Exercise 8 

for (let i = 1; i <= 10; i++) {
    if (i === 5 || i === 7) {
        continue;
    }
    console.log(i);
}

// Exercise 9 

let scores = [65, 89, 45, 92, 73, 58];
let maxScore = scores[0];
let minScore = scores[0];

for (let score of scores) {
    if (score > maxScore) {
        maxScore = score;
    }
    if (score < minScore) {
        minScore = score;
    }
}
console.log("Max Score:", maxScore);
console.log("Min Score:", minScore);

// Exercise 10 

let sentence = "Web Development";
let vowelCount = 0;

for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
    }
}
console.log("Vowel:", vowelCount);

// Exercise 11 

let n = 5;
let factorial = 1;

while (n > 0) {
    factorial *= n;
    n--;
}
console.log("Factorial:", factorial);

// Exercise 12 

for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}

// Exercise 13 

let word = "racecar";
let isPalindrome = true;

for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("is Palindrome");
} else {
    console.log("isn't Palindrome");
}

// Exercise 14 

let rawList = [1, 3, 2, 3, 4, 1, 5, 2];
let uniqueList = [];

for (let i = 0; i < rawList.length; i++) {
    let exists = false;
    for (let j = 0; j < uniqueList.length; j++) {
        if (rawList[i] === uniqueList[j]) {
            exists = true;
            break;
        }
    }
    if (!exists) {
        uniqueList.push(rawList[i]);
    }
}
console.log(uniqueList);

// Exercise 15 

let fib = [0, 1];

for (let i = 2; i < 90; i++) {
    let nextFib = fib[i - 1] + fib[i - 2];
    fib.push(nextFib);
}
console.log(fib);

function findAverage(score) {
    let sum = 0;
    for(let i = 0; i < score.length; i++) {
        sum += score[i];
    }
    return sum / score.length;
}

console.log(findAverage([10, 20, 30, 40]));