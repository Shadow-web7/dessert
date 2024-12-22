console.log("hello world");
// Data types: undefined, null,Boolean,String,symbol,number and Object
/* variable let, var, const
var- can be used throughout the wholeprogram
let can only be usedwithin the scope of where it was declared
const - a variable that can never change*/
var myname = "bea"
myname = 8;
// semicolon is not required but often advised to end code with 
var a; //uninitialized
var b = 2; //initialized variable
//console.log(a)
a= 7;
b = a;
var c = "i am a"
//console.log (a)
a = a + 1;
b = b + 5;
c = c + " string!";
//console.log(c)
//variable name and function name are case sensitive
var sum = 10 ;
sum+=5;//increment
//console.log(sum)
var product = 2.0 * 2.5 ;
//console.log(product)
var remainder;
remainder = 11 % 3;
//console.log(remainder)
a = a + 12; a +=12;
b -=5; a *=6, a /= 12;
//characters in single or double quotation are called string
//using quotes in string     -use backslash(\) - use single quote for the string - using back tick
var my ="i am a \"double quoted\" string inside \"double quotes\"";
var my ='i am a "double quote" using"single quote"'
var my = `'using single and "double quotes"'`
/*code output
 \'    single quote
 \"    double quote
 \\    backslash
 \n    newline
 \r    carriage return
 \t    tab
 \b    backspace
 \f    form feed
  */
var my = "firstline\n\t\\secondline\nthirdline"
//console.log(my)
//concatenating strings
var con = "i come first. " + "I come second. ";
var con = "I COME FIRST. ";
con += "I COME SECOND.";
con = 2 +'2'
//console.log(con)
//constructing string together with variables
var name = "sam";
var our = "HELLO, my name is " + name +", how are you?";
// console.log(our);
//appending variables to strings
var and = "awesome!";
var cap = "i am ";
cap += and;
//console.log(cap);
//STRING LENGTH
var name = 'tada';
//console.log(name.length);
// bracketnotation
var name = "sam";
// var firstletter = name[0];
// console.log(firstletter)
       //OR
//console.log(name[2]);
// string immutability
var str = "hello";
str[0] = "R";//will not work 
//
//bracket notation to find nth character ina string
var name = "adisa"
var second = name[1];
//bracket notation to find the lastletter in string
var name = "fridaus";
// console.log(name.length - 1);
// console.log(name[6]);
            //word blanks
function wordblanks(mynoun,myadjective,myverb,myadverb){
    var result ="";
    result  +="The " + myadjective + " "+mynoun +" "+ myverb +" "+ "to the store " + myadverb;                                                      
    return result;
}
//console.log(wordblanks("dog","big","ran","quickly"));
//console.log(wordblanks("bike","slow","flew ","slowly"));
                 //ARRAY used to store several piece of data in one place["","",]
var arr =["john","sam",23];
//nested array when an array is in another array aka multidimensional array
var arr = [["the universe",42],["everything",101010]];
//access array data with indexes
var arr =["john","sam",23]; 
//console.log(arr[1]);
//modify array data with indexes
var arr =["john","sam",23];
arr[1] = "fahd";
//access multidimensional arrays with indexes
var arr = [[1,42,4],[3,101,10],[2,45,7],[[6,9,4],23,4,43]];
//console.log(arr[2][1]);//[]array number, the 2nd [] array data
 //push to add content or another array
  var arr = ["son","bob","cam"];
  arr.push(["dark","sun"],"dean");
  // console.log(arr);
  //POP manipulating array removes the last element
  var arr = [1,3,5];
  // console.log(arr.pop());
  // console.log(arr);
  // manipulate array with SHIFT removes the first element
  var arr = ["alex","fahd",["cat"]];
 var remove = arr.shift()
// console.log(arr.shift());
// console.log(arr);
                // UNSHIFT    adds element to the beginning of the array
var arr =["cam","sal",];
arr.unshift("sodiq");
// console.log(arr)
var list =[["cereal",23],["goat",3]]
list.shift();
list.unshift(["sam",86]);
// console.log(list);
                      //writing reusable code with functions
// function allows for creating reusable codes
function functionname (information){
  // action carried out when the function is called
  console.log("heyya, world!");
}
functionname();
function nme(){
  console.log("hi world");
}
nme();
                   //passing values to functions with arguments
//parameters are variables that act as placeholder for the values that are to be input to a function when it is called
function wit(a, b){
  console.log(a-b);
}
//wit(10, 5);
                     //global scope and functions
//scope refers to the visibility of variables
//global scope means they can be seen everywhwere in your javascript code
var myglobal = 20 ;
function fun1(){
  globe = 24;

}
function fun2() {
  var output ="";
  if(typeof myglobal != "undefined"){
    output +="myglobal: " + myglobal;
  }
if( typeof globe != "undefined"){
  output +=" globe: " + globe;
}
// console.log(output);
}
// fun1();
// fun2();
//local scope and functions
//variables declared in a function have local scope
function mine() {
  var myvar = 5;
  console.log(myvar);
}
mine();
 //console.log(myvar); // cant acces outside the function
