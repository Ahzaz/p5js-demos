var angle = 0;
function setup() {
    createCanvas(800,600);   
    angle = PI / 4;
    angleSlider = createSlider(0, PI, PI/4, 0.01);
    sizeSlider = createSlider(0, 0.7, 0.6, 0.01);
    initialSize = createSlider(40, 500, 150, 10);
    stroke(1);
    strokeWeight(1);
}

function draw() {
    background(255);
    translate(width/2, height)
    angle = angleSlider.value();
    branch(initialSize.value());
}
function branch(len){
    line(0,0,0,-len);
    translate(0, -len);
    var new_len = len * sizeSlider.value();
    if(new_len > 2) {
        push();
        rotate(angle);
        branch(new_len);
        pop();
        push();
        rotate(-angle);
        branch(new_len);
        pop();
    }
}