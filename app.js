//declaring a variable named "day" and setting its value to "Monday"

const day = 'Monday'

//declaring a variable named "position" and setting its value to "1st"

const position = '1st'

//declaring a variable named "output" and setting its value by concatenating strings and variables

const output = 'Today is ' + day + '.' + ' It is the ' + position + ' day of the week' + '. '

//logs the value of output to the console
console.log(output)

//initializing a variable "number" and setting its value 
const number = 24

//checks if the number is divisible by 2 
if (number % 2 === 0) {

    //if the number is divisible by 2, log "Number is even" to the console
    console.log('Number is even')

    //if the number is not divisible by 2, log "Number is odd" to the console 

} else {
    console.log('Number is odd')
}

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