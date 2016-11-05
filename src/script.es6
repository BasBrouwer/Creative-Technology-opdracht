const Canvas = require("./canvasView.es6");
const Player = require("./playerModule.es6");
const KeyModule = require("./keyModule.es6");
const Map = require("./map.es6");
const LevelOpties = require("./level.es6");


class Controller {
  constructor(){
    this.canvas = new Canvas();
    this.keyModule = new KeyModule();
    this.player = new Player();
    this.map = new Map();
    this.level = new LevelOpties();

    this.levelUpdate = false;

    this.keyModule.keyPress( (data)=> {
      this.handleKey(data);
    });
  }

  handleKey(data){
    this.player.movement(data, this.map.mapLayout);
  }

  loop(){
    this.canvas.clearRect(); // clears canvas

    // Map
    // =============================================================================
    this.canvas.drawMap(this.map.mapLayout);
    this.canvas.drawHiddenMap(this.map.mapLayout);
    this.score = this.map.mapSpot(this.player.playerProps);

    // player
    // =============================================================================
    this.canvas.draw(this.player.playerProps);
    this.player.scoreModule(this.score);

    // score update
    // =============================================================================
    this.canvas.playerScore(this.player.playerScore);
    this.canvas.assignment(this.player.playerScore, this.level.assign);

    // level check
    // =============================================================================
    this.levelUpdate = this.level.levelComplete(this.player.playerScore);
    if(this.levelUpdate){
      this.levelSet();
    }

    window.requestAnimationFrame(() => { // loops the main content
      this.loop();
    });
  };

  setMineralsMap() {
    this.map.setPunten(this.level.assign);
  }

  levelSet(){
    this.level.levelOpdracht();
    this.player.levelUpdate();
    this.map.levelUpdate(this.level.assign);
    this.setMinerals();
    this.levelUpdate = false;
  }

  setMinerals(){
    if(this.level.dataLoad){
      this.setMineralsMap();
      this.loop();
    }

    if(!this.level.dataLoad){
      window.requestAnimationFrame(() => { // loops the main content
        this.setMinerals();
      });
    }
  }

}


const contr = new Controller();
// contr.loop();
contr.setMinerals();