var bg,bg_img;
var hoop,  hoop_img;




function preload(){
    bg_img = loadImage("backround.jpg");
     hoop_img = loadImage("hoop.png");

    
}


function setup(){
    createCanvas(1200,700);

    bg = createSprite(550,350);
    bg.addImage(bg_img);
    bg.scale=2.13;

    hoop = createSprite(550,100);
    hoop.addImage(hoop_img);
    

}


function draw(){
    background(0);


    drawSprites();

}