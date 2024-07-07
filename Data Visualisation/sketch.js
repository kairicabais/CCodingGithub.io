// Data Visualisations on p5.js= https://editor.p5js.org/kairicabais/sketches/uV5IcmoCs 
// CSV data from= https://www.kaggle.com/datasets/nelgiriyewithana/most-streamed-spotify-songs-2024


// Spotify 5 most played tracks of 2024 data visualization

// Global Variables for data (csv file)
let tracks = []; // Array to store all track objects
let data_count = 1;  // Initializing data_count, how many data lines to read
let track_dist;     // The distance between a track and user's mouse coordinates

// Different track Images
let track1_img, track2_img, track3_img, track4_img, track5_img;
let track_designs = [];  // Array to store all track images

// Variable to store track data
let track_data;

function preload() {
  track_data = loadStrings('data.csv');

  track1_img = loadImage("01.png");
  append(track_designs, track1_img);
  
  track2_img = loadImage("02.png");
  append(track_designs, track2_img);
  
  track3_img = loadImage("03.png");
  append(track_designs, track3_img);
  
  track4_img = loadImage("04.png");   
  append(track_designs, track4_img);
  
  track5_img = loadImage("05.png");
  append(track_designs, track5_img);
}

function setup() {
  createCanvas(1200, 800);
  imageMode(CENTER);

  // If the file fails to open, then it will print the error and continuously loop
  if (track_data == null) {
    print("Failed to open data.csv");
    while (true) {}
  }

  // Else it will print out that it was successful and how many lines were loaded
  print("File successfully loaded:", track_data.length, "lines scanned.");
}

function draw() {
  background(0);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("Click to reveal the top tracks of 2024", width / 2, height / 2);

  // Here we continuously draw the tracks on the canvas
  for (let j = 0; j < tracks.length; j++) {
    tracks[j].draw();
    track_dist = dist(tracks[j].x, tracks[j].y, mouseX, mouseY);
    
    // If the mouse coordinates hit the track, it will display the data of that track
    if (track_dist < tracks[j].track_radius) {
      tracks[j].displayData();
    }
  }
}

// If the mouse is clicked, it will add a new track object into the tracks array
function mouseClicked() {
  append(tracks, new Track());
}

class Track {
  constructor() {
    this.x = mouseX;         // X coordinate for the track                    
    this.y = mouseY;         // Y coordinate for the track 
    this.track_radius;       // Radius of the track image
    this.design_num;         // Type of track design from track_designs
    this.data;               // String data of the track
    this.data_split;         // Splits the data into an array of its data
    
    this.init();
    this.printData();
  }
  
  // This function initializes all the variables for each track
  init() {
    this.design_num = int(random(5));
    this.track_radius = track_designs[this.design_num].width / 10;
    
    this.data = track_data[data_count];
    this.data_split = split(this.data, ',');
    if (data_count < track_data.length - 1) {
      data_count++;
    } else {
      print("All tracks printed!");
    }
  }
  
  // This function takes a random track image and draws it at a random (x, y) coordinate on the canvas
  draw() {
    image(track_designs[this.design_num], this.x, this.y, track_designs[this.design_num].width / 5, track_designs[this.design_num].height / 5);   
  }
  
  displayData() {
    fill(255, 255, 180);
    rect(mouseX, mouseY, 500, 120);
    
    textAlign(LEFT);
    fill("black");
    
//on mouse hover, reveal title data in yellow box
    text("Track Name:", mouseX + 10, mouseY + 30);
    text("Artist:", mouseX + 10, mouseY + 55);
    text("Spotify Streams:", mouseX + 10, mouseY + 80);
    text("Release Date:", mouseX + 10, mouseY + 105);

    //green data text
    fill("green");
    text(this.data_split[0], mouseX + 140, mouseY + 30);
    text(this.data_split[1], mouseX + 235, mouseY + 55);
    text(this.data_split[2], mouseX + 290, mouseY + 80);
    text(this.data_split[3], mouseX + 125, mouseY + 105);
  }
  
  // This function is for debugging and code checking to ensure everything runs smoothly
  printData() {    
    print("Track Image:", this.design_num);
    print("Track Data:", this.data);
    
    if (this.data_split[0] == "") {
      this.data_split[0] = "MILLION DOLLAR BABY";
    }
    
    if (this.data_split[1] == "") {
      this.data_split[1] = "undefined";
    }
    
    if (this.data_split[2] == "") {
      this.data_split[2] = "undefined";
    }
    
    if (this.data_split[3] == "") {
      this.data_split[3] = "undefined";
    }
    
//on console log prints information. (images dont match up)
    print("Track Name:", this.data_split[0]);
    print("Artist:", this.data_split[1]);
    print("Spotify Streams:", this.data_split[2]);
    print("Release Date:", this.data_split[3]);
  }
}
