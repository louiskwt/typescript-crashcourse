// Basic Types

let a: number = 5
let company: string = 'Square One'
let hungry: boolean = false
let x: any = 'hello'


x = true
// This throw an error
// hungry = 'really hungry'

// array and tuples
let ids: number[] = [1, 2, 3, 4, 5]

ids.push(5)

let arr: any[] = [1, true, "gello"]

// Tuple
let person: [number, string, boolean] = [1, 'Louis', true]

// Tuple array
let employee: [number, string][]

employee = [
    [1, 'louis'],
    [2, 'Jane']
]

// Union (a variable that holds more than one type)
let id: string | number = 22

id = '22'

// Enum (object)
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction2.Down)

// Object
type User = {
    readonly id: number,
    name: string,
    age?: number   // optional type
}


const user: User = {
    id: 12,
    name: 'John'
}


console.log(user.id)

// Type Assertion
let cid: any = 1
let customerId = <number>cid  // asserting type
let cuId = cid as number // another way to assert

// Functions (params have to be given a type --> no implicity any)
function addNum(x:number, y:number): number {
    return x + y
}

// console.log(addNum(5, 3))

// No return function
function log(message: string | number): void {
    return console.log(message)
} 

// log('msg')

// Interfaces (custom type for object; cannot use union or primitive)
interface Admin {
    id: number,
    name: string
}

const admin1: Admin = {
    id: 1,
    name: 'Jane'
}

// console.log(admin1.name)


// function interface
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const louis = new Person(1, 'Louis')

console.log(louis.register())

// Subclasses 
class Student extends Person {
    cls: string

    constructor(id: number, name: string, cls: string) {
        super(id, name)
        this.cls = cls
    }
}

const yoyo = new Student(3, 'yoyo', '3A')

console.log(yoyo.register())

// Generics (for creating reusable functions or variables)
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['1', '2', '3'])

strArray.push('hello')