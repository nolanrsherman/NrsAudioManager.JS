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


/* ----------------------------------------------*/
/*             NRSaudioManager                  */
/*---------------------------------------------*/
//The top level container object that manages sound.

function NRSaudioManager() {

  /*Public Instance Variables*/
  //this.audioStripArray = []; //an array of AudioStrips
  //this.domContainer = null; //the Container for NAM to work with in the DOM.

  /*Private vars*/
  var ERROR_IDENTIFIER = "NRSaudioManager Error : ";
  var domContainer = null;//the Container for NAM to work with in the DOM.
  var audioStripArray = []; //an array of AudioStrips

  /*privilaged methods*/

  this.getDomContainer = function () {return domContainer};  //returns the domContainer private var
  this.addAudioStrip = function (audioStrip) {
    try {
      pushAudioStrip(audioStrip);
    }
    catch (error) {
      console.error(ERROR_IDENTIFIER, error);
    }

  }
  this.getAudioStrips = function() {return audioStripArray};
  this.getAudioStripByIndex = function(index) {
    try {
      return findAudioStripByIndex(index); //return the audio strip at that index
    }
    catch (error) {
      console.error(ERROR_IDENTIFIER, error);
    }
  }

  /*private methods*/

  function createDomContainer(){ //insert to the DOM a div with display:none and id = NRSaudioManager-Container.
    // create a new div element
    var newDiv = document.createElement("div");
    //add ID to div
    newDiv.setAttribute("id", "NRSaudioManager-Container");
    //add display:none to style.
    newDiv.style.display = "none";
    // add the newly created element into the DOM
    domContainer = newDiv;
    document.body.append(newDiv);
  }

  function pushAudioStrip(audioStrip){ //Pushes a new audioStrip to the array. throws an error if paramater is not an audioStrip.
    //Check if given paramater is actually an audioStrip
    if ( audioStrip instanceof AudioStrip){
      //push audioStrip to the array
      audioStripArray.push(AudioStrip);
      //add audioStrip into the dom.
      //!!! TODO !!!!////
    }else {
      throw "The object passed is not an instance of AudioStrip";
    }
  }

  function findAudioStripByIndex(index){ //Pushes a new audioStrip to the array. throws an error if paramater is not an audioStrip.
    //Check if given paramater is an integer
    if ( isInt(index) ){

      //check if there was a strip at the given index.
      if( (index in audioStripArray) ){

        return audioStripArray[index];//return the audio strip at the index

      }else {
        throw "There is no AudioStrip at the given index."
      }

    }else {
      throw "The value given for index is not an integer.";
    }
  }

  /*Constructor instructions.*/
    //Create dom container for <audio> elements belonging to the AudioStrips.
    createDomContainer();

};

//public methods
NRSaudioManager.prototype.myMethod = function () {
    // do something
}



/* ----------------------------------------------*/
/*---------------------------------------------*/


/* AudioStrip */
function AudioStrip(param) {
    this.member = param;
}


/* ----------------------------------------------*/
/*                Other Functions               */
/*---------------------------------------------*/
AudioManagerTools = {}; // container for helper Functions

//@author: user Krisk of StackOverflow
this.isInt = function(value) { //returns true if given value is and integer and is not NaN.
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}


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
