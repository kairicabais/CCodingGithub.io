////rotating text typography on p5.js= https://editor.p5js.org/kairicabais/sketches/yFFVWs1uT

//string variable of text sentence "WOAHH"
let sentence = "WOAHH";
let texts = []; let num = 8; //no. of type instances
let rInc = 30; //increment of r(radius) size for each instance


function setup() {
  createCanvas(400, 400);

  //angle mode to degrees, so all angle calculations in the sketch will be in degrees rather than radians.
  angleMode(DEGREES);
  
  //rotations of the letters
  for (let i=0; i<num; i++) {
    let r = rInc * (i + 1);
    texts[i] = new Type(sentence, r);
  } 
}

//first layer of letters in a circle rotating.
function draw() {
  background(112, 69, 235);
//move the origin of the canvas to the center (from the top-left corner) for easier positioning of the circular text
  translate(width/2, height/2);
  
  for (let i=0; i<num; i++) {
    texts[i].update();
    texts[i].display();
  }
}
