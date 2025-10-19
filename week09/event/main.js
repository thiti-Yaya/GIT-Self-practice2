const whom = prompt("What is your name?", "typing your name")
const confirmYourname = confirm(`You are ${whom}`)
confirmYourname ? alert(`hello, ${whom}`) : alert(`hello, guest`)




const okButton = document.querySelector("div>button")
console.log(okButton);


//1. annonymous handler function with bubble event flow (default) 
okButton.addEventListener('click', ()=> {
    alert("button was clicked!")
})
//2. named function with bubble event flow (default)
function getTarget(e){
    alert (`${e.target.nodeName} was fired!`)
} 
function getMessage(){
    const yourMessage = prompt("What is your message","typing your message...")
    alert(yourMessage)
}
//3. add more than one handler functions
okButton.addEventListener("click", getTarget)
okButton.addEventListener("click", getTarget)
//4. remove handler function
okButton.removeEventListener("click", getTarget)






