//1) Write a function splitAndMerge
function splitAndMerge(str, sp){
    var separetedstr = "";
    for(var i=0;i<str.length; i++){
        if(str[i] != " "){
            separetedstr += str[i];
        }
    }
    var separetedstrfinal = "";
    for(var i=0;i<separetedstr.length; i++){
            if(i==(separetedstr.length-1)){
                separetedstrfinal+=separetedstr[i];    
            }else{
                separetedstrfinal+=separetedstr[i];
                separetedstrfinal+=sp;
            }
    }
    return separetedstrfinal;
}
console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("Hello World!",","));
//2) Write a function convert
function covert(hash){
    var result = [];
    result[0]= ["name:", hash.name];
    result[1]=["age" , hash.age];
    result[2]=["role" , hash.role];
      return result;
}
console.log(covert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));
//3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word 
//within the output should be capitalized only if the original word was capitalized.
function toCamelCase(str) {
    var resultstring="";
    for(var i=0; i<str.length;i++){
        if(str[i]=="-"||str[i]=="_"){

        }else{
            if(str[i-1]=="-"||str[i-1]=="_"){
                resultstring+=str[i].toUpperCase();
            }else{
                resultstring+=str[i];
            }
        }
    }
    return resultstring;
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
//4) Write a function that takes a sentence (string) and reverses each word in the sentence.
function reverwords(str){
    var newarr = str.split(" ");
    var newstr ="";
    newarr.forEach(function(el) {
        el= el.split("").reverse().join("");
        newstr=newstr+" "+el;
    });
    return newstr;
}
console.log(reverwords(" A fun little challenge! "));
//5) Write a function stringExpansion
function stringExpansion(str) {
    var arr = str.split('')
    var newArr = []
    var multiplier = 1
    for (i=0; i < arr.length; i++){
      if(arr[i] % 1 == 0){
        multiplier = parseInt(arr[i])
      }
      else if (arr[i] % 1 != 0){
        newArr.push(arr[i].repeat(multiplier)) 
      }
    }
    return newArr.join('')
}
console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("3d332f2a"));
console.log(stringExpansion("abcde"));
//6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.
function largest(arr) {
    var max = Math.max.apply(null, arr);
    return max;
}
function smallest(arr) {
   var min = Math.min.apply(null, arr);
   return min;
}
console.log(largest([2, 0.1, -5, 100, 3]));
console.log(smallest([2, 0.1, -5, 100, 3]));
//7) Write function transform that will transform array of numbers to array of functions that will return value from
// a base array.
function transform(arr) {
    return arr;
}
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]);
console.log(newArray[4]);
//8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them.
function sum(one, two, three, four) {
    var k = 0;
    var finalsum = 0;
    function summa(one, two, three, four){
        if(arguments.length != k){
            finalsum+=arguments[k];
            k++;
            summa(one, two, three, four);
        }else{
            return finalsum;
        }
    }
    summa(one, two, three, four);
    return finalsum;
}
console.log(sum(1,3,5,7));
//9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.
function  countDown(number) {
    console.log(number);
    var timer;
    if((number) != 0){
        timer = setTimeout(countDown, 1000, number-1);
    }else{
        clearTimeout(timer);
    }
}
countDown(3);
//10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work in an 
//exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
Function.prototype.myBind = function () {
    
    }