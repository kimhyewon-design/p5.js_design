/*
1. 색 변화
   - 시간이 지나며 하늘과 바다의 색이 변함
   - 별과 등대 조명의 색과 투명도가 변함
2. 움직임
   - 시간이 지나며 돌고래의 높이가 변함
   - 배의 위치가 변함
3. 크기 변화
   - 달의 크기가 변함
   - 돌고래 아래 수면의 파동의 크기가 변함
*/
function setup() {
  createCanvas(600, 400);
}

function draw() {
  let skyColorA = color(20, 10, 80);
  let skyColorB = color(10, 5, 40);
  let skyWave = (sin(millis() * 0.0005) + 1) / 2; 
  let currentSky = lerpColor(skyColorA, skyColorB, skyWave);
  background(currentSky); 
  //별
  let starAlpha = map(sin(millis() * 0.003), -1, 1, 100, 255); 
  stroke(255, 255, 36, starAlpha); 
  line(300, 50, 400, 80);
  line(30, 70, 130, 100);
  strokeWeight(2);
  point(237, 50);
  point(148, 75);
  point(459, 100);
  point(578, 62);
  point(20, 93);
  point(259, 178);
  //달
  let moonSize = 50 + sin(frameCount * 0.03) * 3;
  fill(255, 255, 36); 
  noStroke();
  circle(500, 70, moonSize);
  fill(currentSky); 
  circle(480, 70, moonSize);
  //바다
  let seaColorA = color(40, 85, 180);
  let seaColorB = color(67, 115, 217);
  let seaWave = (sin(frameCount * 0.04) + 1) / 2;
  let currentSea = lerpColor(seaColorA, seaColorB, seaWave);
  fill(currentSea); 
  noStroke();
  rect(0, 300, 600, 100); 
  //바위
  fill(100);  
  noStroke();
  rect(0, 270, 250, 30);
  // 등대
  fill(255); 
  quad(50, 200, 80, 200, 90, 270, 40, 270);
  fill(200, 80, 50);
  rect(45, 190, 40, 10);
  fill(255);
  rect(50, 170, 30, 20);
  fill(200, 80, 50);
  arc(65, 170, 40, 40, radians(180), radians(360));
  fill(200, 80, 50);
  rect(61, 140, 8, 10);
  fill(0);
  square(65, 180, 10);
  //등대 조명
  push();
  translate(68, 145);
  let lightAlpha = map(sin(millis() * 0.003), -1, 1, 100, 200);
  fill(250, 237, 125, lightAlpha); 
  noStroke();
  quad(0, -5, 32, -10 , 32, 10 , 0, 5);
  pop();
  //배
  push();
  let moveX = ((frameCount * 0.5) % (width + 550));
  if (moveX > width - 170) {
    moveX = moveX - (width + 110);
  }
  let boatY = cos(frameCount * 0.03) * 4;
  translate(moveX, boatY);
  fill(255);
  quad(180, 290, 270, 290, 250, 320, 200, 320);
  fill(180);
  quad(180, 290, 270, 290, 250, 295, 200, 295);
  fill(102, 57, 18);
  noStroke();
  rect(223, 260, 4, 35);
  fill(255, 51, 85);
  triangle(225, 264, 225, 278, 245, 270);
  pop();
  //돌고래
  let dolphinY = sin(frameCount * 0.05) * 5; 
  push();
  translate(0, dolphinY); 
  fill(213, 213, 213); 
  circle(93, 335, 15);
  fill(currentSea); 
  circle(85, 335, 15); 
  fill(213, 213, 213); 
  arc(100, 350, 35, 35, radians(150), radians(330));
  fill(255, 255, 255); 
  arc(102, 353, 35, 35, radians(150), radians(330));
  fill(currentSea); 
  arc(104, 357, 34, 34, radians(150), radians(330)); 
  fill(213, 213, 213); 
  circle(177, 325, 15);
  fill(currentSea); 
  circle(170, 325, 15);
  fill(213, 213, 213); 
  arc(184, 340, 35, 35, radians(140), radians(330));
  fill(255, 255, 255); 
  arc(186, 343, 35, 35, radians(140), radians(330));
  fill(currentSea); 
  arc(188, 347, 34, 34, radians(140), radians(330));
  pop(); 
  noFill();
  strokeWeight(0.5);
  stroke(103, 153, 255);
  let rippleSize = (frameCount % 60) * 0.5;
  ellipse(87, 370, 24 + rippleSize, 10 + rippleSize * 0.4);
  ellipse(171, 360, 24 + rippleSize, 10 + rippleSize * 0.4);
}

function keyPressed() {
  if(key === 's')
    saveGif('HW4',10);
}