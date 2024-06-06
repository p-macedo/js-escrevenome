function setup() {
  createCanvas(400,400);
  background(random(0,255),random(0,255),random(0,255));
}
function draw() {
    if (mouseIsPressed){
      fill(random(0,255),random(0,255),random(0,255));
      rect(mouseX,mouseY,20,20);
    }
}