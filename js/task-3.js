const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
    const trimValue = event.currentTarget.value.trim();
    output.textContent = trimValue === "" ? "Anonymous" : trimValue;
});