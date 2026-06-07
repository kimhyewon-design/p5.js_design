/******************************
1. mouse
      - 마우스 이동시 눈동자가 따라감
      - 마우스 클릭시 표정이 변함
2. keyboard
      - d키를 누르면 낮 배경으로 바뀜
      - n키를 누르면 밤 배경으로 바뀜
*****************************/
function setup() {
  createCanvas(600, 400);
}
function draw() {
  if(keyIsPressed && (key === 'D' || key === 'd') ) {
    background(153,255,255);
    stroke(200,0,0);
    fill(200,0,0);
    ellipse(80,80,65,65);
    line(80,15,80,35);
    line(80,125,80,145);
    line(15,80,35,80);
    line(125,80,145,80);
    line(32,32,48,48);
    line(112,112,138,138);
    line(32,134,48,114);
    line(113,51,134,32);
    noStroke();
    fill(255);
    ellipse(110,150,50,50);
    ellipse(140,150,60,60);
    ellipse(170,150,50,50);
    ellipse(400,120,50,50);
    ellipse(430,120,60,60);
    ellipse(460,120,50,50);
  }else if(keyIsPressed && (key === 'N' || key === 'n')) {
    background(70,50,100);
    stroke(255,255,102);
    fill(255,255,102);
    ellipse(450,100,60,60);
    point(70,50);
    point(150,98);
    point(300,45);
    point(404,17);
    point(510,31);
    point(574,67);
    fill(70,50,100);
    noStroke();
    ellipse(430,90,60,60);
  }else {
    background(240,245,235);
  }
  
  //얼굴
  fill(112,59,6);
  quad(225,160,205,350,395,350,375,160);
  fill(255,235,215);
  stroke(255,218,179);
  rect(280,250,40,60);
  ellipse(300,180,140,170);
  noStroke();
  fill(112,59,6);
  arc(300,160,150,140,radians(180),radians(360)); //앞머리
  rect(228,160,10,60);
  rect(362,160,10,60);
  fill(255,235,215);
  triangle(300,120,280,160,320,160);
  
  if(mouseIsPressed){
    noFill();
    stroke(0);
    strokeWeight(1);
    arc(270,190,20,13,radians(180),radians(360));
    arc(330,190,20,13,radians(180),radians(360));
    arc(300,230,30,20,radians(0),radians(180));
    line(285,230,315,230);
  }else{
    let x=map(mouseX,0,width,-3,1);
    let y=map(mouseY,0,height,-3,1);
    stroke(0);
    fill(255);
    strokeWeight(0.8);
    ellipse(270,190,20,13);
    ellipse(330,190,20,13);
    fill(0);
    ellipse(270+x,190+y,10,13);
    ellipse(330+x,190+y,10,13);
    fill(255);
    noStroke();
    ellipse(273+x,188+y,4,4);
    ellipse(333+x,188+y,4,4);
    stroke(0);
    strokeWeight(0.8);
    line(310,228,315,225);
    line(310,228,290,228);
    line(285,225,290,228);
  }
  noFill();
  stroke(0);
  strokeWeight(0.8);
  line(300,185,295,199);
  line(300,199,295,199);
  ellipse(270,190,40,35);
  ellipse(330,190,40,35);
  line(350,190,370,190);
  line(250,190,230,190);
  line(290,190,310,190);
  fill(255,235,215);
  arc(362,196,20,25,radians(270),radians(100));
  fill(0);
  strokeWeight(2);
  point(365,204);
  
 //옷
  noStroke();
  fill(255);
  rect(200,300,200,200);
  fill(255,235,215);
  ellipse(300,300,40,30);
  fill(128,128,128);
  quad(200,300,170,400,280,400,285,300);
  quad(400,300,430,400,320,400,315,300);
  fill(96,96,96);
  rect(220,340,30,20);
  triangle(220,360,250,360,235,370);
  stroke(96,96,96);
  line(205,340,210,400);
  line(395,340,390,400);     
}

function keyPressed() {
  if(key === 's')
    saveGif('HW3',10);
}