/*
* NRSaudioManager.JS
* A basic "Audio Sprite" audio manager for mobile browsers games.
*
*Author: Nolan Sherman  - University of New Orleans Department of Computer Science
*
*Compatibility
*Android -
*IOS -
*
*Please see the readme file.
*Github url:
*/



NRSaudioManager = {
  audioSrc : {
    url: '',
    soundObject: null,
    ready : false,
    loadNew : function(url){
      //set ready to false
      this.ready = false;
      //change audioSrc.url to given url
      this.url = url;
      //create soundObject form url and add to sound object
      mySound = new Audio(url);
      this.soundObject = mySound;

      /////this.soundObject = document.createElement("audio");
      /////this.soundObject.src = url;
      //prime sound object by playing then pausing
      this.soundObject.play();
      this.soundObject.pause();
      //onSoundObjectLoad();
    }
  },

  audioSprites : [], //holds audioSprite objects

  newAudioSprite: function(){//creates new audioSprite

  },
}

async function onSoundObjectLoad(){
  setTimeout(function(){
    var isReady;
    var buffLength = 0;
    var audLength = NRSaudioManager.audioSrc.soundObject.duration;
    try { buffLength = NRSaudioManager.audioSrc.soundObject.buffered.end(0)  }
    catch(err) {
      console.log("sound not ready");
      isReady = false
    }
    console.log(buffLength + ":" + audLength)
    if()
  }, 3000);
}

/*
async function onSoundObjectLoad(){
  while(  NRSaudioManager.audioSrc.ready == false){
    var isReady;
     var buffLength = 0;
    try { buffLength = NRSaudioManager.audioSrc.soundObject.buffered.end(0)  }
    catch(err) {
      console.log("sound not ready");
      isReady = false
    }
    var audLength = NRSaudioManager.audioSrc.soundObject.duration;
    if(buffLength >= audLength){
      NRSaudioManager.audioSrc.ready = true;
      console.log("sound ready");
      break;
    } else {
    }
  //after the times are equal
  //set audioSrc.ready = true;
  }
}
*/

/*debug tools, delete on compression*/
stopWatch = {
  startTime : 0,
  stopTime: 0,

  start : function(){
    var d = new Date();
    var n = d.getTime();
    this.startTime = n;
  },
  stop : function(){
    var d = new Date();
    var n = d.getTime();
    this.stopTime = n;
  },
  curretTimeInSeconds : function(){
    var diff = this.stopTime - this.startTime;
    return diff/1000;
  },
}
