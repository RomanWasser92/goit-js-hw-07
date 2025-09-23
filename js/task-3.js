

const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleInput);
function handleInput(event) {
  const inputValue = event.target.value.trim();

  spanEl.textContent = inputValue === "" ? "Anonymous" : inputValue;
}