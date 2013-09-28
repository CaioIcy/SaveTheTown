//This script shamefully contains global constants and variables

var pressedKeys = [];
var paused = false;
var i = 0;

//player constants
const PLAYER_STARTING_X = 390;
const PLAYER_STARTING_Y = 60;
const AMPLITUDE_X = 230;
const AMPLITUDE_Y = 230;
const CIRCLE_SPEED = 0.003;
const MOVEMENT_START_POSITION = (3*Math.PI)/2;
const X_SHIFT = 390;
const Y_SHIFT = 290;
const PLAYER_RADIUS = 14;

//enemies constants
const ENEMY_STARTING_X=30;
const ENEMY_STARTING_Y = 30;
const ENEMY_SPEED = 1;

//gates constants
const GOLD_GATE_X_POSITION = 176;
const GOLD_GATE_Y_POSITION = 411;
const BLUE_GATE_X_POSITION = 356;
const BLUE_GATE_Y_POSITION = 497;
const RED_GATE_X_POSITION = 536;
const RED_GATE_Y_POSITION = 411;
const PURPLE_GATE_X_POSITION = 356;
const PURPLE_GATE_Y_POSITION = 28;
const GATE_HEALTH = 100;

const GOLD_GATE_X_CENTER = 217;
const GOLD_GATE_Y_CENTER = 452;
const BLUE_GATE_X_CENTER = 397;
const BLUE_GATE_Y_CENTER = 538;
const RED_GATE_X_CENTER = 577;
const RED_GATE_Y_CENTER = 452;
const PURPLE_GATE_X_CENTER = 397;
const PURPLE_GATE_Y_CENTER = 70;

const PURPLE_GATE = 1;
const GOLD_GATE = 2;
const BLUE_GATE = 3;
const RED_GATE = 4;

const TOWN_CENTER_X = 401;
const TOWN_CENTER_Y = 300;
 
