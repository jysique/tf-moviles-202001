Gameover = function(){}

Gameover.prototype = {
    init:function(){
        
    },
    create:function(){
        this.background = this.game.add.tileSprite(0,0,this.game.world.width,this.game.world.height,"space");
        this.background.autoScroll(30,0);

        this.player = this.game.add.sprite(this.game.world.centerX/2, this.game.world.height/2,'player');
        this.player.anchor.setTo(0.5);
        this.player.angle = 90;
    },
    initEnemies:function(){
       
    },
}