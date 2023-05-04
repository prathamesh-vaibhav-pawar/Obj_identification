img = ""
status1 = ""
object = []
function preload(){
    img = loadImage("bedroom.jpg")
}
function setup(){
    Canvas = createCanvas(800,500)
    Canvas.center()
    ObjectDector = ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML = "Started Detacting....."
}
function modelloaded(){
    console.log("MOdel Loaded")
    status1 = true
    ObjectDector.detect(img,gotResult)
}
function gotResult(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        object = result
    }
}

function draw(){
    image(img,0,0,800,500) 
    if(status1 != ""){
        document.getElementById("status").innerHTML = "Object Detected!"
        for(i=0;i<object.length;i++){
            fill("#626262") 
            percent = floor((object[i].confidence)*100)
            text(object[i].label+""+percent+"%",object[i].x+15,object[i].y+15)
            noFill()
            stroke("#626262")
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
}