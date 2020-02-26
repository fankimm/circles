var r = 30

function setup() {
  smooth()
  // put setup code here
  console.log("start")
  let density = displayDensity();
  pixelDensity(density);
  createCanvas (windowWidth, windowHeight)
  background(255)
  noStroke()

  mkCircle()
}

function mkCircle(){
  for (var i = 0; i<100; i++){
    for (var j = 0; j<100; j++){
      fill(random(0,255),random(0,255),random(0,255))
      circle(i*r, j*r, r)
    }
  }
}
function touchMoved(){
  circle(mouseX, mouseY, r*2)
  return false
}

function touchStarted(){
  console.log("touched")
  console.log(touches[0], touches[1])
  mkCircle()
}
