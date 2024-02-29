const setOfColors = [
  `#e9ecef`,
  `#868e96`,
  `#ff8787`,
  `#fa5252`,
  `#e64980`,
  `#9c36b5`,
];

document.querySelector(".color").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * setOfColors.length);

  document.body.style.backgroundColor = setOfColors[randomIndex];
  console.log(setOfColors[randomIndex]);

  const textColors = (document.querySelector(`.textColors`).textContent =
    setOfColors[randomIndex]);
  console.log(textColors);
});
