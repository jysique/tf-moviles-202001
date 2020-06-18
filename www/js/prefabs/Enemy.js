// const { help } = require("../../../platforms/android/cordova/lib/build");

Enemy = function(game,x,y,key,health){
    Phaser.Sprite.call(this,game,x,y,key);
    this.game = game;
    this.health = health+10;
    this.animations.add("getHit", [0,1,2,1,0],25,false);
    this.anchor.setTo(0.5);

    this.creatBullet = new Phaser.Signal();

    this.enemyTimer = this.game.time.create(false);
    this.enemyTimer.start();
    this.scheduleShooting();
    
}
Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(){
    if (this.position.x < 0.05 * this.game.world.width) {
        this.position.x = 0.05  * this.game.world.width +2;
        this.body.velocity *=-1;
    }
    if (this.position.x > 0.95 * this.game.world.width) {
        this.position.x = 0.95  * this.game.world.width - 2;
        this.body.velocity *=-1;
    }

    if (this.position.y > this.game.world.height) {
        this.kill();
    }
}
Enemy.prototype.damage = function(amount){
    Phaser.Sprite.prototype.damage.call(this,amount); //HERENCIA
    this.play("getHit");
    if (this.health <= 0) {
        let emitter = this.game.add.emitter(this.x,this.y,100);
        emitter.makeParticles("enemyParticle");
        emitter.minParticlesSpeed.setTo(-200,-200);
        emitter.maxParticlesSpeed.setTo(200,200);
        emitter.gravity = 0;
        emitter.start(true,500,null,100);
        this.enemyTimer.pause();

    }
}
Enemy.prototype.reset = function(x,y,scale,key,health,speedX,speedY){
    Phaser.Sprite.prototype.reset.call(this,x,y,health);
    this.loadTexture(key);
    this.scale.setTo(scale);
    this.body.velocity.x = speedX;
    this.body.velocity.y = speedY;
    this.enemyTimer.resume();
}


Enemy.prototype.scheduleShooting = function(){
    this.shoot();
    this.enemyTimer.add(Phaser.Timer.SECOND * 2,this.scheduleShooting,this);
}

Enemy.prototype.shoot = function(){
    this.creatBullet.dispatch(this.x,this.y);

}
