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
	
	this.moveInCircle = function(){
		this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
		this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
		this.posMovementStart -= this.speed;
	}
	
	this.validateForMovement = function(xpos, ypos){
		var result = false;
		for(i=PURPLE_GATE;i<=4;i++){
			if(this.movingToGate==i && this.posX.toFixed(1) != xpos && this.posY.toFixed(1) != ypos) result = true;
		}
		return result;
	};
	
	this.validateForGate = function(xpos, ypos){
		var result = false;
		if((this.posX - xpos)<=FLOATFIX && (this.posY - ypos)<= FLOATFIX) result = true;
		return result;
	};
	
	this.followCircle = function(){
		for(i = 0; i<8; i+=2){
			if(this.validateForMovement(ABC[i]), ABC[i+1]){
				this.moveInCircle();
			}
		}
	};
	
	this.checkGate = function(){
		for(i = 0; i<8; i+=2){
			if(this.validateForGate(ABC[i]), ABC[i+1]){
				//alert(i);
			}
		}
	};
	
	//Move
	this.move = function(){
		this.followCircle();
		this.checkGate();
	}
	
	//Update
	this.update = function(){
		this.move();
	};
	
	//Render
	this.render = function(){
		d.drawImage(sprite, player.posX, player.posY, sprite.width, sprite.height);
	};
	
}
