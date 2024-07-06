//Car illustration on p5.js= https://editor.p5js.org/kairicabais/sketches/UKyB3oSN3

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(102, 136, 113);
    fill(255, 165, 0)
    noStroke()
    rect(1, 310, 400, 90, 20, 15, 10, 5);
  
    // Car body
    fill(255, 0, 0); // Red color
    beginShape();
    vertex(90, 300); // Starting point of the car body
  
    // Top front curve of the car
    bezierVertex(70, 250, 10, 250, 150, 300);
  
    // Hood of the car
    bezierVertex(180, 290, 220, 290, 250, 300);
  
  
    // Bottom of the car
    vertex(350, 340);
    vertex(50, 340);
  
    // Close the shape
    endShape(CLOSE);
  
    // Front window on the right
    fill(0, 255, 255); // Cyan color
    beginShape();
    vertex(160, 300);
    bezierVertex(170, 300, 230, 270, 240, 300);
    endShape(CLOSE);
  
  
    // Wheels
    fill(31, 53, 38); // wheel color
    ellipse(100, 340, 40, 40);
    ellipse(280, 340, 40, 40);
  }
  
  