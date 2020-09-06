var slider
function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  strokeWeight(5);
  stroke(0);
  fill(0);
  slider = createSprite(width/2,height/2,100,20)
}

function draw() {
  background(255)
  drawSprites();
}
function touchStarted(){
  console.log("start",mouseX) 
  return false;
}

function touchMoved(){
  //stroke(255, 0, 0);
  //line(touchX, touchY, ptouchX, ptouchY);
  
  console.log("touchmoved mouse",mouseX) 
  slider.x = mouseX
  //slider.y = mouseY
  return false;
}

function touchEnded(){
  //stroke(0, 0, 255);
  //line(touchX, touchY, ptouchX, ptouchY);
 
  console.log("touchEnded touch",touchX)
  console.log("touchend",mouseX)
  slider.x = mouseX
  //slider.y = mouseY
  return false;
}

