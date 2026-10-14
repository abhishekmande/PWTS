 //const numbers='string'
 //const numbers=[10,20,30,40]
 //for(let each of numbers)
 //{
//     if(each>25)
//         console.log(each)
   // console.log(typeof each)
 //}

// let result=numbers.filter((num)=>num>25)
// console.log(result)

//1. Remove Duplicate characters from array of element using filter
var myArray = ['a', 1, 'a', 2, '1'];
// let result=myArray.filter((value,index,arr)=>arr.indexOf(value)===index) //filter() itself always returns a new array, indexOf() returns indexOf value from Left to Right
// console.log(result) //op: ['a',1,2,'1']
// console.log(typeof result)//op: object

// myArray=[...new Set(myArray)]
// console.log(myArray)

//2. Reverse the word in a sentence
// let str="india is a country"
// str=str.split('').reverse().join('').split(' ').reverse().join(' ')
// console.log(str)//op: aidni si a yrtnuoc
//split(''): it returns an array of each character where space is also a character stored in array, then reverse() reverse the whole array,join('') to get back reversed array as a string

//3. Reversing the whole sentence
//let str="india is a country"
// str=str.split('').reverse().join('')
// console.log(str)//op: yrtnuoc a si aidni

//without using inbuilt functions of string and array
// let result=''
// for(let i=str.length-1;i>=0;i--)
// {
//     result=result+str.charAt(i)
// }
// console.log(result)

//4. to check anagram btween 2 string
// let str1='Army'
// let str2='Mary'
// str1=str1.toLowerCase().split('').sort().join('')
// str2=str2.toLowerCase().split('').sort().join('')

// if(str1===str2)
//     console.log('Anagram')
// else
//     console.log("Not Anagram")

//5. to check string is palindrome or not
// let str1='Madam'
// let str2=str1.split('').reverse().join('')
// if(str1.toLowerCase()===str2.toLowerCase())
//     console.log('Palindrome')
// else
//     console.log("Not Palindrome")

//6. ip:abcabc op:a2b2c2
// let str='abcabc'
// let map=new Map<string,number>();

// for(let ch of str.split(''))
// {
//     map.set(ch,(map.get(ch)||0)+1)
// }
// let op=''
// for(let [ch,num] of map)
// {
//     op=op+ch+num
// }
// console.log(op)

//7. to find longest word from a string
// let str="javascript is also arnoldschwarzenegger"

// let longest=''

// for(let word of str.split(' '))
// {
//     if(word.length>longest.length)
//         longest=word
// }

// console.log(longest)

//8. To find vowels and its count in a given string
// let str="india is my country"
// let count=0
// for(let ch of str.split(''))
// {
//     if('aeiou'.indexOf(ch)!==-1)
//     {
//         count++
//         console.log(ch)
//     }
// }
// console.log(count);

//9. Remove Duplicate Characters from a String
 //let str='banana'
// let arr=str.split('').filter((value,index,arr)=>arr.indexOf(value)===index)
// console.log(arr)

//efficent code
//let arr=[...new Set(str)].join('') // [] is array, '...' is the spread operator, so basically the set is converted to array and then into string with help of join('')
//console.log(arr)

/*10. Count Occurrence of a Character in a String
Input String: “programming”
Input Char : “m”
Output : 2 */
// let str='programming'
// let map=new Map<string,number>();
// for(let ch of str.split(''))
// {
//     map.set(ch,(map.get(ch)||0)+1)
// }

// for(let [char,num] of map)
// {
//     if(char==='m')
//     {
//         console.log(num)
//     }
// }


/*11. Find all Repeated Characters in a String with its Count
Input : “assessment”
Output : s2,e2,m1,n1,t1,a1*/

// let inp='assessment'
// let map=new Map<string,number>()

// for(let ch of inp)
// {
//     map.set(ch,(map.get(ch)||0)+1)
// }
// let op=''
// for(let [char,count] of map)
// {
//   if(count>1)
//     op=op+char+count
// }
// console.log(op)

/*12. Replace ‘/’ in Dates to give only Numeric output
Input : “22/03/2024”
Output : 22032024 */
// let str='22/03/2024'
// str=str.replaceAll('/','')
// console.log(str)

/*13. Extract all Integers from a String
Input : “he33llo 42”
Output : 3342 */
// let str='he33llo 42'
// let num=''
// for(let ch of str)// eg. let str="123" is a string, its individual characters "1", "2", and "3" are also strings.
// {
//     if(ch>='0' && ch<='9')
//     {
//         num=num+ch
//     }
// }
// console.log(num)

/*14. Check if an Expression is Balanced or not 
**Input **: “{[()]}” **Output **: True */
function isBalanced(str: string): boolean {
    let stack: string[] = [];

    for (let ch of str) 
      {
        // If opening bracket, push into stack
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        }
        // If closing bracket
        else {
            // If stack is empty, no opening bracket exists
            if (stack.length === 0) {
                return false;
            }

            let top = stack.pop();

            if (
                (ch === ')' && top !== '(') ||
                (ch === '}' && top !== '{') ||
                (ch === ']' && top !== '[')
            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isBalanced("{[()]}"));

/*15. Find Duplicate Values in an Array
Input : [1, 2, 3, 2, 4, 5, 3]
Output : [2,3] */
// let arr=[1, 2, 3, 2, 4, 5, 3]
// let map=new Map<number,number>()

// for(let each of arr)
// {
//   map.set(each,(map.get(each)||0)+1)
// }
// let out=[]
// for(let [num,count] of map)
// {
//   if(count>1)
//     out.push(num)
// }
// console.log(out)


/*16. Verify the Password Complexity by providing different password inputs. Acceptance Criteria : Password length should be minimum 8, It should contain at least one character, one special character, one numeric, one upper case and lower case letter.
Input : Password@1
Output : True*/

// function isValidPassword(password: string): boolean { 
 
//     if (password.length < 8) { 
//         return false; 
//     } 
 
//     let hasUpper = false; 
//     let hasLower = false; 
//     let hasNumber = false; 
//     let hasSpecial = false; 
 
//     for (const ch of password) { 
 
//         if (ch >= 'A' && ch <= 'Z') { 
//             hasUpper = true; 
//         } 
//         else if (ch >= 'a' && ch <= 'z') { 
//             hasLower = true; 
//         } 
//         else if (ch >= '0' && ch <= '9') { 
//             hasNumber = true; 
//         } 
//         else { 
//             hasSpecial = true; 
//         } 
//         // No need to check remaining characters 
//         if (hasUpper && hasLower && hasNumber && hasSpecial) { 
//             return true; 
//         } 
//     } 
//     return false; 
// } 
// console.log(isValidPassword("Password@1"));

//17. to find 2nd highest element from the array
// const numbers= [0, 5, 15, 15, 15, 15];

// let highest=-1;
// let second=-1;

// for(let num of numbers)
// {
//     if(num>highest)
//     {
//         second=highest;
//         highest=num;
//     }
//     else if(num<highest && num>second)
//     {
//         second=num;
//     }
// }

// console.log(second)

//18. to find 2nd highest repeating character of an string
// let str='AABBAAA';

// let map=new Map<string,number>();

// for(let ch of str)
// {
//     map.set(ch,(map.get(ch)||0)+1);
// }

// let highest=0;
// let second=0;
// for(let each of map.values())
// {
//     if(each>highest)
//     {
//         second=highest;
//         highest=each;
//     }
//     else if(each<highest && each>second)
//     {
//         second=each
//     }
// }

// for(let [ch,num] of map)
// {
//     if (num===second)
//     {
//         console.log(ch+" "+num);
//     }
// }


