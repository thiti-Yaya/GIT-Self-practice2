//create <p id=''int141>INT141</p> as a child of <div id = "subject">
// //1.create <p> element
const divElement = document.getElementById("subject");
const pElement = document.createElement("p");
// //1.5 set attribute
// // const idArr = document.createAttribute("id")
// // idArr.value = "int141"
// // pElement.setAttributeNode(idArr)
// pElement.setAttribute("id", "int141")
// pElement.setAttribute("style", "color:red")
// pElement.setAttribute("name", "core")

// //2. create text node then 3. append to <p> child
const pText=document.createTextNode('INT141')
pElement.appendChild(pText)
// pElement.textContent = "INT141"

// //4. append <p> with text node to div element 
divElement.appendChild(pElement);

// //get attribute value of 'id'
// console.log(pElement.getAttribute("id")); //INT141
// console.log(pElement.attributes[0]); //id="int141"
// console.log(pElement.attributes[0].ownerElement); //<p id="int141">INT141</p>
