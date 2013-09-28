//This script will be the game initializer

player = new Player(AMPLITUDE_X, AMPLITUDE_Y, CIRCLE_SPEED, MOVEMENT_START_POSITION, PLAYER_STARTING_X, PLAYER_STARTING_Y, playerSprite);

gate = new Array();
gate[0] = new Gate(GATE_1_X_POSITION, GATE_1_Y_POSITION, GATE_HEALTH, gold_gate);
gate[1] = new Gate(GATE_2_X_POSITION, GATE_2_Y_POSITION, GATE_HEALTH, blue_gate);
gate[2] = new Gate(GATE_3_X_POSITION, GATE_3_Y_POSITION, GATE_HEALTH, red_gate);
gate[3] = new Gate(GATE_4_X_POSITION, GATE_4_Y_POSITION, GATE_HEALTH, purple_gate);
