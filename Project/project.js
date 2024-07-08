// sum of numbers within an array




//coonverts length in meter to centimeter at the rate of 1 meter to 100 centimeter
function lengthConverter(meter) {
    const centimeter = meter * 100
    return centimeter;
}
console.log(lengthConverter(50))

//prints even numbers from 0 - 100
for (let digit = 1; digit <= 100; digit = digit + 1) {
    if (digit % 2 == 0) {
        console.log(digit)
    }
}