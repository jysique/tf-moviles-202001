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
  },
  create: function () {
    this.state.start("Menu");
  },
};