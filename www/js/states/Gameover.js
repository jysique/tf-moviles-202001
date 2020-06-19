Gameover = function(){}

Gameover.prototype = {
    init:function(){
        
    },
    create:function(){
        this.background = this.game.add.tileSprite(0,0,this.game.world.width,this.game.world.height,"space");
        this.background.autoScroll(30,0);
        console.log("l " + localStorage.points);
        this.hud();
    },
    hud:function(){
        
		this.gameoverText = this.game.add.text(this.game.world.width/2-100,100,'Perdiste');
        this.gameoverText.fill = "#FFFFFF";
        

        this.maxScoreText = this.game.add.text(this.game.world.width/2-100,200,'MaxScore: ' + Math.ceil(localStorage.points) + " %");
		this.maxScoreText.fill = "#FFFFFF";
		// for(let i=0;i<this.playerLifes;i++){
		// 	let life = this.game.add.sprite(0,0,'player');

		// 	// life.center.setTo(0.5);
		// 	life.scale.setTo(0.5);
		// 	life.anchor.setTo(0.5); //añadido
		// 	life.index = 0;
		// 	life.x = life.width  * i + 20; //añadido
		// 	life.y = life.height + 2; // añadido
		// 	this.lifes.add(life);
		// }
		// this.maxScoreText = this.game.add.text(0,0,'Max Score : ');
		// this.maxScoreText.fill = "#000000";
		// this.maxScoreText.x = this.game.width -200;

		if(localStorage.points!=null){
			// this.maxScoreText.text = "Max Score "+ parseInt(localStorage.points);
			// this.maxScoreText.setText("Max Score "+ parseInt(localStorage.points));
		}
	}
}