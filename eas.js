const container = document.querySelector('#container');

var gridSize = 10; //side length
const containerSize = 500;

//size setup
container.style.height = `${containerSize}px`;
container.style.width = `${containerSize}px`;

//populate grid
function populate() {
    var pixelSize = containerSize/gridSize;
    for (let i=0; i<gridSize**2; i++) {
        let pixel = document.createElement("pixel");
        pixel.classList.add("pixel");
        pixel.style.height = `${pixelSize}px`;
        pixel.style.width = `${pixelSize}px`;
        container.appendChild(pixel);
        pixel.addEventListener('mouseover', () => {
            //pixel.style.backgroundColor = "black";
            if (pixel.classList.contains("fill1")) {
                pixel.classList.replace("fill1", "fill2");
            }
            if (pixel.classList.length = 1) {
                pixel.classList.add("fill1");
            }            
            
        });
    }
}

function clearSquares() {
    let squares = document.querySelectorAll(".pixel");
    squares.forEach(sq => sq.remove());
}

function clickedCreate() {
    let reply = prompt("How many squares wide do you want your new grid to be? (Max: 100)");
    while (reply>100 || reply<1) {
        reply = prompt("Please choose a number between 1 and 100.")
    }
    gridSize = reply;
    clearSquares();
    populate();
}

function clickedClear() {
    clearSquares();
    populate();
}

//btns
const createGrid = document.querySelector("#create");
createGrid.addEventListener("click", clickedCreate);
const clearGrid = document.querySelector("#clear");
clearGrid.addEventListener("click", clickedClear);

//fun hover effects
createGrid.addEventListener("mouseover", () => {
    createGrid.classList.add("btnhover");
});
createGrid.addEventListener("mouseout", () => {
    createGrid.classList.remove("btnhover");
});
clearGrid.addEventListener("mouseover", () => {
    clearGrid.classList.add("btnhover");
});
clearGrid.addEventListener("mouseout", () => {
    clearGrid.classList.remove("btnhover");
});

const h1 = document.querySelector('h1');
h1.addEventListener("mouseover", () => {
    h1.classList.add("h1hover");
});
h1.addEventListener("mouseout", () => {
    h1.classList.remove("h1hover");
});


populate()