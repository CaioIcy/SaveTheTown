//Gate Class

function Gate( x, y, hp, radius, sprite, icon){

	this.x = x;
	this.y = y;
	this.health = hp;
	this.sprite = sprite;
	this.originalSprite = sprite;
	this.icon = icon;
	this.radius = radius;
	this.cooldown = COOLDOWN;
	
	this.setSprite = function(sprt){
		this.sprite = sprt;
	};
	
	this.destroyGate = function(){
		this.health = 0;
		this.cooldown--;
		if(this.cooldown<=0){
			this.cooldown = COOLDOWN;
			this.health = GATE_MAXHEALTH;
			this.sprite = this.originalSprite;
		}
	};
	
	
	this.render = function(){
		if(this.health>0){
			d.drawImage(sprite, x, y, sprite.width, sprite.height);
		}
		else {
			d.drawImage(broken_gate, x, y, sprite.width, sprite.height);
		}
	};
	
	
	
}
