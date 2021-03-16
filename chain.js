class Chain {
constructor (bodyA,bodyB){
    var options = {
        bodyA:bird.body,
        bodyB:log6.body,
        stiffness:0.4,
        length:25
    }
    this.chain = Constraint.create (options)
    World.add(world,this.chain)

}
display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    strokeWeight(3);
    stroke("red")
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    

}


}