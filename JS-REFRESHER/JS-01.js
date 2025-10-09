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

const person2 = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi,I am'+ this.name);
    }
};

// arrays and array methods



