var hr, mn, sc
var anglehr, anglemn, anglesc


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(200, 200)
  rotate(-90)
  hr = hour()
  mn = minute()
  sc = second()
  anglesc = map(sc, 0, 60, 0, 360)
  anglemn = map(mn, 0, 60, 0, 360)
  anglehr = map(hr % 12, 0, 12, 0, 360)
  
  
  push()
  rotate(anglesc)

  stroke(255,0,0)
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop()

  push()
  rotate(anglemn)

  stroke(0,255,0)
  strokeWeight(7)
  line(0, 0, 75, 0)
  pop()
  drawSprites();
  
  push()
  rotate(anglehr)

  stroke(0, 0, 255)
  strokeWeight(7)
  line(0, 0, 50, 0)
  pop()
}