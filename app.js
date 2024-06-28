//declaring a variable named "day" and setting its value to "Monday"

const day = 'Monday'

//declaring a variable named "position" and setting its value to "1st"

const position = '1st'

//declaring a variable named "output" and setting its value by concatenating strings and variables

const output = 'Today is ' + day + '.' + ' It is the ' + position + ' day of the week' + '. '

//logs the value of output to the console
console.log(output)

//checking for even and odd numbers
const number = 24
if (number % 2 === 0) {
    console.log('Number is even')

} else {
    console.log('Number is odd')
}

//logs the type of triangle based on the conditions
const side1 = 18
const side2 = 18
const side3 = 20
if (side1 === side2 && side2 === side3) {
    console.log('Equilateral triangle')

} else if (side1 === side2 || side2 === side3) {
    console.log('Isosceles triangle')
} else {
    console.log('Scalene triangle')
}

//logs the day of the week based on the condition
const dayOfTheWeek = 'Wednesday'
switch (dayOfTheWeek) {
    case 'Monday':
        console.log('Sigh! The week just started')
        break;

    case 'Friday':
        console.log('TGIF!')
        break;

    default:
        console.log('Yay! We are halfway through the week')


}

//while loops 
let star = 1
while (star <= 10) {
    if (star === 1) {
        console.log(star + ' star')
    } else {
        console.log(star + ' stars')
    }
    star = star + 1
}

//for loops
for (let star = 1; star <= 10; star = star + 1) {
    if (star === 1 || star === 0) {
        console.log(star + ' star')
    } else {
        console.log(star + ' stars')
    }
}

//specifies if numbers from 1 to 10 are even or odd numbers 
for (let digit = 1; digit <= 10; digit = digit + 1) {
    if (digit % 2 === 0) {
        console.log(digit + ' is an even number')
    } else {
        console.log(digit + ' is an odd number')
    }
}

//prints out all odd numbers between 1 and 20
for (let digit = 1; digit <= 20; digit = digit + 1) {
    if (digit % 2 !== 0) {
        console.log(digit)
    }
}

//function to add numbers 
function addNumbers(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber
    console.log(sum)

}
addNumbers(7.5, 10)

//return 
function addNumbers(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber
    const multiply = firstNumber * secondNumber
    return [sum, multiply];
}
console.log(addNumbers(20, 20))

//converting dollar to naira at the rate of 1500 naira to 1 dollar
function converter(dollar) {
    const naira = dollar * 1500
    return naira;
}
console.log(converter(500))

//converts temperature in degrees to fahrenheit at the rate of 1 degree to 2.8 fahrenheit
function tempConverter(degrees) {
    const fahrenheit = degrees * 2.8
    return fahrenheit;
}
console.log(tempConverter(50))

//function to calculate the area of a rectangle
function areaOfRectangle(length, width) {
    const multiply = length * width
    return multiply;
}
console.log(areaOfRectangle(10, 10))

// function and scopes
function greet() {
    const myName = 'Mojisola'
    console.log('Good morning, ' + myName)

    function innerGreet() {
        console.log('Good evening, ' + myName)
    }
}

//declared function
salut('Moji');

function salut(name) {
    console.log('Good morning, ' + name)
}

//expressed function

const salutation = function(name) {
    console.log('Good morning, ' + name)
}
salutation('Diana')

//callback function
function greetings(greet) {
    greet()
}

function callback() {
    console.log('Good morning')
}

greetings(callback);