//Alien Design on p5.js= https://editor.p5js.org/kairicabais/sketches/jasjfjWnu

function setup() {
    createCanvas(400, 400);
    background(40, 0, 93);
  }
  
  function draw() {
      //background with transparency
    background(0,0,35,25); 
    
    //blinking stars
    var galaxy = { 
    locationX : random(width),
    locationY : random(height),
    size : random(1,6)
  }
    //mouse interactive background
    ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
    ellipse(galaxy.locationX, galaxy.locationY, galaxy.size, galaxy.size);
  
    //body
    //ellipse(200, 300, 400, 90);
    
    //face shape through bezier curves
    fill("#F5A9FF");
    beginShape();
    vertex(100, 200);
    bezierVertex(100, 100, 300, 100, 300, 200);
    bezierVertex(300, 300, 100, 300, 100, 200);
    bezierVertex(50, 200, 50, 100, 100, 200);
    endShape(CLOSE);
    
    fill("#F5A9FF");
    beginShape();
    vertex(300, 200);
    bezierVertex(300, 100, 100, 100, 100, 200);
    bezierVertex(100, 300, 300, 300, 300, 200);
    bezierVertex(350, 200, 350, 100, 300, 200);
    endShape(CLOSE);
    
    // Eyes
    fill(255); 
    // White of the eyes
    ellipse(160, 190, 100, 70);
    ellipse(240, 190, 100, 70);
    
    // moving UFO
    fill(159, 143, 180); //Light yellow color
    stroke(150, 143, 180);
    // one pupil
    ellipse(160, 190, 60, 70);
    noStroke()
    fill(254, 251, 208)
    // UFO animation
    ellipse(400-frameCount, 190, 190, 70);
  
    //Nose
    fill(216, 154, 231); 
    triangle(200, 190, 190, 230, 210, 230);
  }
  
