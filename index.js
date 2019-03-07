
//Creating Objects

let person = {
    name: 'Jasper',
    age: 20
};

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection = 'name';
person[selection] = 'Grace';
console.log(person.name);
/********************************************************************/

//Array
let carBrand = ['Honda', 'Toyota', 'Hyundai'];

let arrayNumber = [1, 4, 3];

function brand(carOne, carTwo) {
    console.log('your car is ' + carOne + ' And ' + carTwo);
}

brand(carBrand[1], carBrand[0]);

/********************************************************************/
// Calculates a Value

function sum(number) {
    return number + number;
}

console.log(sum(arrayNumber[2]));

