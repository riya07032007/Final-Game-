const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
  groundImg=loadImage("img.jpg")
  blockImg=loadImage("img2.jpg")
  playerImg=loadImage("player.png")
  monster1Img=loadImage("monster.png")
  monster2Img=loadImage("monster2.png")
  monster3Img=loadImage("monster3.png")

}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    ground=createSprite(200,200,20,20)
    ground.addImage(groundImg)
    ground.velocityY=5
    ground.scale=3
    ground.y=ground.height/2
    
    player=createSprite(350,250,20,20)
    player.addImage(playerImg)
    player.scale=0.4
}

function draw(){
    if(ground.y>400){
        ground.y=ground.height/2
    }
    spawnBlocks()
    spawnMonsters()
      drawSprites() 
}

function spawnBlocks(){
    if(frameCount%150===0){
        block=createSprite(300,300,10,10)
        block.addImage(blockImg)
        block.velocityY=3
        block.scale=0.3
        block.x=random(100,1500)
    }
}

function spawnMonsters(){
    if(frameCount%100===0){
        monster=createSprite(100,300,10,10)
        monster.velocityY=3
        monster.scale=0.3
        monster.x=random(100,1000)

        var x=Math.round(random(1,3))
        if(x===1){
            monster.addImage(monster1Img)
        }
        else if(x===2){
            monster.addImage(monster2Img) 
        }
        else{
            monster.addImage(monster3Img)  
        }
    }
}

