//This script will be the game initializer

var player = new Player(AMPLITUDE_X, AMPLITUDE_Y, CIRCLE_SPEED, MOVEMENT_START_POSITION, PLAYER_STARTING_X, PLAYER_STARTING_Y, PLAYER_RADIUS, playerSprite);
var enemy = new Enemy(ENEMY_STARTING_X,ENEMY_STARTING_Y,15,ENEMY_SPEED);

var gate = new Array();
gate[0] = new Gate(GOLD_GATE_X_POSITION, GOLD_GATE_Y_POSITION, GATE_HEALTH,41, gold_gate);
gate[1] = new Gate(BLUE_GATE_X_POSITION, BLUE_GATE_Y_POSITION, GATE_HEALTH,41, blue_gate);
gate[2] = new Gate(RED_GATE_X_POSITION, RED_GATE_Y_POSITION, GATE_HEALTH,41, red_gate);
gate[3] = new Gate(PURPLE_GATE_X_POSITION, PURPLE_GATE_Y_POSITION, GATE_HEALTH,41, purple_gate);
