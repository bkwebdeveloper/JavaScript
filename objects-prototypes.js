'use strict';

const parent = {
    name: 'Stacy',
    age: 43,
    heritage: 'Irish' 
}

const child = Object.create(parent)   // kind of inheritance
child.name = 'Ryan';
child.age = 17

console.log(child.name)       // 'Ryan'
console.log(child.age)        // 17
console.log(child.heritage)   // 'Irish'
console.log('==========================================================');

// End Code

// =================================================================================

// Start Code

// A better way : prototype
// prototype: just a property on every function you create in JS has that points to an object
function imAFunction(){}
imAFunction.prototype   // Run this is the brower
console.log('==========================================================');

// End Code

// =================================================================================

// Start Code

// This is called a contructor function because it is contructing an object for us.
function Animal(name, energy){
    let animal = Object.create(Animal.prototype);
    animal.name = name;
    animal.energy = energy;
    
    return animal;
}

Animal.prototype.eat = function(amount){
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

Animal.prototype.sleep = function(length){
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
}

Animal.prototype.play = function(length){
    console.log(`${this.name} is playing`);
    this.energy -= length;
}

let leo = Animal('Leo', 7)
let snoop = Animal('Snoop', 7)
// This method of sharing methods across all instances is something that is cool.


// End Code

// =================================================================================

// Start Code

// JS has a simpler way to create and maintain what we have seen previously above.

/* What is the difference?

let leo = Animal('Leo', 7)
let snoop = Animal('Snoop', 7)


let leo = new AnimalWithNew ('Leo', 7)
let snoop = new AnimalWithNew ('Snoop', 7)

*/ // Let's answer the questions below

function AnimalWithNew(name, energy){
    // when you create an object with the "new" keyword, it adds these lines for you out of the box.
    // let this = Object.create(AnimalWithNew.prototype);    <- this line
    this.name = name;  // now, use 'this'
    this.energy = energy;  // now, use 'this'
    
    // return this;    <- and, this line.
}


AnimalWithNew.prototype.eat = function(amount){
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

AnimalWithNew.prototype.sleep = function(length){
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
}

AnimalWithNew.prototype.play = function(length){
    console.log(`${this.name} is playing`);
    this.energy -= length;
}

// Now we are able to use 'new' keyword
let leo = new AnimalWithNew('Leo', 7)
let snoop = new AnimalWithNew('Snoop', 7)



// End Code

// =================================================================================

// Start Code

// We can get the above functionality "AnimalWithNew" with ES6 feature "class".
class Animal{
    constructor (name, energy){
        this.name = name;
        this.energy = energy;
    }

    eat(amount){
        console.log(`${this.name} is eating`);
        this.energy += amount;
    }

    sleep(length){
        console.log(`${this.name} is sleeping`);
        this.energy -= length;
    }

    play(length){
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }
}
const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 7)

// So, if this is a new way and good way to approach this, whay did we go over all the 'prototype' and 'new' keyword things.
// Well, this is the new way 'class' is just a syntactic suger over the existing 'prototype' thing with 'new' keyword. 
// It just looks cool, but does the same thing.

/*
prototype is only available on 'functions' since they are derived from Function, Function, and Object 
but in anything else it is not. However, __proto__ is available everywhere.
*/


// Good to know topics

// If you want to know the prototype of an instance. You can do so as following:
const prototype = Object.getPrototypeOf(leo);
proto === Animal.prototype  // true

