var isMobile

function setup() {
// put setup code here
  if(displayWidth>displayHeight){
    isMobile = false
  }

let density = displayDensity();
pixelDensity(density);

noStroke()

createCanvas(windowWidth, windowHeight)

}

function draw(){


if(windowWidth<windowHeight){

//background(255,0,0)
} else {
resizeCanvas(windowWidth,windowHeight)
//background(0,255,0)
}




}
function windowResized(){
resizeCanvas(windowWidth,windowHeight)
}
function touchStarted(){

if(isMobile){
    myConsole()
  drawCircle()

  }

}
function touchMoved(){
if(isMobile){
    myConsole()
  drawCircle()

  }

return false
}
function touchEnded(){
  if(isMobile){
    myConsole()
  drawCircle()

  }


}

function myConsole(){
// background(255)
  fill(255)
  rect(0,0,50,50)
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

function myConsoleM(){
    fill(255)
  rect(0,0,50,50)
fill(0)
text("W : " , 10,10)
text("H : " , 10,20)
text("X : " , 10,30)
text("Y : ", 10,40)
text(windowWidth, 30, 10)
text(windowHeight, 30, 20)
text(mouseX, 30,30)
text(mouseY, 30,40)

}

function drawCircle(){
  fill(random(0,255),random(0,255),random(0,255))
  circle(touches[0].x,touches[0].y,30)
}
function drawCircleM(){
  fill(random(0,255),random(0,255),random(0,255))
  circle(mouseX,mouseY,30)
}

function mousePressed(){
  if(!isMobile){
    myConsoleM()
    drawCircleM()
  }
}
function mouseDragged(){
    if(!isMobile){
    myConsoleM()
    drawCircleM()
  }

}
function mouseReleased(){
    if(!isMobile){
    myConsoleM()
    drawCircleM()
  }

}
