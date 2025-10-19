
  /* <ul id="soup">
<li class="meat">Spicy Bacon-Corn Soup</li>
<!-- 1. remove Vegetable Soup -->
<li class="vegan">Vegetable Soup</li>
<!-- 2. insertBefore -->
<!-- <li class="vegan">Cabbage Soup</li> -->
<!-- 3. replace Beef Soup with Pork Soup-->
<li class="meat">Beef Soup</li>
<li class="vegan">Coconut Soup</li>
</ul> */


// 1. remove Vegetable Soup
//1. find parent element
const ulParent = document.getElementById("soup");
console.log(ulParent);
//2. get its children
const ulChildren = ulParent.children;
let vegetElement = null;
//3. find element node that satifies condition "Vegetable Soup"
Array.from(ulChildren).forEach((liEle) => {
  if (liEle.textContent.trim() === "Vegetable Soup") vegetElement = liEle;
});
//4. remove element 3.
ulParent.removeChild(vegetElement);