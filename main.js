noseX = 0;
noseY = 0;
difference = 0;
left_wristX = 0;
right_wristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(500, 500);
    canvas.position(560, 120);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialised");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX=" + noseX + " noseY=" + noseY);
        left_wristX=results[0].pose.leftWrist.x;
        right_wristY=results[0].pose.rightWrist.x;
        difference=floor(left_wristX-right_wristX);
        console.log(left_wristX, right_wristX, difference);
    }
}

function draw() {
    background('#82E0AA');
    document.getElementById("square_side").innerHTML="width and height of the square will be" + difference + "px";
    fill("#18CBDA");
    stroke("#0E58CA");
    square(noseX, noseY, difference);
}