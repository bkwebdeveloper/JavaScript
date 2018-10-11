// Implicit Binding
// Explicit Binding
// New Binding
// Window Binding

// Where is this function invoked?
var sayName = function (name){
    console.log('Hello', name)   // At this point, we don't know what name is, until the function is invoked.
}
sayName('Bablu') 

// ...Similary, we don't know about "this" in a function until a function is invoked.


// Implicit Binding
var me = {
    name: 'Bablu',
    age: 23,
    sayName: function(){
        console.log(this.name);  // me.name     // "Hello Bablu"
    }
};
me.sayName();  // look to left to the dot at Call time.    
console.log('==========================================================')

// End Code

// =================================================================================

// Start Code

var sayNameMixin = function(obj){
    obj.sayName = function(){
        console.log(this.name);
    };
};

var me = {
    name: 'Bablu Kumar',
    age: 25
}

var you = {
    name: 'Ian Rowcliffe',
    age: 67
}

sayNameMixin(me);
sayNameMixin(you);

me.sayName();  // look to left to the dot at Call time.  
you.sayName(); // look to left to the dot at Call time.  
console.log('==========================================================')

// End Code

// =================================================================================

// Start Code
var Person = function (name, age){
    return {
        name: name,
        age: age,
        sayName: function(greeting){
            console.log(greeting + ' ' + this.name);
        },
        mother: {
            name: 'Stacy',
            sayName: function(behaviour){
                console.log(this.name + ' is ' + behaviour);
            }
        },
    };
};

var jim = Person('Jim', 21);
jim.sayName('Hi');     // look to left to the dot at Call time.  
jim.mother.sayName('kind');  // look to left to the dot at Call time.  


var sharma = Person('Sharma', 33);
sharma.sayName('Hello');   // look to left to the dot at Call time.  
sharma.mother.sayName('happy');   // look to left to the dot at Call time.  
console.log('==========================================================')

// End Code

// =================================================================================

// Start Code

// Explicit Binding

// Assume, we have a function in a global execution context and we want to call that in the context of an "object, say "stacy".
var sayName = function(){
    console.log('My name is ' + this.name);
}

var stacy = {
    name: "Stacy",
    age: 34
}
sayName.call(stacy);  // here, we have invoked a "sayName" function in the context of an object called "stacy" by using "call" function, which comes automatically with all functions
console.log('==========================================================')

// End Code

// =================================================================================

// Start Code
// Assume, we have a function in a global execution context and we want to call that in the context of an "object, say "stacy".
var sayName = function(lang1, lang2, lang3){
    console.log(`My name is ${this.name}. And, I know ${lang1}, ${lang2}, ${lang2}.`);
}

var stacy = {
    name: "Stacy",
    age: 34
}

language = ['JavaScript', 'Ruby', 'Python'];

// Below we have invoked a "sayName" function in the context of an object called "stacy" and gave some arguments  by using "call" function, which comes automatically with all functions
sayName.call(stacy, language[0], language[1], language[2]); 

// "apply()"" - in the case, we pass as an array.
sayName.apply(stacy, language); 

// "bind()" - it works like "call()" with a slight difference. It doesn't call right away, it gives back a a function that you can all at a later stage.
var newFn = sayName.bind(stacy, language[0], language[1], language[2]); 
newFn()

console.log('==========================================================');

// End Code

// =================================================================================

// Start Code
// new Binding
var Animal = function(color, name, type){
    // this = {}         // Because we are invoking the function with a "new" keyword - behind the scene, JS creates a brand new object for us and save it as "this = {}", however it is a little bit fancy than a regular object.
    this.color = color;
    this.name = name;
    this.type = type; 
};

var zerba = new Animal("black and white", 'Zorro', 'Zabra');

// End Code

// =================================================================================

// Start Code

// window Binding
