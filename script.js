const ChangeBtn = document.getElementById("change");
ChangeBtn.addEventListener("click", () => {
  const Heading = document.getElementById("heading");
  Heading.innerHTML = "The text was changed";
});

const countDisplay = document.getElementById("count");
const IncreaseBtn = document.getElementById("increaseBtn");
const DecreaseBtn = document.getElementById("decreaseBtn");
const ResetBtn = document.getElementById("resetBtn");

// Default count
let count = 0;

// update display
function updateDisplay() {
  countDisplay.innerHTML = count;
}

// Increase
IncreaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// Decrease
DecreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

ResetBtn.addEventListener("click", () =>{
    count = 0;
    updateDisplay()
})

// Show and Hide 
ActionBtn = document.getElementById("action")
ActionBtn.addEventListener("click", ()=>{
    if(ActionBtn.innerHTML == "Show")
        return `Hide`
})





// // // QUESTIONS

// What is an event?

// Answer
//

// // What is an eventListener in javaScript?

//Answer
// An eventListener is a javaScipt code that waits for a particular event to happen to an HTML element.
