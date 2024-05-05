const boxContainer = document.querySelector(".box-container");
let numOfBox = prompt("Enter number of boxes within 2 and 100");
const createGridBtn = document.querySelector("#createGridBtn");

createGridBtn.addEventListener("click", () => {
  numOfBox = prompt("Enter number of boxes within 2 and 100");
  main();
});

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
  if (numOfBox <= 100 && numOfBox >= 2) {
    createGrid(numOfBox);
  } else {
    alert("Number of boxes must be within 2 and 100");
  }

  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("click", (e) => toggleBoxColor(e.target));
  });
}

main();
