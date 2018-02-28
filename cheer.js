// Create a file called cheer.js that performs a cheer, using a named passed to it.Use as many of these as you can, even if the code you write isn't as compact or 'efficient' as you would like. This is more about trying out some ES6 than being succinct.

// const and/or let
// Object literal shorthand
// Destructuring assignments
// Fat arrow function(s)
// Spread operator
// Template literals
// Execute the file by typing node cheer.js inside the file's directory.

// Expected:

// $ node cheer.js
// Give me a J!
// Give me an O!
// Give me an H!
// Give me an N!
// Give me a D!
// Give me an O!
// Give me an E!
// What does that spell ?
//     JOHN DOE!
// Note: the 'a' vs. 'an'

const J = "Give me a J!";
console.log(J);

let O = "Give me an O!";
console.log(O);

let H = "Give me an H!";
let hObj = {
    H
};
console.log(hObj.H);

const nObj = {
    cheer: "Give me an N!"
}
const { cheer: N } = nObj;

console.log(N);

const D = "Give me a D!";
const dCheer = D => D;

console.log(dCheer(D));

const Give = ["Give"];
const Me = ["me"];
const an = ["an"];
const Obang = ["O!"];

const oCheer = [...Give, ...Me, ...an, ...Obang];
console.log(oCheer[0], oCheer[1], oCheer[2], oCheer[3]);

const eMap = new Map();
const eCheer = "String!"

eMap.set(eCheer, "Give me an E!");
console.log(eMap.get(eCheer));

const finalCheer = "What does that spell?";
const name= "JOHN DOE";

console.log(`${finalCheer}
${name}`);