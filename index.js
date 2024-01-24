var color = [
    "red",
    "green",
    "cyan",
    "black",
    "voilet",
    "blue",
    "yellow",
    "purple",
    "orange",
    "lightgreen",
    "lemon",
    "pink",
  ];
  const shapes = ['triangle', 'square', 'circle', 'rectangle', 'diamond'];

  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  };



const shape = document.getElementById("shape-change");
const cColor = document.getElementById("color-change");

shape.addEventListener("click",changeShape);
cColor.addEventListener("click",changeColor);

function changeColor(){
    const randomColor = color[getRandomIndex(color.length)];
    document.getElementById("circles").style.backgroundColor= randomColor;
};

function changeShape() {

 const randomShape = shapes[getRandomIndex(shapes.length)];
 const innerElement = document.querySelector("#circles .inner");
 innerElement.classList.remove(...shapes);
 
 innerElement.classList.add(randomShape);
  };


