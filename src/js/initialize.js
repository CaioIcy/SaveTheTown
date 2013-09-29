//This script will be the game initializer

var player = new Player( AMPLITUDE_X, AMPLITUDE_Y, CIRCLE_SPEED, MOVEMENT_START_POSITION, PLAYER_STARTING_X, PLAYER_STARTING_Y, PLAYER_RADIUS, playerSprite);

var enemy = new Array();
	for(i=0;i<NUMBER_OF_TROLLS_TO_SPAWN;i++){
	
		var trollSpawn = randomize(4);
			
		if(i==0) trollSpawn = randomize(3)+1;
			
		if(trollSpawn==PURPLE_GATE){
			enemy[i] = new Enemy( ENEMY_STARTING_X, -20, ENEMY_SPEED, ENEMY_RADIUS, troll,300,500,0);
		}
		else if(trollSpawn==GOLD_GATE){
			enemy[i] = new Enemy( ENEMY_STARTING_X, ENEMY_STARTING_Y, ENEMY_SPEED, ENEMY_RADIUS, troll,(-50),260,0);
		}
		else if(trollSpawn==BLUE_GATE){
			enemy[i] = new Enemy( ENEMY_STARTING_X, ENEMY_STARTING_Y, ENEMY_SPEED, ENEMY_RADIUS, troll,260,560,0);
		}
		else if(trollSpawn==RED_GATE){
			enemy[i] = new Enemy( ENEMY_STARTING_X, ENEMY_STARTING_Y, ENEMY_SPEED, ENEMY_RADIUS, troll,560,800,0);
		}
	}

var city = new City( CITY_STARTING_X, CITY_STARTING_Y, CITY_RADIUS, spriteCity);

var gate = new Array();
gate[PURPLE_GATE-1] = new Gate(PURPLE_GATE_X_POSITION, PURPLE_GATE_Y_POSITION, GATE_MAXHEALTH,GATE_RADIUS, purple_gate, icon_purple_gate);
gate[GOLD_GATE-1] = new Gate(GOLD_GATE_X_POSITION, GOLD_GATE_Y_POSITION, GATE_MAXHEALTH,GATE_RADIUS, gold_gate, icon_gold_gate);
gate[BLUE_GATE-1] = new Gate(BLUE_GATE_X_POSITION, BLUE_GATE_Y_POSITION, GATE_MAXHEALTH,GATE_RADIUS, blue_gate, icon_blue_gate);
gate[RED_GATE-1] = new Gate(RED_GATE_X_POSITION, RED_GATE_Y_POSITION, GATE_MAXHEALTH,GATE_RADIUS, red_gate, icon_red_gate);
