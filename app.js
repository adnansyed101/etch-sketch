const boxContainer = document.querySelector(".box-container");

function main(blockNum) {
  const flexBasis = 100 / blockNum;
  for (let i = 1; i <= blockNum ** 2; i++) {
    const box = document.createElement("div");
    box.classList = "box";
    boxContainer.appendChild(box);
    box.style.flexBasis = `${flexBasis}%`;
  }
}

main(16);
