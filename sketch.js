const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
  groundImg=loadImage("img.jpg")
  blockImg=loadImage("stages.png")
  playerImg=loadImage("player.png")
  monster1Img=loadImage("monster.png")
  
  monster3Img=loadImage("monster3.png")

}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    ground=createSprite(200,200,20,20)
    ground.addImage(groundImg)
    ground.velocityY=2
    ground.y=ground.height/2
    
    ground.scale=3
    
    
    player=createSprite(50,displayHeight-240,20,20)
    player.addImage(playerImg)
    player.scale=0.2

  invisibleGround=createSprite(displayWidth/2,displayHeight-140,displayWidth,10)
  invisibleGround.visible=false
}

function draw(){
    if(ground.y>400){
        ground.y=ground.height/2
    }
   
    if(keyDown(LEFT_ARROW)){
        player.x=player.x-20
    }

    if(keyDown(RIGHT_ARROW)){
        player.x=player.x-20
    }

    if(keyDown(UP_ARROW)){
        player.velocityY=-8
    }

    player.velocityY=player.velocityY+0.5

    


    spawnBlocks()
    spawnMonsters()

    player.collide(invisibleGround)
      drawSprites() 
}




function spawnMonsters(){
    if(frameCount%200===0){
        monster=createSprite(100,0,10,10)
        monster.velocityY=3
        monster.scale=0.3
        monster.x=random(100,1000)

        var x=Math.round(random(1,2))
        if(x===1){
            monster.addImage(monster1Img)
        }
        else {
            monster.addImage(monster3Img) 
        }
        
    }
    

}
function spawnBlocks(){
    if(frameCount%100===0){
        blocks=createSprite(100,0,10,10)
        blocks.addImage(blockImg)
        blocks.velocityY=3
        blocks.scale=0.3
        blocks.x=random(100,800)
    }
}
    
