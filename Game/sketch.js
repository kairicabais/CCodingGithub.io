//basic catching object game: https://editor.p5js.org/kairicabais/sketches/wtq3zjXWB

var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;
var bg;  //for bg image


//sound

function preload(){
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

//the 3 screens start, gameplay, end
function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

//Start title screen
function startScreen(){
     //bg = loadImage('starry.jpeg');
		background(247, 172, 225)     //light pink bg
		fill(255, 250, 210)           //light yellow font
		textAlign(CENTER);            //text alignment to center
        textFont("Scope One");        //font style
        textSize(40);                 //main title size
		text('CATCH THE STARS', width / 2, height / 2)
        textSize(20);                 //small instruction font size
		text('press Space Bar to start!', width / 2, height / 2 + 20);
		reset();
}


//gameplay screen
function gameOn(){
  //bg = loadImage('starry.jpeg'); image background not possible
  background(247, 172, 225)         //same light pink bg color
  text("score = " + score, 30,20)
  textAlign(CENTER);
  
  //bg stars

  
  text('Use the Mouse Pointer to catch the falling stars in the basket',300,50);
  fill(255, 250, 210);
  ellipse(x,y,20,20)
  fill(255);
  rectMode(CENTER)
  rect(mouseX,height-10,50,30)
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=0.5
    score+= 1    //updates score collector on top left
  }
	if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
	x= random(20,width-20)
}



//game over screen
function endScreen(){
		background(135, 223, 234)
		textAlign(CENTER);
		text('GAME OVER', width / 2, height / 2)
  	text("SCORE = " + score, width / 2, height / 2 + 20)
		text('press SPACE BAR to play again', width / 2, height / 2 + 40);
}

function keyPressed(){
  if (key == ' '){ //this means space bar, since it is a space inside of the single quotes.
    aColor = "blue";
  }  
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}


//restart
function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
