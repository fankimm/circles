function setup(){
createCanvas(windowWidth,windowHeight)
background(0,0,0)
}

function draw(){

if (windowWidth<windowHeight){
backgroud(255,0,0)
} else {
background(0,255,0)
}

text(“W : “, 10,10)
text(“H : “, 10,20)
text(windowWidth,20,10)
text(windowHeight,20,20)

}
