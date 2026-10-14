//let str=`welcome to ts`
//console.log(typeof(str))//op: string

//1. length: returns the number of character in a String
//console.log(str.length);//op:13

//2. charAt(index): it returns the character based on the index passed as arg to charAt()
//  let ch=str.charAt(0)
//  console.log(ch);//op: w

    //Assignment: input:"abcabc", output: count of each character ie a2b2c2

//3. concat(str1, str2)- merges all the strings and returns a new string, but doesnt update the original string
//let str=`welcome to ts`
// console.log(str.concat(" Hello", " Javascript"));//op: welcome to ts Hello Javascript
// console.log(str);//op: welcome to ts

//str=str.concat(" Hello", " Javascript")
//console.log(str)//op: welcome to ts Hello Javascript

//4. includes(searchString,startIndex?)
//5. indexOf(searchValue, startIndex?)
//6. lastIndexOf(searchValue, startIndex?)
// let str="welcome to ts"
// console.log(str.lastIndexOf('t'))//op: 11
// console.log(str.indexOf('t'))//op: 8
// console.log(str.includes('o',9))//op:true

//7. slice(startIndex?,endIndex-1?); return a portion of the string, without chnaging the original string
// let str='welcome to ts'
// let ref=str.slice(0,3)
//console.log(str.slice())//op: welcome to ts
// console.log(ref)//op: wel
// console.log(str)//op: welcome to ts

//8. substring(startIndex,endIndex-1?): here startindex is compulsory
// let str="welcome to ts"
// //console.log(str.substring(1,3))//op: el
// console.log(str.substring())//op: welcome to ts, here in this eventhough the statindex is not mentioned which is compuslory so the system itslfe adds 0

//9. trim(): it removes spaces from begning and end of the string
// let str=" welcome world "
// console.log(str.trim())//op:welcome world

//trimStart(): it removes space from the start of the th string
// let str=" welcome to ts "
// console.log(str.trimStart());//op:welcome to ts

//trimEnd(): it removes space from the end of the th string

//10. split(separator): splits the string into an array of substring based on the separator
//let email="abk@gmail.com"
//let words=email.split("@")
// console.log(words)//op: [ 'abk', 'gmail.com' ]
//console.log(words[0])//op: abk
//console.log(words[1].split(".")[0])//op: gmail

//11. replace(old,new): it basically replaces the old value char with new value char in string, but only its first position and not at all repeating position of char
//let str="madam"
//console.log(str.replace('m','@'));//op: @adam

//replaceAll(old,new): it basically replaces al the positions of old value with new value
//console.log(str.replaceAll('m','@'))//op:@ada@





