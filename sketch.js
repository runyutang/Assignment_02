function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  background(0);
  frameRate(60);
}

function draw() {
  strokeWeight(2);
  stroke(lerpColor(color('#f794a4'),color('#64b3f4'),frameCount/120));
  translate(width/2,height/2);
  line(0,0,(cos(frameCount*3)*100-100),(sin(frameCount*3)*100));
  line(0,0,(-(cos(frameCount*3)*100)+100),(-(sin(frameCount*3)*100)));
  line(0,0,((sin(frameCount*3)*100)),(-(cos(frameCount*3)*100))+100);
  line(0,0,(-(sin(frameCount*3)*100)),((cos(frameCount*3)*100))-100);
  
  fill(0,0,0,10);
  ellipse(0,0,(frameCount*3+40),(frameCount*3+40));
  
    if(frameCount==120){
    noLoop();
  }
}