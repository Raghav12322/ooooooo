size=0;
lwristx=0;
rwristx=0;
function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    pose=ml5.poseNet(video,modelLoaded);
    pose.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("model loaded");
}

function gotPoses(results,error){
if(results.length>0){
    console.log(results);
    lwristx=results[0].pose.leftWrist.x;
rwristx=results[0].pose.rightWrist.x;
size=floor(lwristx-rwristx);
}
}
function draw(){
    background("#C3EBFF");
    fill("#00095A");
    
    text("Raghav",30,300);
    textSize(size);
}