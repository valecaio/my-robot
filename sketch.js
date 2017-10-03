function setup() {
  createCanvas(800,600);
   background(191,209,200);
}

function draw() {
  //head 
    //right antenna 
      stroke(102,102,102);
      line(465,200,485,200);
      noFill();
      ellipse(490,200,10,10);
      
      noStroke();
      fill(237,150,115);
      ellipse(450,200,45,45);
    
    
    //left antenna
      stroke(102,102,102);
      line(315,200,335,200);
      noFill();
      ellipse(310,200,10,10);
      
      noStroke();
      fill(237,150,115);
      ellipse(350,200,45,45);
    
  //main circle head
     fill(55,72,88);
     ellipse(400,195,115,115);
  
    //eye
      fill(255,255,255);
      ellipse(415,195,35,35);
      fill(102,102,102);
      ellipse(415,197,8,8);
    
    //wheel
      fill(237,150,115);
      ellipse(400,380,85,85);
      
      
  //body
      noStroke();
      fill(55,72,88);
      rect(345,260,110,130);      
    //left arm
      noStroke();
      fill(55,72,88);
      rect(330,260,10,140);
    
      fill(237,150,115);
      ellipse(335,270,50,50);
    
      //left hand
        fill(237,150,115);
        ellipse(335,420,40,40);
    
        fill(191,209,200);
        ellipse(335,420,20,20);
      
        rect(310,420,50,45);
        
  //right arm
    fill(55,72,88);
    rect(460,260,10,140);
  
    fill(237,150,115);
    ellipse(465,270,50,50);
      
    //right hand
      fill(237,150,115);
      ellipse(465,420,40,40);
    
      fill(191,209,200);
      ellipse(465,420,20,20);
      
      rect(440,420,50,45);
    
  //buttons
   fill(255,255,255);
   ellipse(400,290,10,10);
   ellipse(400,310,10,10);
   ellipse(400,330,10,10);
  }