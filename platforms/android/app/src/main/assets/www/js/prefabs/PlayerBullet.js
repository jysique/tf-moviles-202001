PlayerBullet = function(game,x,y,type){
    Phaser.Sprite.call(this,game,x,y,"bullet");
    this.anchor.setTo(0.5);
    this.type = type;
    this.changeType();

    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.events.onOutOfBounds.add(function(){
        //console.log("me mori");
    },this);
}

PlayerBullet.prototype = Object.create(Phaser.Sprite.prototype);
PlayerBullet.prototype.constructor = PlayerBullet;

PlayerBullet.prototype.changeType = function(){
    if (this.type == 1) {
        this.scale.setTo(2,2);
    }
    else if(this.type == 2){
        this.scale.setTo(10,2);
    }
    else if(this.type == 3){
        this.scale.setTo(10,10);
    }
    
}

PlayerBullet.prototype.reset = function(x,y,type){
    Phaser.Sprite.prototype.reset.call(this,x,y);
    // this.loadTexture(key);
    this.type = type;
    this.changeType();
    // this.scale.setTo(type);
    // this.body.velocity.x = -speedX * 3;
    // this.body.velocity.y = speedY;
    // this.enemyTimer.resume();
}