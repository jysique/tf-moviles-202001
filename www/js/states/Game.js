Game = function(){}

Game.prototype = {
    init:function(){
        this.BULLET_SPEED = 200;
    },
    create:function(){
        this.background = this.game.add.tileSprite(0,0,this.game.world.width,this.game.world.height,"space");
        this.background.autoScroll(30,0);
        this.createPlayer();
        this.initBullets();
    },
    createPlayer:function(){
        this.player = this.game.add.sprite(this.game.world.centerX/2, this.game.world.height/2,'player');
        this.player.anchor.setTo(0.5);
        this.player.angle = 90;
        this.physics.arcade.enable(this.player);
        this.player.collideWorldBounds = true;
        this.playermovement();
    },
    initBullets:function(){
        this.playerBullets = this.game.add.group();
        this.playerBullets.enableBody = true;
    },
    createPlayerBullets:function(){
        let bullet = this.playerBullets.getFirstDead();
        if(!bullet){
          bullet = new PlayerBullet(this.game,this.player.x,this.player.y);
        }else{
          bullet.reset(this.player.x,this.player.y);
        }
        this.playerBullets.add(bullet);
        bullet.body.velocity.x = this.BULLET_SPEED;
      },
    playermovement:function(){
        this.keys = this.input.keyboard.createCursorKeys();
        this.spacekey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.qkey = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
    },
    update:function(){
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        
        if(this.keys.left.isDown){
            this.player.body.velocity.x = -300;
            console.log();
		}

		if(this.keys.right.isDown){
			this.player.body.velocity.x = 300;
		}

		if(this.keys.up.isDown) {
			this.player.body.velocity.y = -300;
		}

		if(this.keys.down.isDown){
			this.player.body.velocity.y = 300;
        }
        if(this.spacekey.isDown){
            // console.log("hola");
            this.spacekey.onDown.add(this.createPlayerBullets,this);
        }

    }
}