const okButton = document.querySelector("div>button");

okButton.addEventListener(
  "click",
  (e) => {
    console.log(`event.target: ${e.targer}`);
    console.log(`event.currentTarget: ${e.currentTarger}`);
    console.log(`event.eventPhase: ${e.eventPhase}`);
    console.log(`event.Type: ${e.Tpye}`);
    console.log("Button was clicked!");
  },
  true
);
const divElement = document.querySelector("div");
divElement.addEventListener(
  "click",
  (event) => {
    console.log(`event.target: ${event.targer}`);
    console.log(`event.currentTarget: ${event.currentTarger}`);
    console.log(`event.eventPhase: ${event.eventPhase}`);
    console.log(`event.Type: ${event.Tpye}`);
    console.log("Div element eas clicked!");
  },
  true
);

const bodyElement = document.body;
bodyElement.addEventListener(
  "click",
  (event) => {
    console.log(`event.target: ${event.target}`);
    console.log(`event.currentTarget: ${event.currentTarger}`);
    console.log(`event.eventPhase: ${event.eventPhase}`);
    console.log(`event.Type: ${event.Tpye}`);
    console.log("Body element was clicked");
  },
  true
);
