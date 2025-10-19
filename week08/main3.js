// 2. insert <li class="vegan">Cabbage Soup</li> Before <li class="meat">Beef Soup</li>

//1. find parent element
const ulParent = document.getElementById("soup")
console.log(ulParent)

//2. create new element node
const newLiElement = document.createElement("li")
newLiElement.textContent = "Cabbage Soup"
newLiElement.setAttribute("class", "vegan")
//3. find reference node
let beefElement = null
const liChildren = ulParent.children
Array.from(liChildren).forEach((ele) => {
  if (ele.textContent.trim() === "Beef Soup") beefElement = ele
})
//4. insertBefore
ulParent.insertBefore(newLiElement, beefElement)