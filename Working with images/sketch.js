// for work with images p5.js live link: https://editor.p5js.org/kairicabais/sketches/WYRl838eM

let bg;
 //for image background
let img, maskImage; //for mask
let whichFilter = 'dilate'; //filter makes the lights 

//if image is struggling to load, experiment with file path. Remove your images from assets folder on p5.js to just leave them in upload files will work better most of the time.
//for github I arranged my images in assets folder but on p5.js I removed my assets folder.
function preload(){
  img= loadImage('assets/garden.png');
  
  maskImage= loadImage('assets/mask.png');
}



function setup() {
   bg = loadImage('assets/lavenderHaze.png');
  createCanvas(906, 690);
}


function draw(){
  background(bg);         //sets image as background
  
  img.mask(maskImage);    //sets image inside mask
  image(img, 0,0);
  
  
//this function is changeable to any filter jiust replace dilate to blur/ invert etc.
  if (whichFilter === 'dilate') {
    filter(DILATE);
  }
}






