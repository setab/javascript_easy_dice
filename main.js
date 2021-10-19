function roll() {
  results.innerHTML = "";
  const diceNumber = document.getElementById("dice-count").value;
  const diceType = document.getElementById("type").value;
  const res = document.getElementById("results");

  for (let i = 0; i < diceNumber; i++) {
    var getRandom = Math.floor(Math.random() * diceType + 1);

    var newDiv = document.createElement("div");
    res.appendChild(newDiv);
    newDiv.innerText = getRandom;
  }
}
