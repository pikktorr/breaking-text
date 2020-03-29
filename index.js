const textInput = document.querySelector("#textarea");
// const output = document.querySelector(".output-paragraph");
const button = document.querySelector("#button");
const numInput = document.querySelector("#number");
let text;
let splitText;
let counter = 0;
let sentence = "";

numInput.placeholder = "Enter number";

const textValue = () => {
  text = textInput.value;
  splitText = text.split(/\s+/g).map(word => word + " ");
  //REGEX   /\s/g  Matches any whitespace character (spaces, tabs, line breaks).
  // /\s+/g Matches 1 or more of the preceding token.
  // console.log("value text:", text);
};

const clearText = () => {
  textInput.value = "";
  sentence = "";
  counter = 0;
};

const textLayout = () => {
  splitText.map(word => {
    counter += word.length;
    if (counter > numInput.value) {
      counter = word.length;
      sentence += "\n" + word;
    } else {
      sentence += word;
    }
    return sentence;
  });
};

const formatText = () => {
  textInput.value = sentence;
  location.reload();
};

button.addEventListener("click", () => {
  textValue();
  clearText();
  textLayout();
  formatText();
});
