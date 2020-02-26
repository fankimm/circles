function setup(){
createCanvas(displayWidth,displayHeight)
background(0,0,0)
}

function draw(){

if (displayWidth<displayHeight){
backgroud(255,0,0)
} else {
background(0,255,0)
}

text(“W : “, 10,10)
text(“H : “, 10,20)
text(displayWidth,20,10)
text(displayHeight,20,20)

}
