
function setup() {
  // put setup code here
  let density = displayDensity();
  pixelDensity(density);
 
  noStroke()

createCanvas(windowWidth, windowHeight)

}

function draw(){

  
  if(windowWidth<windowHeight){

    background(255,0,0)
  } else {
resizeCanvas(windowWidth,windowHeight)
    background(0,255,0)
  }

  fill(0)
  text("W : " , 10,10)
  text("H : " , 10,20)
text("X : " , 10,30)
text("Y : ", 10,40)
  text(windowWidth, 30, 10)
  text(windowHeight, 30, 20)
text(touches[0].x, 30,30)
text(touches[0].y, 30,40)

}
function windowResized(){
resizeCanvas(windowWidth,windowHeight)
}

function touchMoved(){

  return false
}
