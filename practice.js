//declaring a variable named "day" and setting its value to "Monday"

const day = 'Monday'

//declaring a variable named "position" and setting its value to "1st"

const position = '1st'

//declaring a variable named "output" and setting its value by concatenating strings and variables

const output = 'Today is ' + day + '.' + ' It is the ' + position + ' day of the week' + '. '

//logs the value of output to the console
console.log(output)

const isBritish = true
const isDay = false
const userDetails = null

console.log(typeof(isBritish))

//arithmetic operations 
const addition = 40 + 2
const subtraction = 40 - 2
const multiplication = 40 * 2
const division = 40 / 2
const modulus = 40 % 3
console.log(modulus)

//comparison operators
const score1 = 80
const score2 = 100

console.log(score2 >= score1)

/*
AND --> && all must be true
OR --> || either must be true
NOT --> ! toggles boolean values 
*/

//logical operators
const userName = 'Mojisola'
const number = 24

const Logic = number === 12 || userName === 'Mojisola'
console.log(Logic)

//conditional statements 
const age = 15
if (age >= 18) {
    console.log('You are eligible to vote')
} else {
    console.log('You are too young to vote')
}