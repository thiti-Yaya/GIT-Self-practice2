// document.addEventListener('DOMContentLoaded', () => {
// console.log('DOM is ready!')
// const heading = document.createElement('h2')
// heading.textContent = 'This was added when DOM was ready!'
// document.body.appendChild(heading)
// console.log('Heading added now.')
// })
// window.addEventListener('load', () => {
// console.log('All resources (images, CSS, scripts) are fully loaded!')
// console.log('Page is fully loaded')
// })

// const info = document.getElementById('info')
// // Window resize event
// window.addEventListener('resize', () => {
// info.textContent = `Window resized: ${window.innerWidth} x ${window.innerHeight}`
// })
// // Window scroll event
// window.addEventListener('scroll', () => {
// info.textContent = `Scrolled to Y: ${window.scrollY}`
// })

// const info = document.getElementById("info");
// info.addEventListener("mouseout", (event) => {
//   console.log("mouse out");
// });
// info.addEventListener("mouseover", (event) => {
//   console.log("mouse over");
// });
// window.addEventListener("mousemove", (event) => {
//   info.textContent = `Mouse at X: ${event.clientX}, Y: ${event.clientY}`;
// });

// const inputMessage = document.getElementById("message")
// inputMessage.addEventListener("keyup", (event) => {
//   if (event.key === "Enter") console.log(event.target.value)
// })

const message = document.querySelector('#message')
const display = document.querySelector('p')
message.addEventListener('input', function () {
display.textContent = message.value
})