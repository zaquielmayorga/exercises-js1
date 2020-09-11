// Create a function which:

// Takes an array of birthYears
// Uses console.log to print the message These are the birth years of people who can drive: <filtered birth years>
// Returns an array of people who can drive (remember, you can drive if you are 17 years or older)

let birthYears = [ 1996 , 2020, 1897, 1997, 1992, 2020 , 2003]

let maneja = birthYears.filter((able) => 2020 - able  >= 17)

console.log("These are the birth years of people who can drive:" + maneja  )

