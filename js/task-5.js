function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const textColor = document.querySelector(".color");
const buttonColor = document.querySelector("button");
buttonColor.addEventListener('click', () => {
  const random = getRandomHexColor();
  document.body.style.backgroundColor = random;
  textColor.textContent = random;
});