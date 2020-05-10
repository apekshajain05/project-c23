class building{
    constructor(x1,y1,x2,y2,x3,y3){
            var options={
                isStatic:true
            }
            this.body=Bodies.polygon(x1,y1,x2,y2,x3,y3,options);
            this.width;
            this.height;
            World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        polygon();
    
    }


}