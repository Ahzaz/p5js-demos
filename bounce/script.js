angle = 0;
var direction = {x:0, y:0}
var ball = {x:0, y:0};
var velocity = 25;
var secondary;
var px, py;
function setup() {
    createCanvas(800,600);   
    angle = 23 * PI / 180;
    direction.x = Math.cos(angle);
    direction.y = Math.sin(angle);
    secondary = createGraphics(width, height);
    ball.x = width/2;
    ball.y = height/2;
    px = ball.x;
    py = ball.y;
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);
    ellipse(ball.x, ball.y, 20,20);
    
    secondary.stroke(255,255,255);
    secondary.strokeWeight(1);    
    // secondary.point(ball.x, ball.y);
    secondary.line(px, py, ball.x, ball.y);
    px = ball.x;
    py = ball.y;
    image(secondary, 0,0)
    
    ball.x = ball.x + velocity * direction.x;
    ball.y = ball.y + velocity * direction.y;
    if (ball.x < 0 || ball.x > width)
        direction.x = -direction.x;
    if (ball.y < 0 || ball.y > height)
        direction.y = -direction.y;   
}