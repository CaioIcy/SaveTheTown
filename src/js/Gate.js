//Gate Class

function Gate( x, y, hp, radius, sprite){

	this.x= x;
	this.y= y;
	this.health= hp;
	this.sprite;
	this.radius = radius;
	
	this.render = function(){
		d.drawImage(sprite, x, y, sprite.width, sprite.height);
		d.drawImage(sprite, 600, 100, 30, 30);
	};
}
