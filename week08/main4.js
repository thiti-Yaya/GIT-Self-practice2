// 3. replace  Beef Soup with Pork Soup
//1. find parent element
const ulParent = document.getElementById("soup")
console.log(ulParent)

//2. create new element node
const newLiElement = document.createElement("li")
newLiElement.textContent = "Pork Soup"
newLiElement.setAttribute("class", "meat")
//3. find reference node
let beefElement = null
const liChildren = ulParent.children
Array.from(liChildren).forEach((ele) => {
  if (ele.textContent.trim() === "Beef Soup") beefElement = ele
})
//4. replace
ulParent.replaceChild(newLiElement, beefElement)