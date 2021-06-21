img = "";
 status = "";
function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(500,420);
    canvas.position(420,210);
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("drdoom").innerHTML = "STATUS : object is being detected ";
}

function modelLoaded(){
    console.log("model has kept the name from cocossd to coconutssd");
    status = true;
    objectDetector.detect(img , gotResult);
}

function draw(){
    image(img , 0 ,0 , 500 , 420);
    fill("#ff0000");
    text("dog" , 30 , 70 );
    stroke("#ff0000");
    noFill();
    rect(25 , 60 , 350 , 350);
    fill("#0d00ff");
    stroke("#0d00ff");
    noFill();
    text("cat" , 250 , 70 );
    rect(240 , 60 , 350 , 350);
  
}

function gotResult(error , results){
if(error){
    console.log(error);
}
console.log(results);
}