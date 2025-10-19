// First-Class and Higher-Order Functions
const greet = (name, formatter) => formatter(name);
const shout = (text) => text.toUpperCase() + "!!!";
const whisper = (text) => text.toLowerCase() + "...";
const emoji = (text) => text + "❤️";
console.log(greet("Alice", shout)); // ALICE!!!
console.log(greet("Beam", whisper)); // beam...
console.log(greet("Amolnut", emoji)); // Amolnut❤️

// Declarative Code
const numbers = [1, 2, 3, 4, 5];
const doubleEvenNumbers = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);
console.log(doubleEvenNumbers); // [4, 8]

//Immutability
const number = [1, 2, 3, 4, 5];
const addOne = (x) => x + 1;
const isEven = (x) => x % 2 === 0;
const sum = (total, x) => total + x;
const incrementedNumbers = number.map(addOne);
const evenNumbers = incrementedNumbers.filter(isEven);
const total = evenNumbers.reduce(sum, 0);
console.log("Original numbers:", number); // Original numbers: [1, 2, 3, 4, 5]
console.log("Incremented numbers:", incrementedNumbers); // Incremented numbers: [2, 3, 4, 5, 6]
console.log("Even numbers:", evenNumbers); // Even numbers: [2, 4, 6]
console.log("Total of even numbers:", total); // Total of even numbers: 12
//compose function
//const result = numbers.map(addOne).filter(isEven).reduce(sum, 0)

// Pure Functions
//pure
const pureFunc = (a, b) => a * b;
console.log(pureFunc(2, 3)); // 6

//pure
const data = { value: 10 };
function pureFunc(arg) {
  let z = 2;
  arg = arg * z + 1;
  return arg;
}
console.log(pureFunc(datas.value)); // 21

//impure
let x = 10; //global
let y = 20;
function impureFunc(arg) {
  arg = arg + x * 2;
  return arg;
}
console.log(impureFunc(y)); //40

//impure
const data1 = { value: 10 };
function impureFunc2(arg) {
  let z = 2;
  arg.value = arg.value * z + 1;
  return arg.value;
}
console.log(impureFunc2(data1)); // 21
console.log(impureFunc2(data1)); // 43



//function composition
function getMaxLengthString(arrStrs) {
  return arrStrs.filter(
    (str) => str.length === Math.max(...arrStrs.map((str) => str.length))
  );
}
console.log(getMaxLengthString(["hi", "hello", "hello world", "HELLO WORLD"]));
// ['hello world', 'HELLO WORLD']



function a(){
    return "a"
}
function b(){
    return
}

function x(){
  function y() {}
}


//Function scope and Nested Functions
function getScore(x) {
  let mid = 40
  let final = 30 
  return mid + final + x 
}
const score = getScore(1)
console.log(score) //71

//Closures
const z = 1
function makeAdder(x) {
    console.log(x); //10
  //  console.log(y); //y is not defined
    console.log(z); //1
    return function doSomething(y) {
        return x + y + z
    }
    // return doSomething // return function
    // return doSomething() //return result of function
}    
const result = makeAdder(10)
console.log(typeof result) 
console.log(result (3)) // 14
console.log(add5(3)) // 3+5+1
console.log(add10(3))// 3+10+1







// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = [];

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  if (!quote) {
    console.log("It was null or Undefind");
    return;
  }

  if (
    typeof quote !== "object" ||
    !Number.isInteger(quote.id) ||
    !quote.content ||
    !quote.author
  ) {
    console.log("Some Thing went wrong");
    return;
  }

  quotes.push(quote);
  console.log("Add Quote Success");
  return;
  // TODO: Add the quote object to the quotes array
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  if (!id) {
    console.log("Id is Null");
    return;
  }
  const index = quotes.findIndex((quote) => quote.id === id);

  if (index !== -1) {
    quotes.splice(index, 1);
    console.log(`Remove ${id} Success`);
    return;
  } else {
    console.log(`Quote was not found id = ${id}`);
    return;
  }
  // TODO: Remove the quote object from the array using the given id
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  if (!id) {
    console.log("Id is Null");
    return;
  }
  if (!updatedQuote) {
    console.log("It was null or Undefind");
    return;
  }

  if (typeof updatedQuote !== "object") {
    console.log("It was not Object");
  }

  const index = quotes.findIndex((quote) => quote.id === id);

  quotes[index] = { ...quotes[index], ...updatedQuote };
  console.log(`Update Id ${id} -> Updatedata = `, updatedQuote);

  return;
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  return quotes;
  // TODO: Return the quotes array
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()

// TODO: Delete 1 quote using deleteQuote()

// TODO: Update 1 quote using updateQuote()

// TODO: Print all quotes using getAllQuotes()
// 6. Test your functions below

// Add 3 quotes

addQuote({ id: 1, content: "tse", author: "Steve Jobs" });

addQuote({ id: 2, content: "Test", author: "Yoda" });

addQuote({
  id: 3,

  content: "Simplicity is the ultimate sophistication.",

  author: "Leonardo da Vinci",
});

// Delete 1 quote

deleteQuote(10);

// Update 1 quote

updateQuote(1, { content: "Stay hungry. Stay foolish.", author: "Jobs" });

// Print all quotes

console.log(getAllQuotes());
