 //query div element with id "exampleElement"
const divElement = document.getElementById('exampleElement')  
 //div childNodes 
const divChildNodes = divElement.childNodes //return NodeList data type
console.log(`length: ${divElement.childNodes.length}`);
divChildNodes.forEach((child) => {
console.log(child.nodeName)
console.log(child.nodeType)
console.log(child.nodeValue)
})

// div children
const divChildren = divElement.children //return HTMLCollection data type
console.log(`length: ${divElement.children.length}`);
Array.from(divChildren).forEach((child) => {
    console.log(child.nodeName);
    console.log(child.nodeType);
    console.log(child.nodeValue);
})