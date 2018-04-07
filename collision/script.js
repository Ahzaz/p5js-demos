R = 10;
FRAME_RATE = 50;
nr_balls = 30;
INITIAL_VELOCITY = 30;
MASS = 10;
DAMP_FACTOR = 0.99;
balls = [];

function newBall() {
    return {x:randomX(), y:randomY(), v: INITIAL_VELOCITY, dx:0, dy:0, fill:255};
}


function randomY() {
    return Math.random() * (height-(2*R)) + R;
}
function randomX() {
    return  Math.random() * (width-(2*R)) + R;
}
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
}

function setup() {
    createCanvas(800,600);
    frameRate(FRAME_RATE);
    for (var i = 0; i < nr_balls; i++) {
        balls.push(newBall());
    }
    var b = Math.floor(Math.random() * nr_balls);
    randomAngle = Math.random() * PI * 2;
    balls[b].v = INITIAL_VELOCITY;
    balls[b].dx = Math.cos(randomAngle);
    balls[b].dy = Math.sin(randomAngle);
}

function draw() {
    background(255);
    stroke(0);
    strokeWeight(1);
    for (var i = 0; i < balls.length; i++) {
        var ball = balls[i];
        fill(ball.fill);
        ellipse(ball.x, ball.y, R, R);
        ball.x += ball.v * ball.dx;
        ball.y += ball.v * ball.dy;

        if(ball.x > width-R || ball.x < R){
            if(ball.x > width-R)
                ball.x = width-R;
            else 
                ball.x = R

            ball.dx = -ball.dx;
        }
        if(ball.y > height-R || ball.y < R){
            if(ball.y > height-R)
                ball.y = height-R;
            else 
                ball.y = R

            ball.dy = -ball.dy;
        }

        for (var j = 0; j < balls.length; j++) {
            if(i != j) {
                var b = balls[j];
                var d = distance(ball.x, ball.y, b.x, b.y);
                if(d <= R) {
                    var v = ball.v;
                    b.dx = (b.x - ball.x) / d;
                    b.dy = (b.y - ball.y) / d;
                    ball.dx = -b.dx;
                    ball.dy = -b.dy;  
                    ball.fill = b.fill = 0;
                }
            }
        }

        if(ball.dx && ball.dy)
            ball.v *= DAMP_FACTOR;
    }

}