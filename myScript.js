
//first,  create an audio strip.
var myAudioStrip = new AudioStrip("countdown.mp3", "Strip 1");

//create sound sprites by adding individually
/*
myAudioStrip.addAudioSprite( new AudioSprite('nine', 0, 1) );
myAudioStrip.addAudioSprite( new AudioSprite('eight', 2,3) );
myAudioStrip.addAudioSprite( new AudioSprite('seven', 4,5) );
myAudioStrip.addAudioSprite( new AudioSprite('six', 6, 7) );
myAudioStrip.addAudioSprite( new AudioSprite('five', 8,9) );
myAudioStrip.addAudioSprite( new AudioSprite('fou
r', 10,11) );
myAudioStrip.addAudioSprite( new AudioSprite('three', 12,13) );
myAudioStrip.addAudioSprite( new AudioSprite('two', 14,15) );
myAudioStrip.addAudioSprite( new AudioSprite('one', 16,17) );
myAudioStrip.addAudioSprite( new AudioSprite('zero', 18,19) );
*/
//or

//create sound sprites by passing an array of AudioSprites
var mySprites =  [
  new AudioSprite('nine', 0, 1),
  new AudioSprite('eight', 2,3),
  new AudioSprite('seven', 4,5),
  new AudioSprite('six', 6, 7),
  new AudioSprite('five', 8,9),
  new AudioSprite('four', 10,11),
  new AudioSprite('three', 12,13),
  new AudioSprite('two', 14,15),
  new AudioSprite('one', 16,17),
  new AudioSprite('zero', 18,19),
  new AudioSprite('background', 0,19)
]
myAudioStrip.addAudioSprite( mySprites );

//Create instance of Audio manager
var myAudioManager = new NRSaudioManager();

//set the current audio strip to your audio strip
myAudioManager.setCurrentAudioStrip(myAudioStrip);

//start background music.
myAudioManager.setBackgroundMusic('three');
