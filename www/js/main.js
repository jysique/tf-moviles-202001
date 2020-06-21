window.onload = function () {
  let game = new Phaser.Game(600, 350, Phaser.AUTO);
  // let game = new Phaser.Game("100%","100%",Phaser.AUTO);
  // let game = new Phaser.Game(2280, 2690, Phaser.AUTO);
  //nombre del diccionario, nombra de la clase
  game.state.add("Preload", Preload);
  game.state.add("Gameover", Gameover);
  game.state.add("Instrucciones", Instrucciones);
  game.state.add("Game", Game);
  game.state.add("Menu", Menu);
  game.state.start("Preload");
};
