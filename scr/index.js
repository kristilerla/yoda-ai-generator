
  function displayPoem(response){
console.log("poem generated");

    new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:"",

});

  }


function generatePoem(event) {
    event.preventDefault();
}
let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "4ff060ct0o35c409303b648f04f0ab31";
let context = "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
let promt = `User instructions: generate a poem about ${instructionsInput.value}`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("generationg poem");
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);

axios.get(apiURL).then(displayPoem);

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

