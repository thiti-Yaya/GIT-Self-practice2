// //localStorage อยู่ถาวร
let counter = localStorage.getItem("count");
console.log(counter);
// if (counter === null) localStorage.setItem("count", 1);
// else localStorage.setItem("count", ++counter);
alert(counter);
localStorage.removeItem("count")
localStorage.clear()

sessionStorage
let counter1 = sessionStorage.getItem("count");
console.log(counter1);
// if (counter === null) sessionStorage.setItem("count", 1);
// else localStorage.setItem("count", ++counter);
alert(counter1);
sessionStorage.removeItem("count")
sessionStorage.clear()
