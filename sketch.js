
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
