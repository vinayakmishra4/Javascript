// first program in js
// use for printing using the console.log

// 1. Add 'let' or 'const' to declare the variable
// 2. Wrap "js" in quotation marks because it is a string
languageName = "js"; 

console.log("Intro.js loaded");
console.log(languageName); // This will print "js" to your console

// var is the old way of declaring variables in JavaScript. It has some quirks and is generally not recommended for use in modern JavaScript. Instead, you should use 'let' for variables that can change and 'const' for variables that should not change.

var price = 25; // This is an example of using 'var' to declare a variable

var  age = 30; // This will not throw an error, but it can lead to confusion and bugs in your code

console.log(age); // This will print 30 to your console, which may not be what you intended

const name="Vinayak"; // This is an example of using 'const' to declare a variable that should not change

console.log(name); // This will print "Vinayak" to your console

const student =
{
    name: "John",
    age: 20
}
student.name = "Jane"; // This is allowed because we are modifying a property of the object, not reassigning the variable itself
console.log(student.name); // This will print "John" to your console


// Practice 1:  Create the const vaibel to store the product value and print it to the console.
const product =
{
    name: "pen",
    price: 10,
    ratinf: 4.5,
    isdeal: true,
    offer: "20% off"
}

console.log(product);

// Practice 2: Create a const object called profile to store information shown in the picture.
const profile = {
  username: "shradhakhapra",
  fullName: "Shradha Khapra",
  isVerified: true,
  posts: 195,
  followers: "569K", // or 569000 if stored as a number
  following: 4,
  threadsHandle: "shradhakhapra",
  role: "Entrepreneur",
  bio: "Apna College | Ex-Microsoft, DRDO\nTo educate someone is the highest privilege❤️",
};

console.log(profile);