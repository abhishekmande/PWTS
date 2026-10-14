// let a=10;
// console.log(b);

console.log("Hello \n world",20)

let abc:number=10;//allowed in TS to define Datatype(:number) in variable but not in JS

//3 different ways in which we can declare a variable in (JS & TS):
/*-> these below 3 are reserved keywords for variable declaration 
var: in modern js and ts we do not use var keyword to declare a variable
let: if the value of variable can change at any point of time
const: to declare a constant variable(a final value to the variable and cannot change at any state)

*scope of a variable:
-> local scope variable, global scope variable
local scope variable:(INDIA i can freely move, but no visa of other country so cannot freely move in other country) when u try to declare a variable inside {...} is known as Local scope variable
eg {let var1="TS"}
console.log(var1) not possible

global scope variable:(have VISA of all country) when u try to declare a vriable outside {...}
eg let lang="python" //global scope
    {
        let lang="TS" //local scope
        console.log(lang);// op: TS
    }
console.log(lang)// op: python

*Problems of var keyword
->1. var var2=10
    var var2=133
    var var2=699
    console.log(var2); output: 699

    2. var lang="python"
    {   
        var lang="TS"
        console.log(lang) //op: TS
    }
        console.log(lang)//op: TS
whenever we declare a variable using "var" keyword it can be redeclared and can be

*Scope of let keyword variable:
-> BLOCK level {} scope or GLOBAL LEVEL SCOPE
    whenever we declare a variable using "let" keyword it cannot be redeclared but
    it is not mandatory to assign the value of the variable at the time of declaration

*scope of const keyword varaible:
-> scope- block level or global scope
    whenever we declare a variable using "const" keowrd it cannot be redeclared 




*difference btw var,let and const:
 */
