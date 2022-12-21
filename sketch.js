let deg = 0;
let alf = 100;
const MIN_B = 0; MAX_B = 100;
let inc1 = 1;
let inc2 = 0.01;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(20)
}

function draw() {
  background(0, alf);
  translate(width/2, height/2)
  rotate(deg);
  
  for (let i = 0; i < 30; i++){
    rectMode(CENTER);
    
    //translate(width/2, height/2);
    fill(180, random(100), random(100), random(10));
    //noFill();
    stroke(random(255));
    //rotate(deg);
    rotate(i+deg*0.05);
    rect(x, y, 10*i);
    noStroke();
    fill(random(300, 360), 100, 100, 50)
  ellipse(random(50, 250), 0, 50);
  }  
  alf -= inc1;
  deg-=inc2;

  if (alf == MIN_B || alf == MAX_B){
    inc1 *= -1;
    x = random(width/3); 
    y = random(height/3);
  //if (alf == MIN_B)
    //inc2 *= -1;
}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}