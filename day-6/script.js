
// async await 
// fatch api using jsonplaceholder
// async function getData() {
//     setTimeout(() => {
//         console.log("i am happy to learn cs course")
//     }, 1000);
// }
// getData()




/// using await async function make sync that  means  when not response come then 
// async function getData() {
//     // get request -> async
//      let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     // parse json -> async
//     let data = await response.json()
//      console.log(data)
// } 

// getData()



// fetch api post reuest
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts"

const option = {
    method: "POST",
    body: JSON.stringify({ username: "kamani jha" }),
    headers: myHeaders, 
}

// get request which is async 
async function getData(){
    const url = "https://dummyjson.com/posts"
    const response = await fetch(url)
    const data = await response.json()
    console.log(`get data response ` ,data)
}

// post request async 
async function postData(){
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'happy journy.',
          userId: 5,
          /* other post data */
        })
      })
    const data = await response.json()
    console.log(`post data response  ` , data)
}

async function processData(){
     await postData()
     await getData()

}
processData()