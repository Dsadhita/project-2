/*var ball;
var database,position;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition = database.ref('ball/position');
    ballposition.on("value",readPosition,showError);
}

function draw(){
    background("black");
    if(position!==undefined) {
    if(keyDown(LEFT_ARROW)){
       writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }}
    drawSprites();
}
function readPosition(data) {
    position = data.val();
    console.log("y position"+position.y);
    ball.x = position.x;
    ball.y = position.y;
}

function showError(){
    console.log("Error in writing to the datasbase");
}

function writePosition(x,y){
    database.ref('ball/position').set({
    'x' : position.x + x,
    'y' : position.y + y
    })
}
*/
var canvas, backgroundimage;

var gamestate = 0;
var playercount ;
var database;

var form,player,game;
var allplayers;

function setup (){
    canvas = createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getstate();
    game.start();
    
}

function draw(){
    
}