//Enemy Class

function Enemy( x, y, speed, radius, sprite, minX, maxX, timeCounter ) {

	this.speed = speed;
	this.x = x;
	this.y = y;
	this.sprite = sprite;
	this.radius = radius;
	this.move = true;
	this.minX = minX;
	this.maxX = maxX;
	this.timeCounter = timeCounter;
	this.collidingWithGate = false;
	
	this.verifyGateCollision = function(obj1,obj2){
			if(circleCollision(obj1,obj2)){
				this.move = false;
				this.collidingWithGate = true;
			}
			else{
				this.collidingWithGate = false;
			}
	}
	this.verifyCityCollision = function(obj1,obj2){
			if(circleCollision(obj1,obj2)){
			}
	}
	
	this.verifyPlayerCollision = function(obj1,obj2){
			if(collision(obj1,obj2)){
				alert("to de boa");
			}
	}
	
	//Update
	this.update = function(){
		
		if(this.move){
		
			if(this.findGate()==PURPLE_GATE){
			
				if(this.x<(PURPLE_GATE_X_CENTER)){
					this.x+=ENEMY_SPEED;
				}
				else {
					this.x-=ENEMY_SPEED;
				}
				
				if(this.y<(PURPLE_GATE_Y_CENTER)){
					this.y+=ENEMY_SPEED;
				}
				else {
					this.y-=ENEMY_SPEED;
				}
			}
			else if(this.findGate()==GOLD_GATE){
			
				if(this.x<(GOLD_GATE_X_CENTER)){
					this.x+=this.speed;
				}
				else {
					this.x-=this.speed;
				}
				
				if(this.y<(GOLD_GATE_Y_CENTER)){
					this.y+=this.speed;
				}
				else {
					this.y-=this.speed;
				}
			}
			else if(this.findGate()==BLUE_GATE){
			
				if(this.x<(BLUE_GATE_X_CENTER)){
					this.x+=this.speed;
				}
				else {
					this.x-=this.speed;
				}
				
				if(this.y<(BLUE_GATE_Y_CENTER)){
					this.y+=this.speed;
				}
				else {
					this.y-=this.speed;
				}
			}
			else {
			
				if(this.x<(RED_GATE_X_CENTER)){
					this.x+=this.speed;
				}
				else {
					this.x-=this.speed;
				}
				
				if(this.y<(RED_GATE_Y_CENTER)){
					this.y+=this.speed;
				}
				else {
					this.y-=this.speed;
				}
			}
		}
	};
	
	//Render
	this.render = function(){
		d.drawImage(this.sprite,this.x, this.y);
	};
	
	this.bePacified = function(){
		d.fillRect(this.x,this.y,30,30);

	}
	
	this.findGate = function(){
		
		var nextGate = 2;
		var distanceToGate = Math.sqrt((Math.pow((this.x - GOLD_GATE_X_CENTER),2) + Math.pow((this.y - GOLD_GATE_Y_CENTER),2)));
		if (Math.sqrt((Math.pow((this.x - RED_GATE_X_CENTER),2) + Math.pow((this.y - RED_GATE_Y_CENTER),2)))<distanceToGate){
			distanceToGate = Math.sqrt((Math.pow((this.x - RED_GATE_X_CENTER),2) + Math.pow((this.y - RED_GATE_Y_CENTER),2)));
			nextGate = 4;
		}
		if (Math.sqrt((Math.pow((this.x - PURPLE_GATE_X_CENTER),2) + Math.pow((this.y - PURPLE_GATE_Y_CENTER),2)))<distanceToGate){
			distanceToGate = Math.sqrt((Math.pow((this.x - PURPLE_GATE_X_CENTER),2) + Math.pow((this.y - PURPLE_GATE_Y_CENTER),2)));
			nextGate = 1;
		}
		if (Math.sqrt((Math.pow((this.x - BLUE_GATE_X_CENTER),2) + Math.pow((this.y - BLUE_GATE_Y_CENTER),2)))<distanceToGate){
			distanceToGate = Math.sqrt((Math.pow((this.x - BLUE_GATE_X_CENTER),2) + Math.pow((this.y - BLUE_GATE_Y_CENTER),2)));
			nextGate = 3;
		}
		return nextGate;
	};
	
}
