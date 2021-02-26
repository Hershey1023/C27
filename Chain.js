class Chain {
    constructor(bodyA, bodyB){
        var option = {
            bodyA:bodyA, 
            bodyB:bodyB,
            length:20,
            stiffness:0.03
        }
        this.chain = Matter.Constraint.create(option)
        World.add(world, this.chain)
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        line(bird.body.position.x, bird.body.position.y, log6.body.position.x, log6.body.position.y)
    }
}