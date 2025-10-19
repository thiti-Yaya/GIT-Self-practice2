//getElementsByName - name attributes (NodeList)
const nameAttrElements = document.getElementsByName("fname")
console.log(nameAttrElements) //NodeList [ input#fname, input#fullname ]
//NodeList implements forEach, not other array function
nameAttrElements.forEach((ele) => console.log(ele))


//getElementsByTagName - tag name (HTMLCollection)
const liElements = document.getElementsByTagName("li")
console.log(liElements) //HTMLCollection { 0: li.vegan, 1: li.meat, 2: li.meat, 3: li.meat, 4: li.vegan, 5: li.meat, 6: li.vegan, length: 7 }
//HTMLCollection does not implement forEach, you must convert to array before you use array functions
// liElements.forEach((ele) => console.log(ele)) //error:liElements.forEach is not a function
//using Array.from to convert HTMLCollection to array
const liElementsArray = Array.from(liElements)
liElementsArray.forEach((ele) => console.log(ele))

//getElementsByClassName - class name (HTMLCollection)
const veganClassElements = document.getElementsByClassName("vegan")
console.log(veganClassElements) //HTMLCollection { 0: li.vegan, 1: li.vegan, 2: li.vegan, length: 3 }

//Single Node - getElementById, querySelector
//Collection nodes (Array-like) (length, index) (NodeList|HTMLCollection)
// - querySelectorAll, getElementsByName, getElementsByTagName, getElementsByClassName
 