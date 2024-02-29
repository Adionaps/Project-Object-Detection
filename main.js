img=""
Objects=[]
status1=""

function preload(){
img= loadImage('Kitchen_1 image.jpeg')
}

function draw(){
image(img,0,0,640,420)
if(status1 != ""){
    document.getElementById("status").innerHTML="status:objectDetected"
}
}

function setup(){
canvas= createCanvas(640,420)
canvas.center()
objectDetector=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="status:detecting objects"
}

function modelLoaded(){
    console.log("modelLoaded")
    status1=true
    objectDetector.detect(img,gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)
    Objects=results
}