Menu = function () {}
Menu.prototype = {
    create:function(){
		this.playbutton = this.game.add.sprite(400,200,'button');
		this.playbutton.anchor.setTo(0.5);
		this.playbutton.scale.setTo(0.5,0.5);
		this.playbutton.inputEnabled = true;
		this.playbutton.events.onInputDown.add(this.goPlay,this);
	},
	goPlay:function(){
		localStorage.points = 1;
		this.state.start("Game");
	}
};