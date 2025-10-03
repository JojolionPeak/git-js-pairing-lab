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

/* write a func 'multiply' that takes 2 nums and returns the product
2 params */


//Question 5
const multiply = (num1, num2) => {
    //multiply the two numbers
    let product = num1 * num2;
    return product;
}
//console.log(multiply(4,5))

//Question 6
const add = (a, b) => {
    if (a === b) {
        return (a + b) * 3
    } else {
        return (a + b)
    }
}
//console.log(add(4, 4))

// Question 7
/* make an isNegative func that returns true if a number is negative and false if a number is positive*/
const isNegative = (n) => {
    if (n < 0) {
        return true;
        //n is negative
    } else if (n > 0) {
        return false;
        //n is positive
    } else if (n === 0) {
        return "This number is neither negative or positive!";
        //in the case of a 0
    };
};
//console.log(isNegative(0));

// Problem 8

const triangleArea = (b, h) => {
    const area = (b * h) / 2
    return area

}

console.log(triangleArea(5, 7))