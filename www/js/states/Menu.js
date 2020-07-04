Menu = function () {}
Menu.prototype = {
    create:function(){
		this.background = this.game.add.sprite(0,0,'background');
		this.hospital_sf = this.game.add.audio("hospital");
		this.hospital_sf.play();

		this.titleText1 = this.game.add.text(10,100,'Coronavirus');
		// this.titleText1.anchor.setTo(1,0.5);
		this.titleText1.scale.setTo(1,1);
		this.titleText2 = this.game.add.text(10,150,'Reloaded');
		// this.titleText2.anchor.setTo(1,0.5);
		this.titleText2.scale.setTo(1,1);

		this.playText1 = this.game.add.text(470,200,'Play');
		this.playText1.anchor.setTo(1,0.5);

		this.intruccText2 = this.game.add.text(470,300,'Intrucciones');
		this.intruccText2.anchor.setTo(1,0.5);

		this.playbutton = this.game.add.sprite(520,200,'button');
		this.playbutton.anchor.setTo(0.5);
		this.playbutton.scale.setTo(0.3,0.3);
		this.playbutton.inputEnabled = true;
		this.playbutton.events.onInputDown.add(this.goPlay,this);


		this.intruccbutton = this.game.add.sprite(520,300,'button');
		this.intruccbutton.anchor.setTo(0.5);
		this.intruccbutton.scale.setTo(0.3,0.3);
		this.intruccbutton.inputEnabled = true;
		this.intruccbutton.events.onInputDown.add(this.goInstrucc,this);

	},
	goPlay:function(){
		localStorage.points = 1;
		this.hospital_sf.stop();
		this.state.start("Selection");
	},
	goInstrucc:function(){
		this.hospital_sf.stop();
		this.state.start("Instrucciones");
	}
};