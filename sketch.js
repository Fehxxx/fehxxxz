function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke("rgb(216,58,58)");
    fill("black");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  