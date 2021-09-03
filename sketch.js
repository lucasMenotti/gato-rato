var gato, rato, im_rato,rato_provocando,im_rato4, im_gato, im_gato4,gato_correndo,fundo, im_fundo;
function preload() {
 im_gato = loadAnimation("images/cat1.png");
 gato_correndo = loadAnimation("images/cat2.png","images/cat3.png");
 im_gato4 = loadImage("images/cat4.png");
 im_rato = loadImage("images/mouse1.png");
 rato_provocando = loadAnimation("images/mouse2.png","images/mouse3.png");
 im_rato4 = loadImage("images/mouse4.png");
 im_fundo = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //fundo
    fundo = createSprite(500,800);
    fundo.addImage(im_fundo);
    fundo.scale = 2;
    //gato
    gato = createSprite(1000,600);
    gato.addAnimation("gatoSentado",im_gato);
    gato.scale = 0.2;
    //rato
    rato = createSprite(100,600);
    rato.addImage(im_rato);
    rato.scale = 0.2
}
    

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if (gato.x - rato.x < (gato.width - rato.width)/2){
        gato.velocityX=0;
        gato.addAnimation("ultimaImagemGato", im_gato4);
        gato.changeAnimation("ultimaImagemGato");
        gato.x = 300;
        gato.scale = 0.2;
        rato.addAnimation("ultimaImagemRato",im_rato4);
        rato.changeAnimation("ultimaImagemRato");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if (KeyCode === LEFT_ARROW){
   rato.addAnimation("ratoProvocando", rato_provocando);
   rato.changeAnimation("ratoProvocando");
   rato.frameDelay = 25;
   
   gato.velocityX = -5
   gato.addAnimation("gatoCorrendo", gato_correndo);
   gato.changeAnimation("gatoCorrendo");
 }

}
