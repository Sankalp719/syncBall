var ball;
var database;
var positionRef;

function setup(){
    database = firebase.database();
    positionRef = database.ref("ball/position");
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";


//On function 
positionRef.on("value",readPosition,showErr)

}

function readPosition(data){
    position = data.val();
    console.log(position);

    ball.x = position.x;
    ball.y = position.y;


}

function showErr(){
 console.log("Data Base Err,  ");
 
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    positionRef.update({
        x: ball.x + x,
        y: ball.y + y,
    })
}
