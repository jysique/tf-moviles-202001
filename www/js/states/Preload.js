Preload = function (game) {};

Preload.prototype = {
  preload: function () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.game.load.image("bullet","assets/images/bullet.png");
    this.game.load.image("button","assets/images/btn.png");
    this.game.load.image("player","assets/images/player.png");
    this.game.load.image("space","assets/images/space.png");

    this.game.load.image("enemyParticle","assets/images/enemyParticle.png");
    
    this.game.load.spritesheet("greenEnemy","assets/images/green_enemy.png",50,46,3);
    this.game.load.spritesheet("redEnemy","assets/images/red_enemy.png",50,46,3);
    this.game.load.spritesheet("yellowEnemy","assets/images/yellow_enemy.png",50,46,3);

    // this.game.load.tilemap("level0","assets/levels/demo-level.json",null,Phaser.Tilemap.TILED_JSON);
    // this.game.load.tilemap("level1","assets/levels/level1.json",null,Phaser.Tilemap.TILED_JSON);
    // this.game.load.tilemap("level2","assets/levels/level2.json",null,Phaser.Tilemap.TILED_JSON);

    this.game.load.text("level1", "assets/data/level1.json");
    this.game.load.text("level2", "assets/data/level2.json");
    this.game.load.text("level3", "assets/data/level3.json");
  },
  create: function () {
    this.state.start("Menu");
  },
};