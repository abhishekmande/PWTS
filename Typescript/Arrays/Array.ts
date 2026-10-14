
/*
1. Array is a collection of a data, such that each data can be of any type
    eg. let arr=[10,'TS',undefined]
2. Array is an orderd collection. Means we can access the element from the array by using position(index)
3. Array is dynamic in size, and we can add or remove elements from any position and it is not static in size like java where we have define the size
4. We have 2 ways to create Array, a) using the array constructor, ie-> let arrayName=new Array<datatype>(value1,value2,....)
                                b) shorthand array literal syntax:
                                    ie-> let arr=[10,'TS',undefined],
                                    to define a specific datatype of elements in the array, ie-> let pages:string[]=["login","home","cart"]
*/

// let pages:string[]=["login","home","cart",-1]
// for(let ele of pages)
//     console.log(ele)//op: login home cart -1

//exampels:
//1. literal way of defining an array:

    // let arr=[10,20]
    // console.log(typeof arr) //op: object

    // let pages:string[]=["login","home","cart"];
    // console.log(typeof pages)//op: object

//2. constructor way of defining an array:
    // let arr2=new Array(10,20,"TS",50,undefined)
    // console.log(arr2);//op: [ 10, 20, 'TS', 50, undefined ]

//5. length- it is a variable which basically gives no of elements present in the array, eg:
    // let arr=[10,30,"TS"]
    // console.log(arr.length)//op:3

//6. how to access element from the array:
    
    //1st way:
        // let pages=["login","home","cart"];
        // console.log(pages[0])
        // console.log(pages[1])

    //2nd way: 
        //a) Traditional for loop:
            //let pages=["login","home","cart"];
            // for(let i=0;i<pages.length;i++)
            // {
            //     console.log(pages[i])
            // }
            //IMP: in the above for loop why we have used "let i=0" and not "const i=0" because i value is changing during i++ and const variable value should not change once declared 
        
        //b) for of loop: directly gets each element of array
            let pages=["login","home","cart"];    
            for(let ele of pages)
            {
                ele.toUpperCase();
                console.log(ele);
            }
            //in the above for of loop why we have used "let ele" and not "const ele" bcause const variable value cannot be changed onced assigned,
            //  it is mandatory(compuslory) to assign a value to a const variable at the time of declaration

        //c) for in: gets index of each element of the array
            // let pages=["login","home","cart"];
            // for(let index in pages)
            //     console.log(index); //op: 0 1 2

            
// let arr=[1,2]
// arr=[3,4]
// console.log(arr)//op: 3 4

// let i=0;
// let i=2;
// console.log(i)// op: error

// const name = "abhishek";
// name=name.toUpperCase();
// console.log(name);// op: error


// let name = "abhishek";
// name=name.toUpperCase();
// console.log(name);// op: ABHISHEK

// const name = "abhishek";
// name.toUpperCase();
// console.log(name);// op: abhishek

// let name = "abhishek";
// name.toUpperCase();
// console.log(name);// op: abhishek





