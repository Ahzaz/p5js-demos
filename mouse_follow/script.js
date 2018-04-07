mouse_pos = []
MAX_TRACE = 10;
function setup() {
    createCanvas(800,600);
    frameRate(45);
    mouse_pos.push({x:mouseX, y:mouseY});
    console.log("Done");
}

function draw() {
    background(255);
    stroke(0);
    strokeWeight(1);
    var r = 20;
    for(p in mouse_pos) {
        ellipse(mouse_pos[p].x, mouse_pos[p].y,r,r);
        //r += 3;
    }
    if(mouse_pos.length >= MAX_TRACE)
        mouse_pos.shift();

    mouse_pos.push({x:mouseX, y:mouseY});
}