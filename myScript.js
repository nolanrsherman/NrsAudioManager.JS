//first, Create instance of Audio manager
var myAudioManager = new NRSaudioManager();

//next create an audio strip.
var myAudioStrip = new AudioStrip("countdown.mp3", "Strip 1");

//create sound sprites
var nine = new AudioSprite(0,1);
var eight = new AudioSprite(2,3);
var seven = new AudioSprite(4,5);
var six = new AudioSprite(6, 7);
var five = new AudioSprite(8,9);
var four = new AudioSprite(10,11);
var three = new AudioSprite(12,13);
var two = new AudioSprite(14,15);
var one = new AudioSprite(16,17);
var zero = new AudioSprite(18,19);
