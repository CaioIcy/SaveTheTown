function Player(x,y,speedX) {
	this.x=x;
	this.y=y;
	this.speedX=speedX;
	
	//Update
	this.update = function(){
		this.x+=this.speedX;
	};
	
}