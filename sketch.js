var r = 30

function setup() {
  // put setup code here
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

function mouseClicked(){
  mkCircle()
}

function touchStarted(){
  mkCircle()
}
