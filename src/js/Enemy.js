//Enemy Class

function Enemy( posX, posY, speed, sprite) {

	this.speed = speed;
	this.posX = posX;
	this.posY = posY;
	this.sprite = sprite;
	
	//Update
	this.update = function(){
		
	};
	
	//Render
	this.render = function(){
		d.fillRect(this.posX, this.posY,30,30);
	};
	
	this.findGate = function(){
		
		nextGate = "GOLD";
		distance = Math.sqrt((Math.pow((this.posX - GOLD_GATE_X_CENTER),2) + Math.pow((this.posY - GOLD_GATE_Y_CENTER),2)));
		if (Math.sqrt((Math.pow((this.posX - RED_GATE_X_CENTER),2) + Math.pow((this.posY - RED_GATE_Y_CENTER),2)))<distance){
			distance = Math.sqrt((Math.pow((this.posX - RED_GATE_X_CENTER),2) + Math.pow((this.posY - RED_GATE_Y_CENTER),2)));
			nextGate = "RED";
		}
		if (Math.sqrt((Math.pow((this.posX - PURPLE_GATE_X_CENTER),2) + Math.pow((this.posY - PURPLE_GATE_Y_CENTER),2)))<distance){
			distance = Math.sqrt((Math.pow((this.posX - PURPLE_GATE_X_CENTER),2) + Math.pow((this.posY - PURPLE_GATE_Y_CENTER),2)));
			nextGate = "PURPLE";
		}
		if (Math.sqrt((Math.pow((this.posX - BLUE_GATE_X_CENTER),2) + Math.pow((this.posY - BLUE_GATE_Y_CENTER),2)))<distance){
			distance = Math.sqrt((Math.pow((this.posX - BLUE_GATE_X_CENTER),2) + Math.pow((this.posY - BLUE_GATE_Y_CENTER),2)));
			nextGate = "BLUE";
		}
		return nextGates;
	};
	
}
