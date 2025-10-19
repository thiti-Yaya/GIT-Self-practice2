const aElement = document.querySelector("a");
aElement.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("visit link was cancle")
});

//when click submit buttom, prevent default behavior and validate form data
const submitButton = document.querySelector("input"[(type = "submit")]);
console.log(submitButton);

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  //validate data
  const inputElement = document.querySelector("input");
  inputElement.forEach((ele) => {
    const attr = ele.getAttribute("type");
    if (attr === "text") {
      if (ele.value.trim().length === 0) console.log("invalid data")
    }
  })
})
