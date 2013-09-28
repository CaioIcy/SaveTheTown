//Enemy Class

function Enemy( posX, posY, speed, radius, sprite) {

	this.speed = speed;
	this.posX = posX;
	this.posY = posY;
	this.sprite = sprite;
	this.radius = radius;
	
	move = true;
	//Update
	this.update = function(){
		for(i=0;i<gate.length;i++)
			if(!circleCollision(this,gate[i]))
				move = false
		if(move){
			if(this.findGate()==PURPLE_GATE){
				if(this.posX<(PURPLE_GATE_X_CENTER)){
					this.posX+=this.speed;
				}
				else {
					this.posX-=this.speed;
				}
				if(this.posY<(PURPLE_GATE_Y_CENTER)){
					this.posY+=this.speed;
				}
				else {
					this.posY-=this.speed;
				}
			}
			else if(this.findGate()==GOLD_GATE){
				if(this.posX<(GOLD_GATE_X_CENTER)){
					this.posX+=this.speed;
				}
				else {
					this.posX-=this.speed;
				}
				if(this.posY<(GOLD_GATE_Y_CENTER)){
					this.posY+=this.speed;
				}
				else {
					this.posY-=this.speed;
				}
			}
			else if(this.findGate()==BLUE_GATE){
				if(this.posX<(BLUE_GATE_X_CENTER)){
					this.posX+=this.speed;
				}
				else {
					this.posX-=this.speed;
				}
				if(this.posY<(BLUE_GATE_Y_CENTER)){
					this.posY+=this.speed;
				}
				else {
					this.posY-=this.speed;
				}
			}
			else {
				if(this.posX<(RED_GATE_X_CENTER)){
					this.posX+=this.speed;
				}
				else {
					this.posX-=this.speed;
				}
				if(this.posY<(RED_GATE_Y_CENTER)){
					this.posY+=this.speed;
				}
				else {
					this.posY-=this.speed;
				}
			}
		}
	};
	
	//Render
	this.render = function(){
		d.fillRect(this.posX, this.posY,30,30);
	};
	
	this.findGate = function(){
		
		var nextGate = 2;
		distance = Math.sqrt((Math.pow((this.posX - GOLD_GATE_X_CENTER),2) + Math.pow((this.posY - GOLD_GATE_Y_CENTER),2)));
		if (Math.sqrt((Math.pow((this.posX - RED_GATE_X_CENTER),2) + Math.pow((this.posY - RED_GATE_Y_CENTER),2)))<distance){
			distance = Math.sqrt((Math.pow((this.posX - RED_GATE_X_CENTER),2) + Math.pow((this.posY - RED_GATE_Y_CENTER),2)));
			nextGate = 4;
		}
		if (Math.sqrt((Math.pow((this.posX - PURPLE_GATE_X_CENTER),2) + Math.pow((this.posY - PURPLE_GATE_Y_CENTER),2)))<distance){
			distance = Math.sqrt((Math.pow((this.posX - PURPLE_GATE_X_CENTER),2) + Math.pow((this.posY - PURPLE_GATE_Y_CENTER),2)));
			nextGate = 1;
		}
		if (Math.sqrt((Math.pow((this.posX - BLUE_GATE_X_CENTER),2) + Math.pow((this.posY - BLUE_GATE_Y_CENTER),2)))<distance){
			distance = Math.sqrt((Math.pow((this.posX - BLUE_GATE_X_CENTER),2) + Math.pow((this.posY - BLUE_GATE_Y_CENTER),2)));
			nextGate = 3;
		}
		return nextGate;
	};
	
}
