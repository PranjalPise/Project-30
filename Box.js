class Box {
    constructor(x,y,width,height) {
      var options = {
          density:1.2,
          friction:1,
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,{options});
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
      // if(this.body.speed<3){
      //   super.display();
      // }
      // else{
      //   World.remove(world,this.body);
      //   push();
      //   this.visibility=this.visibility-5;
      //   tint(255,this.visibility);
      //   pop();
      // }
    }
    
};

 