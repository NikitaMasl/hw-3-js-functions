//1) Write a function splitAndMerge
function splitAndMerge(str, sp){
    return str.split(" ").join('').split('').join(sp);
}
console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("Hello World!",","));
//2) Write a function convert
function covert(hash){
     return Object.entries(hash);
}
console.log(covert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));
//3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word 
//within the output should be capitalized only if the original word was capitalized.
function toCamelCase(str) {
    return str
    .split(/_|-/)
    .map(function(word){
        return word[0].toUpperCase()+word.substring(1);
    })
    .join('');
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
//4) Write a function that takes a sentence (string) and reverses each word in the sentence.
function reverWords(str){
    return str
    .split(" ")
    .map(function(word){
       return word.split("").reverse().join('');
    })
    .join(' ');
}
console.log(reverWords(" A fun little challenge! "));
//5) Write a function stringExpansion
function stringExpansion(str) {
    var arr = str.split('');
    var newArr = [];
    var multiplier = 1;
    for (i=0; i < arr.length; i++){
      if(arr[i] % 1 == 0){
        multiplier = parseInt(arr[i]);
      }
      if (arr[i] % 1 != 0){
        newArr.push(arr[i].repeat(multiplier)); 
      }
    }
    return newArr.join('');
}
console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("3d332f2a"));
console.log(stringExpansion("abcde"));
//6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.
function largest(arr) {
    return Math.max.apply(null, arr);
}
function smallest(arr) {
    return Math.min.apply(null, arr);
   
}
console.log(largest([2, 0.1, -5, 100, 3]));
console.log(smallest([2, 0.1, -5, 100, 3]));
//7) Write function transform that will transform array of numbers to array of functions that will return value from
// a base array.
function transform(arr) {
    return arr.map(function(number){
        return function(){
            return number;
        }
    });
}
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());
//8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them.
function sum() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;
}
console.log(sum(1,3,5,7,100,200,12,34));
//9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.
function  countDown(number) {
    console.log(number);
    var timer;
    if(number != 0){
        timer = setTimeout(countDown, 1000, number-1);
    }else{
        clearTimeout(timer);
    }
}
countDown(3);
//10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work in an 
//exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
Function.prototype.myBind = function (context, numargs) {
    var bindArgs = [].slice.call(arguments, 2);
    return function() {
        var fnArgs = [].slice.call(arguments); 
        return numargs.apply(context, bindArgs.concat(fnArgs));
    }
}
