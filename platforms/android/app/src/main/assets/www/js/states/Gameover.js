Gameover = function(){}

Gameover.prototype = {
    init:function(){
        
    },
    create:function(){
        this.background = this.game.add.tileSprite(0,0,this.game.world.width,this.game.world.height,"back");
		// this.background.autoScroll(30,0);

		this.background.inputEnabled = true;
		this.background.events.onInputDown.add(this.goPlay,this);
		
        // console.log("l " + localStorage.points);
        this.hud();
	},
	goPlay:function(){
		localStorage.points = 1;
		this.state.start("Menu");
	},
    hud:function(){
        
		this.gameoverText = this.game.add.text(this.game.world.width/2-100,100,'0');
		if (localStorage.win == 0 ) {
			this.gameoverText = this.game.add.text(this.game.world.width/2-100,100,'Perdiste');
		}else if (localStorage.win = 1) {
			this.gameoverText = this.game.add.text(this.game.world.width/2-100,100,'Ganaste');
		}


		// this.gameoverText.fill = "#FFFFFF";
        

        this.maxScoreText = this.game.add.text(this.game.world.width/2-100,200,'MaxScore: ' + Math.ceil(localStorage.points) + " %");
		// this.maxScoreText.fill = "#FFFFFF";

	}
}