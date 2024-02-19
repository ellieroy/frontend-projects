// ASSIGNING VARIABLES
// var -- don't really use this anymore since it's global
// let -- you can reassign values
// const -- you can't reassign values, always use this unless you know you'll reassign it

// DATA TYPES (PRIMITIVE)
// String, Numbers, Boolean, null, undefined, Symbol
const name = 'John'; 
const age = 30; 
const rating = 4.5; 
const isCool = true; 
const x = null; 
const y = undefined; 
let z; // undefined 

// STRINGS
// Concatenation 
console.log('My name is ' + name + ' and I am ' + age);
// Template strings / Template literals 
const hello = `My name is ${name} and I am ${age}`; 
console.log(hello)
// String properties and methods
const s = 'technology, computers, it, code'; 
console.log(s.split(', ')); 

// ARRAYS -- variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5); // constructor
const fruits = ['apples', 'oranges', 'pears']; // possible to use different data types in one array
fruits[3] = 'grapes'; 
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(fruits)
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges')); 

// OBJECT LITERALS -- key value pairs
const person = {
    firstName: 'John', 
    lastName: 'Doe', 
    age: 30, 
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main str', 
        city: 'Boston', 
        state: 'MA'
    }
}; 
const{firstName, lastName, address: {city}} = person; 
console.log(city); 
person.email = 'john@gmail.com'
console.log(person)

// ARRAYS OF OBJECTS 
const todos = [
    {
        id: 1, 
        text: 'Take out trash', 
        isCompleted: true
    }, 
    {
        id: 2, 
        text: 'Meeting with boss', 
        isCompleted: true
    },
    {
        id: 3, 
        text: 'Dentist appointment', 
        isCompleted: false
    }
];
console.log(todos[1].text)

// JSON -- very similar to object literals 
const todoJSON = JSON.stringify(todos); 

// FOR LOOPS
for(let i=0; i <= 10; i++) {
    console.log(`For loop number: ${i}`);
}

for(let i=0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos) {
    console.log(todo.id)
}

// WHILE LOOPS
let i = 0; 
while(i < 10) {
    console.log(`While loop number: ${i}`);
    i++;
}

// forEach, map, filter (high-order array methods)
todos.forEach(function(todo) {
    console.log(todo.text)
}); 

const todoText = todos.map(function(todo) {
    return todo.text;
}); 
console.log(todoText)

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
}); 
console.log(todoCompleted)

// CONDITIONALS
const xx = 5; 
const yy = 10; 

if(xx == '10') { // double equal doesn't match data types whereas triple equal does
    console.log('x is 10');
};

if(xx === 10){
    console.log('x is 10');
} else if(xx > 10) {
    console.log('x is greater than 10'); 
} else{
    console.log('x is less than 10'); 
};

if(xx > 5 && yy >= 10){
    console.log('x is more than 5 or y is more than or equal to 10');
}; 

const color = xx > 10 ? 'red' : 'green'; 
console.log(color)

// SWITCHES 
switch(color) {
    case 'red':
        console.log('Color is red'); 
        break;
    case 'blue': 
        console.log('Color is blue'); 
        break; 
    default: 
        console.log('Color is not red or blue')
}

// FUNCTIONS 
// option 1 -- declare function
// function addNums(num1 = 1, num2 = 1) {
//     return num1 + num2; 
// }; 

// option 2 -- arrow functions 
// const addNums = (num1 = 1, num2 = 1) => {
//     return num1 + num2;
// };

// option 3 -- arrow functions without {} and return
const addNums = (num1 = 1, num2 = 1) => num1 + num2; 
console.log(addNums(4, 5)); 

// OBJECT-ORIENTED PROGRAMMING
// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
};

// Prototypes
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear(); 
};

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980'); 
const person2 = new Person('Mary', 'Smith', '03-02-1230'); 
console.log(person2.getFullName());

// Classes -- easier to write, but same as above
class PersonBetter {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    };

    getBirthYear() {
        return this.dob.getFullYear();
    };

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    };
};

const person3 = new PersonBetter('John', 'Doe', '4-3-1980'); 
const person4 = new PersonBetter('Mary', 'Smith', '03-02-1230'); 
console.log(person3);

// DOM SELECTION
// Single element -- only select one thing (this 1st one encountered)
const form = document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('.container')); // works like jquery for single elements

// Multiple element
console.log(document.querySelector('.item')); // only selects first list item
console.log(document.querySelectorAll('.item')); // selects all items in list
console.log(document.getElementsByClassName('item')); // returns HTML collection, not an array -- don't use this
console.log(document.getElementsByTagName('li')); // returns HTML collection

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// MANIPULATING THE DOM 
// const ul = document.querySelector('.items');
// // ul.remove(); // removes list from DOM
// // ul.lastElementChild.remove(); // removes item 3
// ul.firstElementChild.textContent = 'Hello'; 
// ul.children[1].innerText = 'Brad'; 
// // ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; 

// const btn = document.querySelector('.btn'); 
// // btn.style.background = 'red'; 
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc'; 
//     console.log(e.target.className);
//     document.querySelector('body').classList.add('bg-dark'); 
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// }); 

// Form script
const myForm = document.querySelector('#my-form'); 
const nameInput = document.querySelector('#name'); 
const emailInput = document.querySelector('#email'); 
const msg = document.querySelector('.msg'); 
const userList = document.querySelector('#users'); 

myForm.addEventListener('submit', onSubmit); 

function onSubmit(e) {
    e.preventDefault(); 
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error'); 
        msg.innerHTML = 'Please enter all fields'; 
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');  
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); 
        userList.appendChild(li); 

        // Clear fields
        nameInput.value = '';
        emailInput.value = ''; 
    }
}; 






