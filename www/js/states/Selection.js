Selection = function () {}
Selection.prototype = {
    create:function(){
        this.background = this.game.add.tileSprite(0,0,this.game.world.width,this.game.world.height,"back");
        this.background.autoScroll(-30,0);

        this.hospital_sf = this.game.add.audio("hospital");
        this.hospital_sf.play();
        
		this.titleText1 = this.game.add.text(10,10,'Selection');

        this.initBackButton();
        localStorage.points = 1;
        
        this.character1 = this.game.add.sprite(200,150,'player');
        this.character1.anchor.setTo(0.5);
        this.character1.scale.setTo(0.7);
		this.character1.inputEnabled = true;
        this.character1.events.onInputDown.add(this.goPlayOne,this);
        
        this.character2 = this.game.add.sprite(400,150,'player_red');
        this.character2.anchor.setTo(0.5);
        this.character2.scale.setTo(0.7);
		this.character2.inputEnabled = true;
        this.character2.events.onInputDown.add(this.goPlayTwo,this);
	},
	goPlayOne:function(){
        this.hospital_sf.stop();
        localStorage.player = 1;
		this.state.start("Game");
    },
	goPlayTwo:function(){
        this.hospital_sf.stop();
        localStorage.player = 2;
		this.state.start("Game");
    },
    goBack:function(){
        this.hospital_sf.stop();
		localStorage.points = 1;
		this.state.start("Menu");
    },
    initPlayButton(){
		this.playText = this.game.add.text(470,300,'Play');
		this.playText.anchor.setTo(1,0.5);

		this.playbutton = this.game.add.sprite(520,300,'button');
		this.playbutton.anchor.setTo(0.5);
		this.playbutton.scale.setTo(0.3,0.3);
		this.playbutton.inputEnabled = true;
		this.playbutton.events.onInputDown.add(this.goPlay,this);
    },
    initBackButton(){
        this.backText = this.game.add.text(150,300,'Back');
		this.backText.anchor.setTo(1,0.5);

		this.backbutton = this.game.add.sprite(50,300,'button');
        this.backbutton.anchor.setTo(0.5);
        this.backbutton.scale.setTo(0.3,0.3);
        this.backbutton.angle = 180;
		this.backbutton.inputEnabled = true;
		this.backbutton.events.onInputDown.add(this.goBack,this);
    }
};