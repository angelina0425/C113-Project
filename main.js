function preload(){
}

function setup(){
    canvas = createCanvas(1000, 550)
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230, 150, 220, 200);
    fill(255,0,0);
    stroke(255,0,0);
    circle(100, 100, 75)
    circle(100, 500, 75)
    circle(750, 100, 75)
    circle(750, 500, 75)
    fill(0,100,0);
    stroke(0,100,0);
    rect(136, 90, 576, 20)
    rect(136, 490, 576, 20)
    rect(90, 137, 20, 325)
    rect(741, 137, 20, 325)
}

function take_snapshot(){
    save('image1.png')
}
