//Player Class

function Player(amplitudeX, amplitudeY, speed, posMovementStart, x, y, radius, sprite) {
	this.amplitudeX = amplitudeX;
	this.amplitudeY = amplitudeY;
	this.speed = speed;
	this.posMovementStart = posMovementStart;
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.sprite = sprite;
	this.movingToGate = PURPLE_GATE;
	this.radius = radius;
	this.currentGate = PURPLE_GATE;
	this.signal="+"
	this.isMoving = false;
	this.score=0;
	this.health=200;
	
	//Move
	this.move = function(){
		if (this.movingToGate==PURPLE_GATE && this.x.toFixed(1) != 390.0 && this.y.toFixed(1) != 60.0){
			this.x = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.y = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			if(this.signal=="-")
				this.posMovementStart -= this.speed;
			else if(this.signal=="+")
				this.posMovementStart += this.speed;
			
		}
		else if (this.movingToGate==GOLD_GATE && !(this.x.toFixed(1) == 213.8 && this.y.toFixed(1) == 432.2)){
			this.x = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.y = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			if(this.signal=="-")
				this.posMovementStart -= this.speed;
			else if(this.signal=="+")
				this.posMovementStart += this.speed;
		}
		else if (this.movingToGate==BLUE_GATE && !((this.x.toFixed(1) >= 389.0 && this.x.toFixed(1) < 391.0) && (this.y.toFixed(1) >= 519.0 && this.y.toFixed(1) < 392.0))){
			this.x = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.y = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			if(this.signal=="-")
				this.posMovementStart -= this.speed;
			else if(this.signal=="+")
				this.posMovementStart += this.speed;
		}
		else if (this.movingToGate==RED_GATE && this.x.toFixed(1) != 565.0 && this.y.toFixed(1) != 439.2){
			this.x = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.y = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			if(this.signal=="-")
				this.posMovementStart -= this.speed;
			else if(this.signal=="+")
				this.posMovementStart += this.speed;
		}
	}
	
	this.identifyGate = function(){
	
		if(this.x >= PURPLE_GATE_X_POSITION && this.x <= PURPLE_GATE_X_POSITION + purple_gate.width){
			if(this.y >= PURPLE_GATE_Y_POSITION && this.y <= PURPLE_GATE_Y_POSITION + purple_gate.height)
				this.currentGate = PURPLE_GATE;
		}
				
		else if(this.x >= GOLD_GATE_X_POSITION && this.x <= GOLD_GATE_X_POSITION + gold_gate.width){
			if(this.y >= GOLD_GATE_Y_POSITION && this.y <= GOLD_GATE_Y_POSITION + gold_gate.height)
				this.currentGate = GOLD_GATE;
		}
				
		else if(this.x >= 357 && this.x < 439){
			if(this.y >= 497 && this.y < 579)
				this.currentGate = BLUE_GATE;
		}
				
		else if(this.x >= RED_GATE_X_POSITION && this.x <= RED_GATE_X_POSITION + red_gate.width){
			if(this.y >= RED_GATE_Y_POSITION && this.y <= RED_GATE_Y_POSITION + red_gate.height)
				this.currentGate = RED_GATE;	
		}
	}
	
	this.getDirection = function(){
		if(this.currentGate == PURPLE_GATE){ 
			if(this.movingToGate == GOLD_GATE){
				this.signal="-";
			}
			else if(this.movingToGate == BLUE_GATE){
				this.signal="-";
			}
			else if(this.movingToGate == RED_GATE){
				this.signal="+";
			}
		}
		else if(this.currentGate == GOLD_GATE){ 
			if(this.movingToGate == PURPLE_GATE){
				this.signal="+";
			}
			else if(this.movingToGate == BLUE_GATE){
				this.signal="-";
			}
			else if(this.movingToGate == RED_GATE){
				this.signal="-";
			}
		}
		else if(this.currentGate == BLUE_GATE){ 
			if(this.movingToGate == PURPLE_GATE){
				this.signal="+";
			}
			else if(this.movingToGate == GOLD_GATE){
				this.signal="+";
			}
			else if(this.movingToGate == RED_GATE){
				this.signal="-";
			}
		}
		else{ 
			if(this.movingToGate == PURPLE_GATE){
				this.signal="-";
			}
			else if(this.movingToGate == BLUE_GATE){
				this.signal="+";
			}
			else if(this.movingToGate == GOLD_GATE){
				this.signal="+";
			}
		}
		
	}
	
	//Update
	this.update = function(){
	
		if(this.health<=0)this.health=0;
	
		this.identifyGate();
	
		this.getDirection();
		
		if(this.movingToGate == this.currentGate ){	
			this.isMoving = false;
		}
		else this.isMoving = true;
		
		//alert(this.movingToGate + " == " + this.currentGate);
		
		if(this.isMoving == true){
			this.move();
		}
	};
	
	//Render
	this.render = function(){
		d.drawImage(sprite, player.x, player.y, sprite.width, sprite.height);
		drawBar(20, 80, 100, 30, this.health/2, true, "white");
		d.font = "11pt Arial";
		d.fillText(Math.floor(this.health) + " / " + 200 ,44,100);
		d.fillText("MORALE",44,125);
	};
	
}
