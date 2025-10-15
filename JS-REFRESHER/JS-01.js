var name = "Max";
var age = 29;
var hashHobbies = true;

console.log(name);

function summarizeUser(username,userAge,userHasHobby){
    return 'Name is '+ userName + ', age is'+userAge + ' and the user has hobbies: '+ userHasHobby
};

console.log(summarizeUser(name,age,hashHobbies));


// let vs const vs var

//var --> can be redeclared and mutable
// let --> cannot be redeclared and mutable
// const --> cannot be redeclared and immutable


// ARROW FUNCTIONS
// short handy functions 

// FUNCTION TYPES 
// anonymous function 
// function declaration
// arrow functions
// function expressions

const hello = () =>{
    return "hello";
}

// you can omit '{}' and return statement if 
const add = (a,b) => a+b;
const addOne = a => a+1; // one arguement no need to use '()'

// working with objects , parameters and methods

const person = {
    name: 'Max',
    age: 29,
    greet: () =>{
        console.log('Hi,I am'+ this.name);
    }
};

person.greet();
// when we use 'this' keyword inside arrow functions then it points to global object which is window object so we will get undefined here!!!
// to solve this problem use ananymous function inside objects

// LEXICAL SCOPE
// Lexical scope refers to how variable scope is determined by the structure of the code. A variable’s scope is defined by where it is declared, and it is accessible within that scope and any nested scopes
// Determines the visibility of variables based on the physical placement of code. Variables are accessible in their own scope and any nested scopes.

//CLOSURES
// remember its birthplace
// Functions that maintain access to their lexical scope even after their outer function has completed. They allow encapsulation of private data and functionality.


// Combining Lexical Scope and Closures
// To illustrate both concepts, consider a real-world scenario where we create a shopping cart system. In this system, each cart can maintain its own list of items, allowing for functionality like adding and removing items while preserving the cart’s state across different operations.

function createCart() {
    let items = [];

    return {
        addItem:function(item){
            items.push(item);
        },
        getItems:function(){
            return items;
        },
        removeItem:function(item){
            let index = items.indexOf(item);
            items.splice(index,1);
        }
    }
}

const cart = createCart();
cart.addItem('apple');  // add 'apple'
cart.addItem('banana'); // add 'banana'
cart.addItem('orange'); // add 'orange'
cart.addItem('mango'); // add 'mango'
console.log(cart.getItems()) // [ 'apple', 'banana', 'orange', 'mango' ]
cart.removeItem('apple') // remove 'apple'
console.log(cart.getItems()) //[ 'banana', 'orange', 'mango' ]


// EXAMPLE OF LEXICAL SCOPING
var globalVar = 'Global';

var outerFunction = function() {
    var outerVar = 'Outer';

    console.log("Global and Outer variables accessible (outer function):", globalVar, outerVar);

    var innerFunction = function() {
        var innerVar = 'Inner';
        console.log("Global, Outer, and Inner variables accessible (inner function):", globalVar, outerVar, innerVar);
    };

    innerFunction(); // Call inner function
    return;
};

outerFunction(); // Call outer function
console.log("Only Global variable accessible (global scope):", globalVar);


// EXAMPLE OF CLOSURES
function createFieldValidator(fieldName) {
    // Encapsulate the validation rules and state within the closure
    let isValid = true;
    let errorMessage = '';

    return {
        validate: function(value) {
            // Custom validation logic for the field
            if (value.trim() === '') {
                isValid = false;
                errorMessage = `${fieldName} cannot be empty.`;
            } else if (value.length < 5) {
                isValid = false;
                errorMessage = `${fieldName} must be at least 5 characters long.`;
            } else {
                isValid = true;
                errorMessage = '';
            }
            return isValid;
        },
        getError: function() {
            return errorMessage;
        }
    };
}

// Create validators for different fields
const usernameValidator = createFieldValidator('Username');
const passwordValidator = createFieldValidator('Password');

// Validate inputs
const username = 'John';
const password = '1234';

if (!usernameValidator.validate(username)) {
    console.log(usernameValidator.getError()); // Output: Username must be at least 5 characters long.
}


// Write a function makeCounter that returns an object with two methods: increment and getValue. The increment method should increase the count by 1, and getValue should return the current count. How would you implement this using closures?

function makeCounter(){
    let counter = 0
    return {
        increment:function(){
            return counter++
        },
        getValue:function(){
            return counter
        }
    }
}
const counter = makeCounter()

counter.increment() // increment to 1
counter.increment() // increment to 2
counter.increment()// increment to 3

console.log(counter.getValue()) // 3

// Create a closure that simulates a simple bank account with methods to deposit, withdraw, and check balance. How would you implement this?
  
function bankSystem(){
    let balance = 0

    return {
        deposit:function(amount){
            console.log("successfully deposit",amount)
            balance += amount
            return balance
        },
        withdraw:function(amount){
            if(balance >= amount){
                console.log("successfully withdraw",amount)
                balance -= amount
                return balance
            }else{
                console.log("inssuffent amount")
            }
        },
        checkBalance:function(){
            console.log("your current balance",balance)
            return balance
        }
    }
}

const bank = bankSystem()

bank.withdraw(300) //inssuffent amount
bank.deposit(500) // successfully deposit 500
bank.deposit(500) // successfully deposit 500
bank.deposit(500) // successfully deposit 500
bank.checkBalance() // your current balance 1500
bank.withdraw(300) // successfully withdraw 300
bank.withdraw(300) // successfully withdraw 300
bank.checkBalance() // your current balance 900


const person2 = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi,I am'+ this.name);
    }
};

// arrays and array methods
const hobbies = ["spirits","cooking",1,true];

for(let hobby of hobbies){
    console.log(hobby);
}

// map will transform the array and return a new array
const newArr = hobbies.map(hobby => hobby + ' great !!! ');


// SPREAD AND REST OPERATORS
const heroes = ["thor","superman"];
const copied = heroes.slice();
console.log(copied);
const copiedArr = [...heroes]; //spread operator

const people = {
    name: "vinay",
    lastname: "joshi"
};

const copiedPeople = {...people} // spread operator also works for objects as well

// takes all arguements 
const toArray = (...args) => {
    return args;
}

// DESTRUCTURING
// get values you are only interested
 const printName = ({name}) =>{
    console.log(name); 
 }

const {name,age} = people; // pulling them out there name
console.log();

const [hobby1,hobby2] = ['sports','cricket'];
console.log(hobby1,hobby2);


// ASYNC CODE AND PROMISES
// ASYNC CODE:- 

// async code not immediately execueted need some time
setTimeout(()=>{
    console.log("'Timer is done");
},2000);

// there both are synchronous code immediatelye executed 
console.log("hello");
console.log("HI");

// after using promise this code becomes synchronise
const fetchData = () => {
    const promise = new Promise((resolve,reject)=>{
         setTimeout(()=>{
        callback("done");
    },1500)
    });
    return promise;
};

setTimeout(() => {
    console.log("Timer is done");
    fetchData()
    .then(text1 => {
        console.log(text1);
        return fetchData()
    })
    .then(text2 => {
        console.log(text2);
        return fetchData()
    })
}, 2000);

console.log("HEYAAAA");
console.log("HIIII");

// CALLBACK HELL -> nested callbacks
// promises to resolve callback hell


// TEMPLATE LITERALS
// dynamically add data into a string
let a = 23
console.log(`HEllo ${a}`);



