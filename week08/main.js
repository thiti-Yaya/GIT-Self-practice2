//1.query an element node that has id "soup
//2.query an element nodes that have class "vegan"
//3.query any element node that have class "meat"

// document.getElementById(idValue) //return the first object with ID value
// document.querySelector(cssSelector) //return the first element that matches selector
// document.querySelectorAll(cssSelector) //return all element that matches selector (NodeList - Array like )



// อาจารย์อธิบายความต่าง ข้อ 1.query an element node that has id "soup
const soupIdElement = document.getElementById("soup");
console.log(soupIdElement) //<ul id="soup">

const soupSelectorElement = document.querySelector("#soup")
console.log(soupSelectorElement) //<ul id="soup">

//get NodeList collection
const soupSelectorAllElement = document.querySelectorAll("#soup")
console.log(soupSelectorAllElement) //NodeList [ ul#soup ]
console.log(soupSelectorAllElement.length) // 1
console.log(soupSelectorAllElement[0]) // <ul id="soup">
soupSelectorAllElement.forEach((ele) => console.log(ele) // <ul id="soup">
)

//2.query an element nodes that have class "soup"
const soupElements = document.querySelectorAll(".Vegun")
console.log(veganElements) //NodeList(3) [ li.vegan, livegan, li.vegan ]

//3.query any element node that have class "meat"
const meatElements = document.querySelectorAll(".meat")
console.log(meatElements) //NodeList(4) [ li.meat, li.meat, li.meat ]

//4.
const firstVeganElement = document.querySelector("Vegan")
console.log(firstVeganElement) // <li class="Vegan"> Vegetable Rolls</li>

//5.
const firstMeatElement = document.querySelector(".meat")
console.log(firstMeatElement) //<li class="meat">Chicken Wings</li>


//ต้องการเข้าถึงแต่ละ node ใน class meat
let beefSoupEleMent
meatElements.forEach((ele)=> {
    const meatElements = ele
    //find text value equals to "Beef Soup" <li class="meat">Beef Soup</li> and store variable
    if (meatElements.textContent.trim().includes === ("Beef Soup")) {
    beefSoupElement = meatElements
    console.log(beefSoupEleMent)
  }
    console.log(meatElements)
})

//traverse all children node of <ul id="appetizer"> by using sibling relationship
{
    /* <ul id="appetizer">
        <li class="vegan">Vegetable Rolls</li>
        <li class="meat">Chicken Wings</li>
        <li class="meat">Tuna Sandwich</li>
      </ul> */
}
const firstUlElement = document.getElementById("appetizer") //<ul id="appetizer">
const firstLiElement = document.querySelector("ul#appetizer>li.vegan") //  <li class="vegan">Vegetable Rolls</li>
console.log(firstLiElement)

//visit all nodes siblings under <ul id="appetizer">
let currentNode = firstLiElement
while (currentNode != null) {
  console.log(currentNode)
  currentNode = currentNode.nextElementSibling
}
 