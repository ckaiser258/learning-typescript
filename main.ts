export {}
let message = "Welcome Back"
console.log(message)

let x = 10
const y = 20

let sum
const title = 'Codevolution'

let isBeginner: boolean = true
let total: number = 0
let name: string = "Colton"

let sentence: string = `My name is ${name}
I am a beginner in Typescript`

console.log(sentence)

//Null and undefined are Subtypes (They can be assigned to any other type of variable (number, string, boolean))
let n: null = null
let u: undefined = undefined

let isNew: boolean = null
let myName: string = undefined

//Arrays
let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

//Tuple
//Types can be mixed, but number of elements is fixed. And order of values needs to match order of the types
let person1: [string, number] = ['Chris', 22]

//Enum
//Values inside are actually numbers, starts at 0 like an array unless specified with '='
enum Color {Red = 5, Green = 2, Blue}

let c: Color = Color.Green
console.log(c)

//'Any' type can be used when unsure of what type of variable it should be, if user input type is dynamic, or if importing from a 3rd party library library
let randomValue: any = 10
randomValue = true
randomValue = "Colton"

let myVariable: any = 10

//None of these will throw an error ahead of time since myVariable is type any:
    console.log(myVariable.name)
    myVariable()
    myVariable.toUppercase()

//'Unknown" type is similar to 'any' type. However you can't access any properties of an unkown type nor can you call or construct them ahead of time

let myVariable2: unknown = 10

//Check if 'name' property exists in object or not
function hasName(obj: any): obj is {name: string} {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVariable2)) {
    console.log(myVariable2.name)
}

//Can use Type Assertion to let typescript know you want it to be a certain type. This would show an error without it
(myVariable2 as string).toUpperCase()

//This still works, like plain javascript. Specifying variable types is optional in typescript. 
//If you declare the variable without a value initially, it can be changed without throwing an error immediately.
let a;
a = 10
a = true

//But if you declare a variable with a value initially, typescript will automatically infer the type of value and will throw related errors afterwards.
let b = 20 //Now b = false would throw an error

//Union of types for the same variable can be done using the pipe character. 
//This is useful when a value is not under your control. Such as an api that can send nums as strings. Or from user input.
//Why use union of types instead of the 'any' type?
let multiType: number | boolean;
multiType = 20
multiType = true

//Why use union types instead of the 'any' type?
let anyType: any
anyType = 20
anyType = true
//Two reasons:
//Union types restrict to the specified types. 'Any' type doesn't have any restrictions (anyType = "hello" wouldn't throw an error).
//Intellisense doesn't work with the 'any' type.

//Functions can be passed specific types and will throw an error if the function is typed with an argument of the wrong type (5, '10' wouldn't work here).
//Also can't call the function without both arguments present.
//Can specify the return type as well (if you don't Typescript will compile it for you either way)
//Functions have intellisense as well.
function add(num1: number, num2: number): number {
    return num1 + num2
}
add(5, 10)

//Optional parameters are specified with '?'.
//Can have any number of optional parameters, but they must always be after the required parameters.
function add2(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2
    else
        return num1 
}
add2(5, 10)
add2(5)


//Default parameters are defined the same as in Javascript.
function add3(num1: number, num2: number = 10): number {
    if (num2)
        return num1 + num2
    else
        return num1 
}
add3(5, 10)
add3(5)
//Would still return 15.

//Interface allows us to create custom types using objects (optional parameters can be used here as well)
//Optional parameters here are good for user forms that have optional fields.
interface Person {
    firstName: string
    lastName?: string
}

function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

//Cleaner version than above using the custom type (interface):

function fullName2(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

fullName(p)
fullName2(p)