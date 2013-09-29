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
	this.broken = false;
	this.doCooldown = false;
	
	this.fixGate = function(){
		this.doCooldown = false;
		this.cooldown = COOLDOWN;
		this.health = GATE_MAXHEALTH;
		this.broken = false;
	};
	
	this.destroyGate = function(){
		this.broken = true;
		this.health = -30;
		this.doCooldown = true;
	};
	
	this.render = function(){
		if(!this.broken){
			d.drawImage(sprite, x, y, sprite.width, sprite.height);
		}
		else{
			d.drawImage(broken_gate, x, y, broken_gate.width, broken_gate.height);
		}
	};
	
	
	
}
