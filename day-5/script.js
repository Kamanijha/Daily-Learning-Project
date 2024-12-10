


// Asynchronous Programming  

//  synchronous Programming 

// high order function  == a function takes argument as function is called high order function and return as a function


// promise
// then and catch method

// callback hell

// function task1(callback) {
//     setTimeout(() => {
//         console.log("task1 is completed")

//     }, 1000);
// }
// function task2(callback) {
//     setTimeout(() => {
//         console.log("task2 is completed")

//     }, 2000);
// }
// function task3(callback) {
//     setTimeout(() => {
//         console.log("task3 is completed")

//     }, 3000);
// }
// function task4(callback) {
//     setTimeout(() => {
//         console.log("task4 is completed")

//     }, 1500);
// }

// console.log("all task is completed")
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("completde")
//             })
//         })
//     })
// })


function task1() {
    return  new Promise((reslove)=>{
        setTimeout(() => {
            console.log("task1 is completed")
            reslove()
        }, 1000);

    })
}


function task2() {
    return  new Promise((reslove)=>{
        setTimeout(() => {
            console.log("task2 is completed")
            reslove()
        }, 2000);

    })
}

function task3() {
    return  new Promise((reslove)=>{
        setTimeout(() => {
            console.log("task3 is completed")
            reslove()
        }, 3000);

    })
}

function task4() {
    return  new Promise((reslove)=>{
        setTimeout(() => {
            console.log("task4 is completed")
            reslove()
        }, 1500);

    })
}

console.log("all task is completed")
task1()
.then(()=>task2())
.then(()=>task3())
.then(()=>task4())
.then(()=>{
    console.log("task is completed")
})


