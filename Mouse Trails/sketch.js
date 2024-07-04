//This interactive artwork creates dots ranging of different sizes depending on speed of mouse movement. Color used is just opacity.
// p5.js link: https://editor.p5js.org/kairicabais/full/z7jVk33X0

//Variables
let drops = []; //drops need an empty container
let loading = true; //not used

function setup() {
  let m_ = min(windowWidth, windowHeight);
  let w, h;
  if (windowWidth < windowHeight) {
    w = 600;
    h = (600 * windowHeight) / windowWidth;
  } else {
    w = (600 * windowWidth) / windowHeight;
    h = 600;
  }
  createCanvas(w, h).parent("canvas-container");
  xoff = 0;
  yoff = 0;
  zoff = 0;
  pixelDensity(4); //high definition rendering
  rectMode(CENTER);
  imageMode(CENTER);
}

//track previous mouse position to detect movement
let panX =-1;
let panY =-1;

function draw() {
  
  background(255); //white background color
  translate(width/2, height/2); //translate the origin to the center of the canvas
  noFill();
  stroke(100); //stroke color.

  //displays the last 500 drops stored in the drops array
  let s = drops.length - 500;
  if (s < 0) s = 0;
  for (let i = s; i < drops.length; i++) {
    drops[i].show();
  }

  //remove the oldest drop if the array length exceeds 500
  if (drops.length > 500) {
    drops.splice(0, 1);
  }
  //add a new drop at the mouse position if the mouse has moved more than 2 pixels.
  if(panX!=1){
    let d = dist(mouseX,mouseY,panX,panY);
    if(d>2){
      addDrop(mouseX - width / 2, mouseY - height / 2, d, random(200, 255));
    }
  }
  //update current mouse position using panX and panY
  panX = mouseX;
  panY = mouseY;
}

// getTextCordinates(txt, x, y, s, t = 4): Function to get the bounding box coordinates of a text rendered on a new TRANSPARENT canvas (cnv). 'cnv' is a p5.js graphics object, which allows off-screen rendering.
function getTextCordinates(txt,x,y,s,t=4){
  cnv.clear(); //need to clear new canvas
  cnv.textAlign(CENTER,CENTER);
  cnv.fill(0);
  cnv.noStroke();
  cnv.textSize(s);
 
  cnv.text(txt,cnv.width/2,cnv.height/2); // position ttext in center of canvas
  cnv.loadPixels(); // load the pixel data of the cnv graphics object into an array called 'cnv.pixels'
  
// to access customizing specific pixels in the 'cnv.pixels' array use index variable. This contols the minimum and maximum coordinates of the non-transparent pixels in the text.
  let index;
  let x_ = {mi:1000000,ma:-1000000};
  let y_ = {mi:1000000,ma:-1000000};
  
  for(let x =0;x<cnv.width;x++){
    for(let y=0;y<cnv.height;y++){
      
// each pixel has 4 values (R, G, B, Alpha OPACITY), so the index for pixel (x, y) is (x + y * cnv.width) * 4.
      index = (x + y * cnv.width) * 4;
      
//checks if the alpha value (transparency) of the pixel is greater than 0, meaning the pixel is not fully transparent. These coordinates update and draw the dots (text) at the center of an off-screen canvas, changing through each pixel to find the bounding box of the text by checking the non-transparent pixels. This gives the melting effect. 
      if(cnv.pixels[index+3]>0){
        if(x<x_.mi) x_.mi=x;
        if(x>x_.ma) x_.ma=x;
        if(y<y_.mi) y_.mi=y;
        if(y>y_.ma) y_.ma=y;
      }
    }
  }
  
//declare w and h variables 
  let w = x_.ma-x_.mi;
  let h = y_.ma-y_.mi;
  cnv.noFill(); //no color given to 'cnv' objects
  cnv.stroke(0); //no stroke
  cnv.rect(x_.mi,y_.mi,w,h); //redefine the 'cnv' bounding box around the dots(text) on the 'cnv' using the calculated dimensions and coordinates.
}

function mousePressed() {
  //when mouse is left-clicked, new drops are added. 100 is the set radius.random(255) is a random color value for the drop. 
  addDrop(mouseX - width / 2, mouseY - height / 2, 100, random(200, 255));
}

//function of the new drops added, 'x,y' are the coordinates of the drop, 'r' is the radius of the drop, 'col' is the color of the drop.
function addDrop(x, y, r, col) {
  let d = new Drop(x, y, r, col);
  
//loops through all existing drops and call a method (marble) on them, passing the new drop, which handles dots collision detection.
  for (let other of drops) {
    other.marble(d);
  }
  drops.push(d);
}

//controls when window is resized
function windowResized() {
  let m_ = min(windowWidth, windowHeight);
  let w, h;
  if (windowWidth < windowHeight) {
    w = 600;
    h = (600 * windowHeight) / windowWidth;
  } else {
    w = (600 * windowWidth) / windowHeight;
    h = 600;
  }
  resizeCanvas(w, h);
}
