const box = document.getElementById("box")
const buttons = document.getElementsByTagName("button")
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    //write code here.... (common code)
    const colorName = button.dataset.color
    box.style.backgroundColor = colorName
    box.textContent = colorName.toUpperCase()
  })
})
 