// let var1="ts";
// {
//     let var1="ravi"
//     console.log(var1);//op: ravi
// }
// console.log(var1);//op: ts

// const var2="ts";
// {
//     const var2="ravi"
//     console.log(var2);//op: ravi
// }
// console.log(var2);//op: ts

// let key3="letkeyword"
// key3="updateletkeyword"
// key3="2ndupdate"
// console.log(key3);//op: 2ndupdate

// let var3="letkeyword"
// var3="updateletkeyword"
// console.log(var3);//op: updateletkeyword

// const var3="letkeyword"
// var3="updateletkeyword"
// console.log(var3);//op: error

// const a=10;
// const a=100;
// console.log(a);//op: error

// let lang="java"
// {
//  let ang="js"
// }
// console.log(ang)//op: error (ang variable cannot be used outside local scope into global scope)

// const lang="java"
// {
// const lang="js"
// }
// console.log(lang)//op: java

// //var eg:
// function add()
// {
//     var key="abk";
// }
// console.log(key)//op: error , because "var" keyword variable cannot be accessied outside function as "var" keyword variable acts local scoped inside a function

// var key="abk"
// {
//     var key="update"
// }
// console.log(key)//op: update

// var key=10
// key=100
// console.log(key)//op: 100

//String using backtick usecase
// let multi="this
//             is 
//                 a"  //wrong

// let mutli=`this 
//             is  
//              a` //correct

// let age=20
// let sent='your age is ${age}'
// console.log(sent) //wrong

// let age=20
// let sent=`your age is ${age}` 
// console.log(sent) //correct

// union
// let num6:(number|string)='ravi'
// num6=10
// num6='kishan'
// console.log(num6)//op: kishan

// let age=20
// age='ravi'
// console.log(age);//op: ravi


// let age=undefined
// age=20
// console.log(age);//op:20

//console.log(var1)

// let a;
// console.log(a)//op: undefined

// const a; //error
// console.log(a)

// let a=10
// let a=100
// console.log(a)//error



