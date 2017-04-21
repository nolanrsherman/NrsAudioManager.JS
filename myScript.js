var NAM = new NRSaudioManager();
var strip = new AudioStrip();

NAM.addAudioStrip(Object);
NAM.addAudioStrip(strip);

console.log( NAM.getAudioStripByIndex("b") );

console.log( NAM.getAudioStripByIndex(1) );
