
let inputBox = document.getElementById("inputBox")

const button = document.querySelectorAll("button")
const buttons = Array.from(button)
let string = ''
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1)
            inputBox.value = string
        }else if(e.target.innerHTML === 'Ac'){
            string = ''
            inputBox.value = string
        }else if(e.target.innerHTML === '='){
            string = eval(string)
            inputBox.value = string
        }
        
        else {
            string += e.target.innerHTML
            inputBox.value = string
        }

    })
})