//Gate Class

function Gate(x,y,hp,sprite){

	this.x=x;
	this.y=y;
	this.health=hp;
	this.sprite;
	
	this.render = function(){
		d.drawImage(sprite, x, y, sprite.width, sprite.height);
	};
}
