var NAM = new NRSaudioManager();
var strip = new AudioStrip("somesourcestring", "Strip 1");

NAM.addAudioStrip(Object);
NAM.addAudioStrip(strip);

console.log( NAM.getAudioStripByIndex("b") );

console.log( NAM.getAudioStripByIndex(1) );

console.log( NAM.getAudioStripByIndex(0) );

var AS = NAM.getAudioStripByIndex(0);
