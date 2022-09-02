function setup(){
    canvas=createCanvas(500,480);
    canvas.position(610,120);
    video=createCapture(150,130);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("poses",gotPoses);
}
function modelLoaded(){
    console.log("model loaded!!!!");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
}
}
function draw(){
    background("#FFB6C1");
}