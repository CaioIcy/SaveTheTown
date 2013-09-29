//Player Class

function Player(amplitudeX, amplitudeY, speed, posMovementStart, posX, posY, radius, sprite) {
	this.amplitudeX = amplitudeX;
	this.amplitudeY = amplitudeY;
	this.speed = speed;
	this.posMovementStart = posMovementStart;
	this.posX = posX;
	this.posY = posY;
	this.sprite = sprite;
	this.movingToGate = 0;
	this.radius = radius;
	this.currentGate = PURPLE_GATE;
	this.signal="+"
	this.isMoving = false;
	
	//Move
	this.move = function(){
		if (this.movingToGate==PURPLE_GATE && this.posX.toFixed(1) != 390.0 && this.posY.toFixed(1) != 60.0){
			this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			if(this.signal=="-")
				this.posMovementStart -= this.speed;
			else if(this.signal=="+")
				this.posMovementStart += this.speed;
			
		}
		else if (this.movingToGate==GOLD_GATE && this.posX.toFixed(1) != 213.8 && this.posY.toFixed(1) != 432.2){
			this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			if(this.signal=="-")
				this.posMovementStart -= this.speed;
			else if(this.signal=="+")
				this.posMovementStart += this.speed;
		}
		else if (this.movingToGate==BLUE_GATE && this.posX.toFixed(1) != 390.0 && this.posY.toFixed(1) != 520.0){
			this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			if(this.signal=="-")
				his.posMovementStart -= this.speed;
			else if(this.signal=="+")
				this.posMovementStart += this.speed;
		}
		else if (this.movingToGate==RED_GATE && this.posX.toFixed(1) != 565.0 && this.posY.toFixed(1) != 439.2){
			this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			if(this.signal=="-")
				this.posMovementStart -= this.speed;
			else if(this.signal=="+")
				this.posMovementStart += this.speed;
		}
	}
	
	this.identifyGate = function(){
	
		if(this.posX >= PURPLE_GATE_X_POSITION && this.posX <= PURPLE_GATE_X_POSITION + purple_gate.width){
			if(this.posY >= PURPLE_GATE_Y_POSITION && this.posY <= PURPLE_GATE_Y_POSITION + purple_gate.height)
				this.currentGate = PURPLE_GATE;
		}
				
		else if(this.posX >= GOLD_GATE_X_POSITION && this.posX <= GOLD_GATE_X_POSITION + gold_gate.width){
			if(this.posY >= GOLD_GATE_Y_POSITION && this.posY <= GOLD_GATE_Y_POSITION + gold_gate.height)
				this.currentGate = GOLD_GATE;
		}
				
		else if(this.posX >= BLUE_GATE_X_POSITION && this.posX <= BLUE_GATE_X_POSITION + blue_gate.width){
			if(this.posY >= BLUE_GATE_Y_POSITION && this.posY <= BLUE_GATE_Y_POSITION + blue_gate.height)
				this.currentGate = BLUE_GATE;
		}
				
		else if(this.posX >= RED_GATE_X_POSITION && this.posX <= RED_GATE_X_POSITION + red_gate.width){
			if(this.posY >= RED_GATE_Y_POSITION && this.posY <= RED_GATE_Y_POSITION + red_gate.height)
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
	
		this.identifyGate();
	
		this.getDirection();
		
		if(this.movingToGate != this.currentGate ){	
			this.isMoving = true;
		}
			
		if(this.isMoving == true){
			this.move();
		}

	};
	
	//Render
	this.render = function(){
		d.drawImage(sprite, player.posX, player.posY, sprite.width, sprite.height);
	};
	
}
