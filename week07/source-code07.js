// const html1=document.documentElement
// const firstNode=document.firstChild
// const firstElementChildNode=document.firstElementChildNode
// const lastNode= document.lastChild
// const lastElementChildNode=document.lastElementChild

// console.log(document);
// console.log(html1);
// console.log(firstNode);
// console.log(firstElementChildNode);
// console.log(lastNode);
// console.log(lastElementChildNode);



// console.log(document.body)
// console.log(document.body.nodeName)
// console.log(document.body.nodeType)
// console.log(document.body.nodeValue)

// if (document.body.nodeType === Node.ELEMENT_NODE)
//   console.log(`body is an element node type`)
// if (document.body.nodeType === Node.ATTRIBUTE_NODE)
//   console.log(`body is an attribute node type`)
// if (document.body.nodeType === Node.TEXT_NODE)
//   console.log(`body is a text node type`)



// //query div element with id "exampleElement"
// const divElement = document.getElementById('exampleElement')
// // div childNodes 
// const divChildNodes = divElement.childNodes //return NodeList data type
// console.log(`length: ${divElement.childNodes.length}`);
// divChildNodes.forEach((child) => {
// console.log(child.nodeName)
// console.log(child.nodeType)
// console.log(child.nodeValue)
// })

// //div children
// const divChildren = divElement.children //return HTMLCollection data type
// console.log(`length: ${divElement.children.length}`);
// Array.from(divChildren).forEach((child) => {
//     console.log(child.nodeName);
//     console.log(child.nodeType);
//     console.log(child.nodeValue);
// })


// const divElement = document.getElementById("subject");
// const pElement = document.createElement("p");
// divElement.appendChild(pElement);


// //create <p>INT141</p> as a child of <div id = "subject"
// //1.create <p> element
// const divElement = document.getElementById("subject");
// const pElement = document.createElement("p");

// //1.5 set attribute
// // const idArr = document.createAttribute("id")
// // idArr.value = "int141"
// // pElement.setAttributeNode(idArr)
// pElement.setAttribute("id", "int141")
// pElement.setAttribute("style", "color:red")
// pElement.setAttribute("name", "core")

// //2. create text node then 3. append to <p> child
// const pText=document.createTextNode('INT141')
// pElement.appendChild(pText)
// //pElement.textContent = "INT141"

// //4. append <p> with text node to div element 
// divElement.appendChild(pElement);

// //get attribute value of 'id'
// console.log(pElement.getAttribute("id")); //INT141
// console.log(pElement.attributes[0]); //id="int141"
// console.log(pElement.attributes[0].ownerElement); //<p id="int141">INT141</p>


// const pAttributes=pElement.attributes //get all attributes
// for(let i=0; i<pAttributes.length; i++) {
//     const name = pAttributes[i].name //get attribute name
//     const value = pAttributes[i].value //get attribute value
//     if (pAttributes[i].name === "id") console.log(name, value)
    
// }

// let el = document.getElementById("demo")
// console.log(el.innerHTML)

// console.log(el.innerText)

// console.log(el.textContent)

// const divElement=document.createElement("p")
// // divElement.innerHTML = "<i>Sample Content</i>"
// // pElement.textContent = "<i>Sample Content</i>"
// pElement.innerText = "<i>Sample Content</i>"
// document.body.appendChild(pElement)

let drink = document.getElementById("drink")
const allDrinks = drink.children
Array.from(allDrinks).forEach((drink) => console.log(drink))

let teaDrink = allDrinks[1]
console.log(teaDrink);

console.log(teaDrink.previousElementSibling);
console.log(teaDrink.nextElementSibling);
console.log(teaDrink.parentElement);