//  global(declared outside a function) vs local scope in functions
var wear = "shirt";
function outfit(){
  return wear;
}
// console.log(outfit());
var wear = "shirt";
function outfit(){
  var wear  ="sweater";
  return wear;
}
//console.log(outfit());//local variable took precedence over the global variable
//console.log(wear);// the global variable took precedence over the local variable
                         //return a value from a function with return
function minusseven(num) {
  return num-7;
  // return num *2;
}
// console.log(minusseven(10));
                                // undefined value returned from a function
var sum = 0; 
function add(){
   sum += 3; 
}
//assignment with a returned value
var changed = 0;
function change(num) {
  return (num + 5)/3;
}
changed = change(25);
console.log(changed);
//stand in line
//  a cue is an Abstract data structure where items are kept in order
function next(arr,item){
  arr.push(item);
  return item;

}
var test =[1,2,3,4,5];
// console.log("BEFORE: " + JSON.stringify(test));
// console.log(next(test,6));
// console.log("AFTER: " + JSON.stringify(test));
                       // boolean TRUE FALSE
function welcome(){
  return false;
}
                    //CONDITIONAL LOGIC WITH IF STATEMENT
function TOF(isittrue){
  if(isittrue){
    return "yes,it is true";
  }
  return"no, it's false";
}
function TOF(wasthattrue){
  if(wasthattrue){
    return"yes";
  }
  return"no";
}
// console.log(TOF(true));
function equal(val){
  if(val == 12){
    return"EQUAL";
  }
  return"NOT EQUAL";
}
// console.log(equal(10));
//comparison with  strict equality operator === does not do type conversion 
function sod(a, b){
  if (a === b){    // == performs type conversion i.e convert the string into number === does not do type conversion
    return"equal";
  }
  return"not equal";
}
// console.log(sod(10,"10"));
//comparison with inequality operator !=
function equal(val){
  if(val != 12){
    return"NOT EQUAL";
  }
  return"EQUAL";
}
// console.log(equal(10))

//comparison with inequality operator !==
function equal(val){
  if(val !== 12){
    return"NOT EQUAL";
  }
  return"EQUAL";
}
// console.log(equal(10))

//comparison with logical and operator  <>
function great(val){
  if(val >100){
    return "over 100";
  }
  if(val >10){
    return "over 10";
  } 

  return "10 or under";
}
// console.log(great(10));
//comparison with greater than or equal tooperator  >=
function great(val){
  if(val >= 100){
    return " 100 or over";
  }
  if(val >=10){
    return " 10 or over";
  } 

  return "under 10";
}
// console.log(great(10));
//comparison with logical and operator  i.e 2 statement or arguement &&
function tea(val){
  if(val <= 50 && val >= 25){
    return"yes";
  }
  return"no";
}
//comparison with logical or operator ||
function tea(val){
  if(val <= 10 || val >= 20){
    return"outside";
  }
  return"inside";
}
// console.log(tea(15));
//else statement
function treat(val){
  if (val > 5){
    result ="bigger than 5";
  }else {
    result = "smaller than 5";
  }
  return result;
}
// console.log(treat(15));
//else if statement  multiple conditions
function treat(val){
  if (val > 5){
    return "bigger than 5";
  } else if(val < 5){
    return "smaller than 5";
  }else{
  return"between 5 and 10"}
}
//logical order in if else statements o
// once the first condition has been met the other condition wont we be checked
//order should be taking note of while writing code
function treat(val){
  if(val < 5){
  return "less than 5";
}else if (val < 10){
    return "less than 5";
  }else{
  return"between 5 and 10"}
}
//chaining if else statements
function size(num){
  if(num < 5){
    return"tiny";
  }
  else if(num < 10) { return"medium"}
  else if(num < 20) {return"Large"}
  else  { return"Huge"}
}
console.log(size(19));
//GOLF CODE
var names = ["Hole-in-one!","Eagle","Birdie","par","Bogey","Double Bogey","Go home!"]
function golf(par,strokes){
  if(strokes == 1){
    return names[0]
  }else if(strokes == par - 2){
    return names[1]
  }else if(strokes == par - 1){
    return names[2]
  }else if(strokes == par){
    return names[3]
  }else if(strokes == par + 1){
    return names[4]
  }else if(strokes == par + 2){
    return names[5]
  }else if(strokes >= par + 3){
    return names[6]
  }
  
}
// console.log(golf(5,4))
                   // switch Statememts   instead of chain statements switch statements can be used to have many key stataments
function casing(val){
  var answer ="";
  switch(val){
    case 1:
      answer = "alpha";
      break; //goes to the end of the switch statement else it will go to the next case statement
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
  }
  return answer
}
console.log(casing(4))

