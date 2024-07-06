//contructor method to set arguments for this class Type.
class Type {
    constructor(sentence, r){
      this.sentence = sentence;
  // Splits the sentence string into an array of individual characters and assigns it to this.sentenceArray. This will be used to draw each character separately.
      this.sentenceArray = this.sentence.split("");
      this.r = r //radius of the circle on which the text will be displayed.
      this.angle = 0; 
   
  // calculates the previous locations of x,y based on r and angle
      this.x = this.r * cos(this.angle);
      this.y = this.r * sin(this.angle);
    }
    
  //update the state of the object. This.angle icreases the angle property by 1 degree on each call. This will create the rotation effect. 
    update(){
      this.angle += 1;
    }
    
  //draw the text on the canvas
    display() {
      textSize(20);
      noStroke();
      fill(246, 112, 56)
      rotate(this.angle);
      for (let i=0; i<this.sentenceArray.length; i++) {
  //push() saves the current drawing style settings and transformations. This allows us to revert to them later with pop().
      push()
      let startingAngle = 360 / this.sentenceArray.length * i;
      rotate(startingAngle);
      text(this.sentenceArray[i], this.x, this.y);
  // pop() ensures that the rotation for each character is independent
      pop()
    }
      
    }
  }