// ADD CONSTS AND EVENT LISTENER
// BOTH QUERYSELECTORS ARE TARGETING ELEMENTS FROM THE HTML Document
// INPUT IS REF THE TEXT BOX THAT THE USER WILL ENTER THE Data INTO
// GENERATE IS AN ID FOR THE BUTTON 'GENERATE'
// THE addEventListener WILL 'ONCLICK' GENERATE THE 'CREATEDIV'(WHICH IS THE FUNCTION NAME)

const input = document.querySelector("input");
const generate = document.querySelector("#generate");
generate.addEventListener("click", createDiv);
// ======================================================

// CREATE A FUNCTION THAT WILL GENERATE HEXA NUMBERS
// ESTABLISH RELEVANT VARIABLES INSIDE THE FUNCTION
// CREATE FOR LOOP THAT WILL RUN FOR THE RANDONHEX LENGTH
// CREATE THE RANDOMHEX EQUATION
// SLICE IS USED TO RETURN THE RELEVANT AMOUNT OF RANDOM NUMBERS USING REPSECTIVE INDEX POSITIONING

function randomHexaGenerator() {
  let randomHex = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < randomHex.length; i++) {
    colorHex += randomHex[Math.floor(Math.random() * randomHex.length)];
  }
  return colorHex.slice(0, 9);
}

console.log(randomHexaGenerator());
// ============================================

// CREATE A FUNCTION THAT WILL GENERATE DIVS
// WRAPPER IS THE CLASS NAME OF THE HTML ELEMENT THAT WILL BE CREATED
// CREATE FOR LOOP FOR THE NEW DIVS
// createElement CALLED 'DIV' AND ASSIGN A CLASS CALLED 'NEW-DIV'. THIS IS THE SAME PROCESS AS CREATING CLASSES IN HTML
// createElement CALLED BUTTON

function createDiv() {
  const wrapper = document.querySelector(".wrapper");

  if (input.value < 1 || input.value > 10) {
    alert("Min value is 1 and Max value is 10");
  }

  for (let i = 0; i < input.value; i++) {
    const hexColor = randomHexaGenerator();
    const newHexColor = hexColor;

    let box = document.createElement("div");
    box.setAttribute("class", "new-div");

    const copyButton = document.createElement("button");
    copyButton.setAttribute("class", "copy-button");
    copyButton.textContent = "Copy";
    copyButton.addEventListener("click", copyD);

    // CREATE A SPAN ELEMENT SO THAT WE CAN PUT THE randomHexaGenerator TEXT INSIDE
    // ATTACH THE SPAN TO THE BOX THAT WILL ALSO HOLD THE TEXT CONTENT

    const createSpan = document.createElement("span");
    createSpan.textContent = `${randomHexaGenerator()}`;
    box.appendChild(createSpan);

    box.style.background = `${randomHexaGenerator()}`;

    wrapper.appendChild(box);

    box.appendChild(copyButton);
  }
}
const reset = document.querySelector("#reset");

// ====================================================

function copyD() {
  const copiedSpan = this.parentNode.querySelector("span");

  try {
    var range = document.createRange();
    range.selectNodeContents(copiedSpan);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  } catch (err) {
    console.log(err);
  }
  document.execCommand("copy");
}

// ================================================

// CREATE A DELETE FUNCTION
// ASSIGN THE '.NEW-DIV' (WHICH IS GENERATED EVERYTIME FROM THE CREATE DIV FUCNTION) TO THE NEW CONST 'REMOVE'

function deleteDivs() {
  const remove = document.querySelectorAll(".new-div");
  input.value = "";

  remove.forEach(element => {
    element.remove();
  });
}
reset.addEventListener("click", deleteDivs);
