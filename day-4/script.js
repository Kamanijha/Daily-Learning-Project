
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0],fruits[1])  this is simple way to extract value from array

// use destructuring,
// const [first,second,third] =  fruits
// console.log(first,third)

// if array have not present multiple element default parameters
// const [first,second,third = "banana",fourth] = ["apple"]
// console.log(first,second,third,fourth)



// destructuring object
//  const person = { name: "Alice", age: 25, city: "Paris" };
//  console.log(person.name,person.age)
//  const{name,city} = person
//  console.log(name,city)



// inside the object write nested function  return value
// const person = {

//     name: "Alice",
//     age: 25,
//     city: "Paris",
//     hobbies: ["traviling", "panting"],
//     study:function () {
//         return function sayHi(){
//             return function hello() {
//                 return ["apple","banana"]
//             }
//         }
//     },
// };
// const {city:presentCity,hobbies:[first,second],study} = person
// console.log(presentCity,first,second,study()()()[0],study()()()[1])
// const [first,second] = person.study()()
// console.log(second)

 

// spread and rest oprator

// spread oprator = Expands arrays/objects into individual elements.
//                   Used for copying or combining arrays/objects.


// spread array element ko phalane ka kam kerta hai
// const array = [1,2,3]
// console.log(...array)


// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const combinArray = [...array1 , ...array2]
// console.log(combinArray)


// passing arguments to the function
// function sum(a,b,c,d,e){
//     return a+ b + c + d + e
// }

// const num = [1,2,3,5,6]
// console.log( sum(...num))

// SPREAD OPRATOR PRACTICS
// const array = [1,2,3,4]
// const array2 = [5,6,7,8]
// const newNum = 0
// const endNum = 9
// const combinArray = [newNum,...array,...array2,endNum]
// // CALCULATE THE DOUBLE OF ARRAY ELEMENT
// console.log(combinArray)
// combinArray.map((num)=>{
//     console.log(num *2)
// })

// // CALCULATE THE SUM OF ARRAY ELEMENT
// const sum = combinArray.reduce((accumlator,currentValue)=>{
//     return accumlator + currentValue
// },0)   // 0 is intial value
// console.log(sum)

// const numbers = [10, 15, 20, 25, 30, 35, 40];
// const evenSum = numbers.filter((num)=>{
//     return num % 2 === 0
// }).reduce((accumlator,currentValue)=>{
//     return accumlator + currentValue
// },0)
// console.log(evenSum)

// q 2.
// const scores1 = [78, 82, 90];
// const scores2 = [85, 88, 92];
// const scores3 = [80, 84, 86];
// const combinArray = [...scores1,...scores2,...scores3]
// const totalSum = combinArray.reduce((accu,curr)=>   accu + curr,0)
// const average = totalSum /combinArray.length
// console.log(average)

const strings = ["apple", "banana", "cherry", "date"];
const stringLength = strings.map((str)=>{ 
    return(str.length)
}).reduce((accu,curr)=>{
    return accu + curr
},0)
console.log(stringLength)
// rest oprator = Collects multiple elements into a single array.
// Used in function parameters or destructuring.






// Default Parameters in function
// function greet(name = "subham"){
//     return `hello ${name}`
// }
// console.log(greet())
// console.log(greet("ram"))



// function decliration 
// it can host and give ouput = 5
// console.log(sum(2,3))
// function sum(a,b){
//     return a+ b
// }

// function expression
// can not host and give error  Cannot access 'multiply' before initialization
// console.log(multiply(2,3))
// const multiply = function(c,d){
//     return c*d
// }

