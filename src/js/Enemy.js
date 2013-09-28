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
	
}
