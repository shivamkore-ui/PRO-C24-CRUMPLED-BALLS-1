class Paper {
    constructor (x,y,w){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.body = Bodies.circle(x,y,w,options)

        World.add(world, this.body)
    }

    display(){
        fill("pink")
        circle(this.body.position.x, this.body.position.y, 50)
    }
}