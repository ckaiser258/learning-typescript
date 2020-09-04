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