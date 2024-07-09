//Singing drawing face FFT and MIc audio visualization on p5.js live= https://editor.p5js.org/kairicabais/sketches/mbtdQ7y4W 


let fft;
let sound;


function preload() {
  sound = loadSound('Somebody to Love (happy feet) lyrics- Brittany Murphy.mp3');
}


function setup() {
  createCanvas(windowWidth, 200);
  
  fft = new p5.FFT();
  // Set the output volume 
  sound.amp(0.5);
  sound.loop();


  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB);
  
  fft = new p5.FFT();
  mic = new p5.AudioIn();
  mic.start();    // start collect audio
  //for fft to grab mic
  fft.setInput(sound);
}

function draw() {
// analyzes the number of frequency bands
  let spectrum = fft.analyze();
  console.log(spectrum);
  
  // for(let i = 0; i < spectrum.length; i++){
  //   background
  // }
    
// using microphone, gets the volume. Measures amplitude.
  vol = mic.getLevel(); 
  
  //bg color purple
  background(252, 67, 93); 
  
// face shadow
    strokeWeight(0);   //or noStroke
  fill(258, 71, 78);
  circle(width/2, height/2, 600)
  
// 1 ear
  fill(258, 71, 78);
  circle(width/8, height/2, 100); 
 
  
// face
  strokeWeight(0);   //or noStroke
  fill(32, 35, 85);
  circle(width/2, height/2, 500)

//2nd face for circle color effect
  for (let i = 0; i < spectrum.length; i += 4) {
  fill(spectrum[i], 100, 100, 0.2);
  circle(width/2, height/2, spectrum[i]*5); //100,100 is saturation and brightness. size of circles edit spectrum[i]*5
    
    
  }
  
// eyes
  fill(266, 85, 99)
  circle(width/3 + 50, height/2 - 20, 60);
  circle(width/2 + 100, height/2 - 20, 60);

//mouth. vol is making height of the mouth taller when the volume mic picks up is louder.
arc(width/2,height/1.7, width/5, width*0.03 + vol*width*0.9, 0, PI, CHORD); //0 and PI is angle of the arc 
}
