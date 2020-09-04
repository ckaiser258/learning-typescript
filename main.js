"use strict";
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
