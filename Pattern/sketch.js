//Pattern on p5.js= https://editor.p5js.org/kairicabais/sketches/CoWzCVDJk

// asymmetrical checkered orange and purple pattern of even squares

function setup() {
    createCanvas(500,500);
    background(255, 117, 83); //purple RGB background
    fill(216, 154, 231);      //orange RGB squares
    strokeWeight(0);          // the orange squares noStroke
    
    rectMode(CENTER);
    let space = 50;
    for (x=0;x<width+50;x+=space){
      for (y=0;y<height+50;y+=space){
    //purple bigger squares. 30 is the size of the squares
        square(x,y,30)
    //purple mini squares. 20 is the size of the squares
        square(x+space/2,y+space/2,20)
      }
    }
  }