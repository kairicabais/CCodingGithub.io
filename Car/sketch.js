//p5.js link= https://editor.p5js.org/kairicabais/sketches/G__qkMgur

//car image on top of background image
let car
let bg

function preload() {
  bg = createImg("assets/road.png") //assets library for road and car image
  car = createImg("assets/car.png")  
}


function setup() {
  createCanvas(600, 400);  
}

function draw() {
  background(220);
   car.position(60,100)
   car.size(600,300)
  
   bg.position(0,0) //position on canvas
   bg.size(700,400) //change background image size
}
