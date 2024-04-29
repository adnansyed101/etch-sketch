const boxContainer = document.querySelector(".box-container");

function createGrid(blockNum) {
  boxContainer.innerHTML = "";
  for (let i = 0; i < blockNum; i++) {
    const rowDiv = document.createElement("div");
    for (let j = 0; j < blockNum; j++) {
      const box = document.createElement("div");
      box.classList = "box";
      rowDiv.append(box);
    }
    boxContainer.appendChild(rowDiv);
  }
}

function toggleBoxColor(box) {
  box.classList.toggle("blackBox");
}

function main() {
  createGrid(16);

  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("click", (e) => toggleBoxColor(e.target));
  });
}

main();
