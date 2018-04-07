mouse_pos = []
SMALL_CIRCLE_RADIUS =  1;    
CIRCLE_PARTS = 360 / SMALL_CIRCLE_RADIUS;
// MAX_TRACE = CIRCLE_PARTS;
MAX_TRACE = 180;
INC_PER_SEG = 0;
function setup() {
    createCanvas(800,600);
    frameRate(60);
    INC_PER_SEG = 2 * PI / CIRCLE_PARTS;
    for(var i = 0; i < MAX_TRACE; ++i)
        mouse_pos.push({x:mouseX, y:mouseY});
}

function draw() {
    background(255);
    stroke(0);
    strokeWeight(1);
    var r = 40;
    var angle = 0;
    var cx = mouseX;
    var cy = mouseY;
    var partsPerPos = CIRCLE_PARTS / mouse_pos.length;
    for(var p = mouse_pos.length-1; p >= 0; p--){
        var pos = mouse_pos[p];
        for(var i = 0; i < partsPerPos; ++i) {
            point(pos.x + r * Math.cos(angle), pos.y + r * Math.sin(angle));
            // ellipse(pos.x + r * Math.cos(angle), pos.y + r * Math.sin(angle), SMALL_CIRCLE_RADIUS, SMALL_CIRCLE_RADIUS);
            angle += INC_PER_SEG;
        }
    }
    
    if(mouse_pos.length > MAX_TRACE) {
        mouse_pos.shift();
    }
    mouse_pos.push({x:mouseX, y:mouseY})
}