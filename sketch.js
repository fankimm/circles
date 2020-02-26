
function setup() {
  // put setup code here
  let density = displayDensity();
  pixelDensity(density);
  createCanvas (displayWidth, displayHeight)
  noStroke()

}

function draw(){
  if(displayWidth<displayHeight){
    background(255,0,0)
  } else {
    background(0,255,0)
  }

  fill(0)
  text("W : " , 10,10)
  text("H : " , 10,20)
  text(windowWidth, 30, 10)
  text(windowHeight, 30, 20)

}


function touchMoved(){

  return false
}
