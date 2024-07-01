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

//array 
const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const numArray = [78, 80, 85, 88, 94]
const emptyArray = []
    //console.log(daysOfTheWeek.length)

//changing the value of the second elemnt to 40 
const secondElement = daysOfTheWeek[1]
daysOfTheWeek[1] = 40
console.log(daysOfTheWeek)

//adding elements to the empty array 
emptyArray[0] = 'First Element'
emptyArray[1] = 'Second Element'
emptyArray[3] = 'Fourth Element'
console.log(emptyArray)

//array of friends
const friends = ['Diana', 'Amira', 'Ruby', 'Liz', 'Wale']
const bestFriend = friends[0]
console.log(bestFriend)

//adding elements to an empty array using the push method
const empArray = []
empArray.push('First Element', 'Second Element', 'Thid Element', 500, true)
empArray.push('Last')
console.log(empArray)

//pop method removes the last element of a array
empArray.pop()
    // for (let start = 0; start <= empArray.length; start = start + 1) {
    //     emptyArray.pop()
    // }

console.log(empArray)

//unshift method adds an element to the beginning of the array 
const unArray = ['Moji', 'Diana']
unArray.unshift('Pre-Element', 'Post-Element')
console.log(unArray)

//shift method removes the first element in an array
unArray.shift()

//slice method removes any number of elements from an array
const monthsOfTheYear = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

console.log(monthsOfTheYear.slice(3, 8)) //returns april - august
console.log(monthsOfTheYear.slice(7, 12)) //returns aug - dec


//splice method

//console.log(monthsOfTheYear.splice(3, 3)) //displays elements that have been removed
//console.log(monthsOfTheYear) // displays elements that are not removed
console.log(monthsOfTheYear, monthsOfTheYear.splice(4, 1, 'Special Month')) //removes element on index 4 "May" and replaces it with "Special Month"

//console.log(monthsOfTheYear.splice(0, 3)) //removes Jan - March
console.log(monthsOfTheYear.splice(4, 2)) // removes "Special Month"- June
console.log(monthsOfTheYear)


//IndexOf method gets the index of a particular element
const years = ['2000', '2010', '2015', '2020', '2025', '2010']
console.log(years.indexOf('2010')) // returns the index of the first of occuence of the element if the element has multiple occurences
console.log(years.lastIndexOf('2010')) //returns the index of the last occurence