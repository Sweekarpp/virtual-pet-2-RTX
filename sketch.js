var dog,database,foodS,FoodStock,dogImg,dogImg1,dog2;
function preload() {
  dogImg = loadImage('images/dogImg.png');
  dogImg1 = loadImage('images/dogImg1.png')
}

function setup(){
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,200,200);
  dog.addImage("dog",dogImg);
  dog.scale = 0.2;

  FoodStock = database.ref('Food');
  FoodStock.on("value",readFood);
}


function draw(){
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.destroy();
dog2 = createSprite(250,250,200,200);
dog2.addImage(dogImg1);
dog2.scale = 0.2;
}
  drawSprites();
  //add styles here

}

function readFood(data){
  foodS = data.val();

}

function writeStock(x){

if(x<=0){
x=0;

}else{
x=x-1
}

database.ref('/').update({
Food:x
})
}
