Instrucciones = function () {}
Instrucciones.prototype = {
    create:function(){
		this.background = this.game.add.sprite(0,0,'background');

		this.titleText1 = this.game.add.text(10,10,'Instrucciones');
        
        this.titleText1 = this.game.add.text(10,40,'Shoot : Space');
        this.titleText1 = this.game.add.text(10,70,'Cambiar arma : Q');

		this.playText1 = this.game.add.text(470,300,'Play');
		this.playText1.anchor.setTo(1,0.5);

		this.intruccText2 = this.game.add.text(150,300,'Back');
		this.intruccText2.anchor.setTo(1,0.5);

		this.playbutton = this.game.add.sprite(520,300,'button');
		this.playbutton.anchor.setTo(0.5);
		this.playbutton.scale.setTo(0.3,0.3);
		this.playbutton.inputEnabled = true;
		this.playbutton.events.onInputDown.add(this.goPlay,this);


		this.backbutton = this.game.add.sprite(50,300,'button');
        this.backbutton.anchor.setTo(0.5);
        this.backbutton.scale.setTo(0.3,0.3);
        this.backbutton.angle = 180;
		this.backbutton.inputEnabled = true;
		this.backbutton.events.onInputDown.add(this.goBack,this);

	},
	goPlay:function(){
		localStorage.points = 1;
		this.state.start("Game");
    },
    goBack:function(){
		localStorage.points = 1;
		this.state.start("Menu");
	}
};