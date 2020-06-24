Game = function(){}

Game.prototype = {
    init:function(currentLevel,total_infected){
        this.PLAYER_SPEED = 300;
        this.currentLevel = currentLevel || 1;
        this.numLevels = 3;

        
        if (total_infected == null) {
            total_infected = 0;
        }
        this.TOTAL_INFECTED = total_infected;
        
        this.score = this.TOTAL_INFECTED / this.TOTAL_PERSONAS * 100;
        this.score = 0;
        localStorage.points = 100;
        this.maxScore = localStorage.points;
        this.BULLET_SPEED = 500;
        this.TOTAL_PERSONAS = 15;
    },
    create:function(){
        this.background = this.game.add.tileSprite(0,0,this.game.world.width,this.game.world.height,"back");
        this.background.autoScroll(-30,0);
        this.createPlayer();
        this.initBullets();
        this.initEnemies();
        this.loadLevel();
        this.hud();
    },
    createPlayer:function(){
        if (localStorage.player == 1) {
            this.player = this.game.add.sprite(this.game.world.centerX/2, this.game.world.height/2,'player');
        }else if (localStorage.player == 2){
            this.player = this.game.add.sprite(this.game.world.centerX/2, this.game.world.height/2,'player_red');
        }
        
        this.player.anchor.setTo(0.5);
        this.player.scale.setTo(0.2);
        this.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        this.player.animations.add("hit", [1,0,1],60,false);
        this.initPlayermovement();
    },
    initBullets:function(){
        this.playerBullets = this.game.add.group();
        this.playerBullets.enableBody = true;
        this.typeBullet = 1;
    },
    createPlayerBullets:function(){
        let bullet = this.playerBullets.getFirstDead();

        if(!bullet){
          bullet = new PlayerBullet(this.game,this.player.x,this.player.y,this.typeBullet);
        }else{
          bullet.reset(this.player.x,this.player.y,this.typeBullet);
        }
        this.player.play("hit");
        this.playerBullets.add(bullet);
        bullet.body.velocity.x = this.BULLET_SPEED;
      },
    loadLevel(){
        if (this.currentLevel == this.numLevels) {
            localStorage.win = 1;
            this.state.start("Gameover");
        }
        this.currentIndexEnemy = 0;
        this.levelData = JSON.parse(this.game.cache.getText("level"+this.currentLevel));
        this.endOfLevelTimer = this.game.time.events.add(this.levelData.duration * 500,function(){
            // this.orchestra.stop();
            if(this.currentLevel< this.numLevels){
                this.currentLevel++;
            }
            
            this.game.state.start("Game",true,false,this.currentLevel,this.TOTAL_INFECTED);
        },this);
        this.scheduleNextEnemy();
    },
    initPlayermovement:function(){
        this.keys = this.input.keyboard.createCursorKeys();
        this.spacekey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.qkey = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
    },
    initEnemies:function(){
        this.enemies = this.game.add.group();
        this.enemies.enableBody = true;
    },
    scheduleNextEnemy:function(){
        let nextEnemy = this.levelData.enemies[this.currentIndexEnemy];

        if(nextEnemy){
            let nextTime = 500*(this.currentIndexEnemy == 0 ? 1 : 
                    this.levelData.enemies[this.currentIndexEnemy-1].time);
            this.nextEnemyTimer = this.game.time.events.add(nextTime,function(){
                let randy =this.game.rnd.integerInRange(50, this.game.world.width-300);
                console.log("S:" + this.currentIndexEnemy);
                console.log("next:" + nextTime);
                this.createEnemy(this.game.world.height +300, randy,
                                nextEnemy.health,nextEnemy.key,
                                nextEnemy.scale,nextEnemy.speedX,nextEnemy.speedY)
                this.currentIndexEnemy++;
                this.scheduleNextEnemy();
            },this);                                                    
        }
    },
    createEnemy:function(x,y,health,key,scale,speedX,speedY){
        let enemy = this.enemies.getFirstDead();
        if(!enemy){
            enemy = new Enemy(this.game,x,y,key,health);
            this.enemies.add(enemy);
        }
        enemy.reset(x,y,scale,key,health,speedX,speedY);
    },
    update:function(){
        this.playerMovement();
        this.game.physics.arcade.overlap(this.playerBullets,this.enemies,this.damageEnemy,null,this);

        this.enemies.forEachAlive(function(enemy){
            if(enemy.x< -50){
                let randC = this.game.rnd.integerInRange(1,6);
                this.TOTAL_INFECTED+= randC;
            }
        },this);

        if (this.TOTAL_INFECTED >= this.TOTAL_PERSONAS) {
            localStorage.win = 0;
            this.state.start("Gameover");
        }

        this.score = this.TOTAL_INFECTED / this.TOTAL_PERSONAS * 100;
        this.scoreText.setText("Infectados:" +Math.ceil(this.score) +" %");

        if(this.score <this.maxScore){
            localStorage.points = this.score;
        }
    },
    damageEnemy:function(bullet,enemy){
        // console.log("hola1");
        if (this.typeBullet == 1) {
            enemy.damage(10);
        }else if(this.typeBullet == 2){
            enemy.damage(30);
        }else if(this.typeBullet == 3){
            enemy.damage(50);
        }
        
        bullet.kill();
    },
    playerMovement:function(){
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if(this.keys.left.isDown){
            this.player.body.velocity.x = -this.PLAYER_SPEED;
		}

		if(this.keys.right.isDown){
			this.player.body.velocity.x = this.PLAYER_SPEED;
		}

		if(this.keys.up.isDown) {
			this.player.body.velocity.y = -this.PLAYER_SPEED;
		}

		if(this.keys.down.isDown){
			this.player.body.velocity.y = this.PLAYER_SPEED;
        }
        if(this.spacekey.isDown){
            this.spacekey.onDown.add(this.createPlayerBullets,this);
        }
        this.qkey.onDown.add(this.changeTypeBullets,this);
        
    },
    changeTypeBullets:function(){
        this.typeBullet++;
        if (this.typeBullet > 3) {
            this.typeBullet = 1;
        }
    },
    hud:function(){
        
        this.levelText = this.game.add.text(0,0,'Level: '+ this.currentLevel);
		// this.levelText.fill = "#FFFFFF";
        this.levelText.x = 20;
        
		this.scoreText = this.game.add.text(0,0,'Infectados: '+ this.score + " %");
		// this.scoreText.fill = "#FFFFFF";
        this.scoreText.x = 150;

	},
}