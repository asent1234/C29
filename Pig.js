class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.transp = 255
  }
  display(){
    console.log(this.body.speed)
    
    if(this.body.speed < 2.5){
    super.display();
    }
    else{
    push();
    this.transp = this.transp - 5
    World.remove(world, this.body)
    tint(255, this.transp);
    image(this.image, this.body.position.x, this.body.position.y,  50, 50)
    pop();
   }
  }
};