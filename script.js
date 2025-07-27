const sketchArea = document.querySelector("#sketchArea");

let currentMode = "normal";

// create a grid

createGrid(16);

function createGrid(x) {
  sketchArea.innerHTML = "";
  const cellSize = 900 / x;

  for (let i = 0; i < x * x; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    cell.addEventListener("mouseover", paintSquare);
    sketchArea.appendChild(cell);
  }
}

function paintSquare(e) {
  if (currentMode === "normal") {
    e.target.style.backgroundColor = "black";
  } else if (currentMode === "colourised") {
    e.target.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}

// Grid size based on user input

document.querySelector("#newGrid").addEventListener("click", () => {
  let x = prompt("Enter a valid number between 1 to 100");
  x = Number(x);

  if (x >= 1 && x <= 100 && Number.isInteger(Number(x))) {
    createGrid(x);
  } else {
    alert("Please enter a valid number 1 to 100");
  }
});

// reset button

document.querySelector("#reset").addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.style.backgroundColor = "";
  });
});

// normal button

document.querySelector("#normal").addEventListener("click", () => {
  currentMode = "normal";
});

// colourised button

document.querySelector("#colourised").addEventListener("click", () => {
  currentMode = "colourised";
});
