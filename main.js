"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome Back";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Codevolution';
var isBeginner = true;
var total = 0;
var name = "Colton";
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
//Null and undefined are Subtypes (They can be assigned to any other type of variable (number, string, boolean))
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
//Arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//Tuple
//Types can be mixed, but number of elements is fixed. And order of values needs to match order of the types
var person1 = ['Chris', 22];
//Enum
//Values inside are actually numbers, starts at 0 like an array unless specified with '='
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
//'Any' type can be used when unsure of what type of variable it should be, if user input type is dynamic, or if importing from a 3rd party library library
var randomValue = 10;
randomValue = true;
randomValue = "Colton";
var myVariable = 10;
//None of these will throw an error ahead of time since myVariable is type any:
// console.log(myVariable.name)
// myVariable()
// myVariable.toUppercase()
//'Unknown" type is similar to 'any' type. However you can't access any properties of an unkown type nor can you call or construct them ahead of time
var myVariable2 = 10;
//Check if 'name' property exists in object or not
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
//Can use Type Assertion to let typescript know you want it to be a certain type. This would show an error without it
// (myVariable2 as string).toUpperCase()
//This still works, like plain javascript. Specifying variable types is optional in typescript. 
//If you declare the variable without a value initially, it can be changed without throwing an error immediately.
var a;
a = 10;
a = true;
//But if you declare a variable with a value initially, typescript will automatically infer the type of value and will throw related errors afterwards.
var b = 20; //Now b = false would throw an error
//Union of types for the same variable can be done using the pipe character. 
//This is useful when a value is not under your control. Such as an api that can send nums as strings. Or from user input.
//Why use union of types instead of the 'any' type?
var multiType;
multiType = 20;
multiType = true;
//Why use union types instead of the 'any' type?
var anyType;
anyType = 20;
anyType = true;
//Two reasons:
//Union types restrict to the specified types. 'Any' type doesn't have any restrictions (anyType = "hello" wouldn't throw an error).
//Intellisense doesn't work with the 'any' type.
//Functions can be passed specific types and will throw an error if the function is typed with an argument of the wrong type (5, '10' wouldn't work here).
//Also can't call the function without both arguments present.
//Can specify the return type as well (if you don't Typescript will compile it for you either way)
//Functions have intellisense as well.
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
//Optional parameters are specified with '?'.
//Can have any number of optional parameters, but they must always be after the required parameters.
function add2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add2(5, 10);
add2(5);
//Default parameters are defined the same as in Javascript.
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add3(5, 10);
add3(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
//Cleaner version than above using the custom type (interface):
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullName(p);
fullName2(p);
//Classes:
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Colton');
console.log(emp1.employeeName);
emp1.greet();
//Classes allow for object inheritance, just like Java.
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
        //Super keyword calls base class constructor.
        //This will call Employee and initialize managerName as the employeeName property.
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
//Now any Manager instance has access to the Employee properties as well (and they show up in the intellisense).
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//Access modifiers are keywords that set the accessability of properties from a class.
var Employee2 = /** @class */ (function () {
    function Employee2(name) {
        this.employeeName = name;
    }
    Employee2.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee2;
}());
