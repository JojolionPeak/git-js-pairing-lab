//Code your solutions in this file
//code for problem 1

const fiveToOneHundred = () => {
    //for loop to print 5-100
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    };
};
//fiveToOneHundred()


// code for problem 2
// Write a function `multiplesOfThree` that console logs all positive numbers to 100 that is a multiple of 3.
const multiplesOfThree = () => {
    for (let i = 3; i <= 100; i += 3) {
        // debugger
        console.log(i)
    };
};
// multiplesOfThree()


//multiples of three or five up until 100
const multiplesOfThreeOrFive = () => {
    // for loop that decides if a # is a multiple of 3 or 5
    for (let i = 0; i <= 100; i++) {
        // create an if else ... statement
        if (i % 5 === 0) {
            // multiples of 5
            console.log(i)
        } else if (i % 3 === 0) {
            // mulitples of 3
            console.log(i)
        };
    };
};
//  multiplesOfThreeOrFive()


// Problem 4 

const untilNum = (n) => {
    for (i = 1; i <= n; i++) {
        console.log(i)
    }
}
//untilNum(65)