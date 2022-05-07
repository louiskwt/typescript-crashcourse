"use strict";
// Basic Types
let a = 5;
let company = 'Square One';
let hungry = false;
let x = 'hello';
x = true;
// This throw an error
// hungry = 'really hungry'
// array and tuples
let ids = [1, 2, 3, 4, 5];
ids.push(5);
let arr = [1, true, "gello"];
// Tuple
let person = [1, 'Louis', true];
// Tuple array
let employee;
employee = [
    [1, 'louis'],
    [2, 'Jane']
];
// Union (a variable that holds more than one type)
let id = 22;
id = '22';
// Enum (object)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
const user = {
    id: 12,
    name: 'John'
};
console.log(user.id);
// Type Assertion
let cid = 1;
let customerId = cid; // asserting type
let cuId = cid; // another way to assert
// Functions (params have to be given a type --> no implicity any)
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(5, 3))
// No return function
function log(message) {
    return console.log(message);
}
const admin1 = {
    id: 1,
    name: 'Jane'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const louis = new Person(1, 'Louis');
console.log(louis.register());
// Subclasses 
class Student extends Person {
    constructor(id, name, cls) {
        super(id, name);
        this.cls = cls;
    }
}
const yoyo = new Student(3, 'yoyo', '3A');
console.log(yoyo.register());
// Generics (for creating reusable functions or variables)
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['1', '2', '3']);
strArray.push('hello');
