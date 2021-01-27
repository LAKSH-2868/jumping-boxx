var canvas;
var music;
var box1,box2,box3,box4,ball;
var wall1,wall2,wall3,wall4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100,500,175,20);
    box1.shapeColor = "red";

    box2 = createSprite(300,500,175,20);
    box2.shapeColor = "blue";

    box3 = createSprite(500,500,175,20);
    box3.shapeColor = "yellow";

    box4 = createSprite(700,500,175,20);
    box4.shapeColor = "green"

    ball = createSprite(random(20,750),50,20,20)
    ball.shapeColor = "white";

    wall1 = createSprite(400,10,800,10);
    wall1.shapeColor = "black";
 
    wall2 = createSprite(10,300,10,600);
    wall2.shapeColor = "black";

    wall3 = createSprite(400,590,800,10);
    wall3.shapeColor = "black";

    wall4 = createSprite(790,400,10,800);
    wall4.shapeColor = "black";

    ball.velocityY = 3;
    ball.velocityX = 3;

    //create box sprite and give velocity


}

function draw() {
    background("black");
    //create edgeSprite

   music.play();
   
    //add condition to check if box touching surface and make it box
    if(isTouching(ball,box1) &&   bounceoff(ball,box1)){
        ball.shapeColor="red";        
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    else{
        ball.shapeColor="white"
    }

    if(isTouching(ball,box2) &&   bounceoff(ball,box2)){
        ball.shapeColor="blue";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    else{
        ball.shapeColor="white"
    }

    if(isTouching(ball,box3) &&   bounceoff(ball,box3)){
        ball.shapeColor="yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    else{
        ball.shapeColor="white"
    }

    if(isTouching(ball,box4) &&   bounceoff(ball,box4)){
        ball.shapeColor="green";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    else{
        ball.shapeColor="white"
    }



    bounceoff(ball,wall1);
    bounceoff(ball,wall2);
    bounceoff(ball,wall3);
    bounceoff(ball,wall4);




    drawSprites();
}

