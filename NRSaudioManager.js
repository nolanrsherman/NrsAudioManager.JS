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
/*      CLASS:  NRSaudioManager                  */
/*---------------------------------------------*/
//The top level container Class that manages sound.

function NRSaudioManager() {

  /*PUBLIC INSTANCE VARIABLES*/
  //this.audioStripArray = []; //an array of AudioStrips
  //this.domContainer = null; //the Container for NAM to work with in the DOM.

  /*PRIVATE VARS*/
  var ERROR_IDENTIFIER = "NRSaudioManager Error : ";
  var domContainer = null;//the Container for NAM to work with in the DOM.
  var audioStripArray = []; //an array of AudioStrips
  var currentAudioStrip = null;
  var audioQue = [];
  /*PRIVILAGED METHODS*/

  this.getDomContainer = function () {return domContainer};  //returns the domContainer private var
  this.setCurrentAudioStrip = function (audioStrip) {
    if( isAudioStrip(audioStrip) ){
      currentAudioStrip = audioStrip;
    } else {
      console.error(ERROR_IDENTIFIER, "The object passed to 'setCurrentAudioStrip()' is not of type AudioStrip");
    }

  }
  this.getCurrentAudioStrip = function() {return currentAudioStrip};
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

  /*PRIVATE METHODS*/
  function isAudioStrip(audioStrip){//checks if given strip is instance of AudioStrip. @RETURN boolean
    if ( audioStrip instanceof AudioStrip){
      return true;
    }else {
      return false;
    }
  }
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
      audioStripArray.push(audioStrip);
      //add audioStrip into the dom.
      //!!! TODO !!!!////
    }else {
      throw "The object passed is not an instance of AudioStrip";
    }
  }

  function findAudioStripByIndex(index){ //Pushes a new audioStrip to the array. throws an error if paramater is not an audioStrip.
    //Check if given paramater is an integer
    if ( AudioManagerTools.isInt(index) ){

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


  /*CONSTRUCTOR INSTRUCTIONS*/
    //do the following when creating a new instance of this class:
    //Create dom container for <audio> elements belonging to the AudioStrips.
    createDomContainer();

};

/* public methods */
NRSaudioManager.prototype.myMethod = function () {
    // do something
}




/* ----------------------------------------------*/
/*         CLASS:  AudioStrip                   */
/*---------------------------------------------*/
//A class that manages Audio Sprites

function AudioStrip(src, name) {
    /*PUBLIC INSTANCE VARIABLES*/

    /*PRIVATE VARS*/
    var NAME = null; //A name for this Audio Strip
    var SRC = null; // url string for source for the audio file
    var ERROR_IDENTIFIER = "AudioStrip Error : ";//Error identifier for use in error handling
    var AUDIO = document.createElement('audio');
    var AudioSpriteArray = [];

    /*PRIVILAGED METHODS*/
    this.setName = function(name){ //Tries to set the name of this AudioStrip
      try{
        prvt_setName(name);
      }catch(error){
        console.error(ERROR_IDENTIFIER, error);
      }
    }
    this.getName = function(){ return NAME;} //returns the name of this AudioStrip
    this.setSrc = function(src){ //Tries to set the src of this AudioStrip
      try{
        prvt_setSrc(src);
      }catch(error){
        console.error(ERROR_IDENTIFIER, error);
      }
    }
    this.getSrc = function(){ return SRC;} //returns the src of this AudioStrip
    this.addAudioSprite = function(audioSprite){
      if( ( AudioManagerTools.isAudioSprite(audioSprite) ) ){//if param is AudioSprite
        prvt_addSingleSprite(audioSprite);//add a single audio sprite
      }else if( ( AudioManagerTools.isArray(audioSprite) ) ){ //if param is array
        prvt_addAudioSpriteArray(audioSprite);// add an array of audio sprites
      } else {
        console.error(ERROR_IDENTIFIER, "The object passed to 'addAudioSprite()' must be an AudioSprite or an Array of AudioSprites.");
      }
    }
    this.getAudioSprites = function(){return AudioSpriteArray;}
    /*PRIVATE METHODS*/
    function prvt_addSingleSprite(audioSprite){
      AudioSpriteArray[audioSprite.getName()]=audioSprite;
    }
    function prvt_addAudioSpriteArray(audioSprite){
      audioSprite.forEach( prvt_addSingleSprite );
    }
    function prvt_setName(name){
      //check if name is a string
      if(typeof name === 'string'){
        //check if the string is not empty
        if(name !== ''){
          NAME = name;
        } else{
          throw "The Name of a AudioStrip cannot be empty";
        }
      } else {
        throw "The name given for this AudioStrip must be a of String type.";
      }

    }
    function prvt_setSrc(src){
      //check if name is a string
      if(typeof src === 'string'){
        //check if the string is not empty
        if(name !== ''){

          //TODO check if String is actually a valid audio source URL.
          SRC = src;//set SRC
          AUDIO.src= SRC;// set the src of the Audio object.

        } else {
          throw "The URL source can not be empty."
        }
      } else {
        throw "The audio source given for this AudioStrip must be a url of String type.";
      }

    }

    /*CONSTRUCTOR INSTRUCTIONS*/
    //do the following when creating a new instance of this class:
    this.setName(name);
    this.setSrc(src);

}

/* PUBLIC METHODS */
AudioStrip.prototype.setName = function (name) {
    // do something
}

/* ----------------------------------------------*/
/*          CLASS:  AudioSprite                 */
/*---------------------------------------------*/
//A class that represents the individual audio samples in an AudioStrip
function AudioSprite(name, beginTime, endTime){
  /*PUBLIC INSTANCE VARIABLES*/
  /*PRIVATE VARS*/
  var ERROR_IDENTIFIER = "AudioSprite Error : ";//Error identifier for use in error handling
  var BEGIN_TIME;
  var END_TIME;
  var START_TIME;
  var NAME = 'noName'; //A name for this Audio Strip

  /*PRIVILAGED METHODS*/
  this.setName = function(name){
    if( AudioManagerTools.isString(name) ){
      NAME = name;
    } else {
      console.error(ERROR_IDENTIFIER, "The value passed to 'setName()' is not of type String.");
    }
  }
  this.getName = function(){return NAME;}
  this.setBeginTime = function(seconds){//set begging time of tihs AudioSprite in the audio file.
    if(AudioManagerTools.isInt(seconds)){
      BEGIN_TIME = seconds;
    } else {
      console.error(ERROR_IDENTIFIER, "value passed to setBeginTime(seconds) is not of type integer or is NaN");
    }
  }
  this.getBeginTime = function(){return BEGIN_TIME;}//get the begging time of tihs AudioSprite in the audio file.
  this.setEndTime = function(seconds){ // Set the end time of tihs AudioSprite in the audio file.
    if(AudioManagerTools.isInt(seconds)){
      END_TIME = seconds;
    } else {
      console.error(ERROR_IDENTIFIER, "value passed to setBeginTime(seconds) is not of type integer or is NaN");
    }
  }
  this.getEndTime = function(){return END_TIME;}// Get the end time of tihs AudioSprite in the audio file.
  this.setStartTime = function(seconds){
    if(AudioManagerTools.isInt(seconds)){
      START_TIME = seconds;
    } else {
      console.error(ERROR_IDENTIFIER, "value passed to setBeginTime(seconds) is not of type integer or is NaN");
    }
  }
  this.getStartTime = function(){return START_TIME;}

  /*PRIVATE METHODS*/
  /*CONSTRUCTOR INSTRUCTIONS*/
  this.setName(name);
  this.setBeginTime(beginTime);
  this.setEndTime(endTime);
}

/* PUBLIC METHODS */

/* ----------------------------------------------*/
/*                Other Functions               */
/*---------------------------------------------*/
AudioManagerTools = {}; // container for helper Functions

/* PUBLIC METHODS */
//@author: user Krisk of StackOverflow
AudioManagerTools.isInt = function(value) { //returns true if given value is and integer and is not NaN.
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}

AudioManagerTools.isString = function(value) {
  if(typeof value === 'string'){
    return true;
  } else{
    return false;
  }
}

AudioManagerTools.isAudioStrip = function(audioStrip){//checks if given strip is instance of AudioStrip. @RETURN boolean
  if ( audioStrip instanceof AudioStrip){
    return true;
  }else {
    return false;
  }
}

AudioManagerTools.isAudioSprite = function(audioSprite){//checks if given strip is instance of AudioStrip. @RETURN boolean
  if ( audioSprite instanceof AudioSprite){
    return true;
  }else {
    return false;
  }
}

AudioManagerTools.isArray = function(value){//checks if given value is an Array. @RETURN boolean
  if ( value instanceof Array){
    return true;
  }else {
    console.log(value);
    return false;
  }
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
