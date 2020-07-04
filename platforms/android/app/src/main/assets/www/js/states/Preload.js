Preload = function (game) {};

Preload.prototype = {
  preload: function () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.game.load.image("button","assets/images/btn.png");
    this.game.load.image("space","assets/images/space.png");
    this.game.load.image("back","assets/images/celeste.png");

    this.game.load.image("background","assets/images/background.png");
    this.game.load.image("enemyParticle","assets/images/enemyParticle.png");
    

    this.game.load.spritesheet("greenEnemy","assets/images/green_enemy.png",50,46,3);
    this.game.load.spritesheet("redEnemy","assets/images/red_enemy.png",50,46,3);
    this.game.load.spritesheet("yellowEnemy","assets/images/yellow_enemy.png",50,46,3);

    //DEL GAME

    this.game.load.spritesheet("virus","assets/images/virus.png",45,42);
    this.game.load.image("bullet","assets/images/laser.png");
    this.game.load.spritesheet("player","assets/images/doctor.png",222,220);
    this.game.load.spritesheet("player_red","assets/images/doctor_red.png",222,220);

    this.game.load.text("level1", "assets/data/level1.json");
    this.game.load.text("level2", "assets/data/level2.json");
    this.game.load.text("level3", "assets/data/level3.json");

    this.load.audio("hospital","assets/audio/sound_effect_hospital.mp3");
    this.load.audio("centro_pokemon","assets/audio/Pokémon Rojo FuegoVerde Hoja OST - 19 - Centro Pokémon.mp3");
  },
  create: function () {
    this.state.start("Menu");
  },
};