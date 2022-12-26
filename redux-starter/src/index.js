//import { compose, pipe } from 'lodash/fp';

/*In JavaScript, we can assing a function to a variable,
we can pass it as an argument, we can also return it from
another function*/

/*Higher-order Function is a function that takes a function
as an argument, or return it or both*/

/*Function composition: the idea of functional programing is to
write a bunch of small and reusable functions, and then compose
them tu build more complex functions for solving real world problems

let input = "  JavaScript  ";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;

const result = wrapInDiv(trim(input));

We can clean the parethesis with the library Lodash(compose, pipe)=>

const transform = compose(wrapInDiv, trim); form right to left
transform input;

const tranform2 = pipe(trim, wrapInDiv); form left to right
console.log(transform2(input));
*/

/*Currying: instead of passing two parameter and separate them
with coma, we pass a function to a function and then separe them
with parenthesis=>

function add(a) {
    return function(b) {
    return a + b;
    };
}
more clear:
const add2 a => b => a + b;
add(1)(2);


Using the function above:
let input = "  JavaScript  ";

const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`; modified

const tranform3 = pipe(trim, wrap("div")); example of ${type}
console.log(transform3(input));
*/

/*Pure Function: is a function that everytime we call it and give 
it the same arguments, it always returns the same result.
-No random values
-No current data/time
-No global state(DOM, files, db, etc)
-No mutation of parameters

BENEFITS:
-Self-documenting: everything a function needs is clearly specified
-Easy testable: we don´t have to set some global state prior to testing these functions
-Concurrency: because we don´t use global state or change it, we can run these functions in parallel
*/

/*Immutability: once we created an object, we cannot change
or mutate it. You can copy and change that copy.

Why immutability?
-Predictability
-Faster change detection
-Concurrency

Immutability practice: updating objects
const person = {
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
}};
//if we want to update the object, we are not supposed to set
//the name property directly, we should take a copy and then updated the copy

//1 way:
//with this method we can copy the content of an object to another
//as first argument we pass an empty object, then our "person" object
//this is going to copy all the properties of this object "person"
//into the empty object, optionally, as a third argument, we can 
//supply an object with updated properties 
const updated = Object.assign({}, person, { name: "Bob", age: 30 })

//2 way
//spread operator + "person" object, and overwrite the name property
const updated2 = {
    ...person,
    name: "Bob",
    address: {
        ...person.address,
        city: "New York"
}};
console.log(person);
console.log(updated2); 
//when we use spread or object.assign we should do a deep copy
//because these methods do a shallow copy and when we work with
//nested objects we can modify the original object and we dont want that
//The more nesting we have, the more verbose our code is going to be

Immutability practice: updating arrays
const numbers = [1, 2, 3];

//Adding options
const added = [...numbers, 4];
const added2 = [4, ...numbers];
//To add in specific place, we have to find the index 
const index = numbers.indexOf(2);
const addedToBeginning = [
    //give .slice an start number, and the index is excluded
    ...numbers.slice(0, index),
    //add the number you want
    4,
    //here we add the index and the rest of numbers
    ...numbers.slice(index)];
console.log(addedToBeginning);

//Removing
// N goes to N and N its not equal to 2 
const removed = numbers.filter(n => n !== 2);

//Updating
//N goes to N, if N equal 2 its going to return 20 otherwise we will return N
const mapping = numbers.map(n => n === 2 ? 20 : n);
*/

/*JavaScript doesnt prevent object mutation because its not a 
pure functional programming language. We have to use libraries
that offer real inmmutable data structures.
Libraries recommended:
-Inmmutable
-Immer (best)
-Mori
*/





