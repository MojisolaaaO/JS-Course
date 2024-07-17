// sum of numbers within an array
function sumArray(arr) {
    const sum = arr.reduce((sum, num) => sum + num, 0);
    console.log("Sum of array:", sum);
    return sum;
}
sumArray([1, 2, 3, 4, 5])

// converts length in meter to centimeter at the rate of 1 meter to 100 centimeter
function lengthConverter(meter) {
    const centimeter = meter * 100
    return centimeter;
}
console.log(lengthConverter(50))

// prints even numbers from 0 - 100
for (let digit = 1; digit <= 100; digit = digit + 1) {
    if (digit % 2 == 0) {
        console.log(digit)
    }
}


// prints  a table containing multiplication tables
function multiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        let row = '';
        for (let j = 1; j <= 10; j++) {
            row += `${i * j}\t`;
        }
        console.log(row);
    }
}
multiplicationTable();

// a function that reverses an array
function reverseArray(arr) {
    const reversed = arr.reverse();
    console.log("Reversed array:", reversed);
    return reversed;
}
reverseArray([1, 2, 3, 4, 5])

// an array of strings in alphabetical order
function sortStringsAlphabetically(arr) {
    const sorted = arr.sort();
    console.log("Sorted strings:", sorted);
    return sorted;
}
sortStringsAlphabetically(['banana', 'apple', 'cherry'])


// an array of numbers in descending order
function sortNumbersDescending(arr) {
    const sorted = arr.sort((a, b) => b - a);
    console.log("Sorted numbers (descending):", sorted);
    return sorted;
}
sortNumbersDescending([3, 1, 4, 1, 5, 9])

// returns a Boolean if a number is divisible by 10
function isDivisibleBy10(num) {
    const result = num % 10 === 0;
    console.log(`${num} is divisible by 10:`, result);
    return result;
}
isDivisibleBy10(20)

// returns the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    const count = str.split('').filter(char => vowels.includes(char)).length;
    console.log(`Number of vowels in "${str}":`, count);
    return count;
}
countVowels("Hello World")

// a function that filters out negative numbers
function filterNegativeNumbers(arr) {
    const filtered = arr.filter(num => num >= 0);
    console.log("Filtered array (no negative numbers):", filtered);
    return filtered;
}
filterNegativeNumbers([-1, 2, -3, 4, -5])