function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  background(0);
  frameRate(60);
}

function draw() {
  strokeWeight(1);
  stroke(lerpColor(color('#f794a4'),color('#64b3f4'),abs(sin(frameCount))));
  translate(width/2,height/2);
  line(0,0,(cos(frameCount*3)*100-100),(sin(frameCount*3)*100));
  line(0,0,(-(cos(frameCount*3)*100)+100),(-(sin(frameCount*3)*100)));
  line(0,0,((sin(frameCount*3)*100)),(-(cos(frameCount*3)*100))+100);
  line(0,0,(-(sin(frameCount*3)*100)),((cos(frameCount*3)*100))-100);
  
  fill(0,0,0,20);
  noStroke();
  ellipse(0,0,(abs(sin(frameCount))*800),(abs(sin(frameCount))*800));
  
  //   if(frameCount==120){
  //   noLoop();
  // }
}