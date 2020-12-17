class Food{
  constructor(){
    this.image = loadImage("images/milk.png");
  }

  display(){
    imageMode(CENTER);
    image(this.image, 200, 200, 200,200);
  }
}
