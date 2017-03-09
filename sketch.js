var a = 50;
var b = 50;
var newWidth = 100;
var newHeight = 100;

//setup function executes once

function setup(){
    createCanvas(600,400);
    background(50);
}
//draw functions loops forever
function draw(){
    //background(50);
    if(mouseIsPressed){
        noStroke();
    fill(150,0,255,50);
    ellipse(mouseX,mouseY,newWidth,newHeight);
    }
}