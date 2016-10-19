const Canvas = require("./canvasView.es6");
const Player = require("./playerModule.es6");
const KeyModule = require("./keyModule.es6");
const Map = require("./map.es6");


class Controller {
  constructor(){
    this.canvas = new Canvas();
    this.keyModule = new KeyModule();
    this.player = new Player();
    this.map = new Map();

    this.score = 0;


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
    this.score = this.map.mapSpot(this.player.playerProps);

    // player
    // =============================================================================
    this.canvas.draw(this.player.playerProps);
    this.player.score(this.score);

    window.requestAnimationFrame(() => { // loops the main content
      this.loop();
    });
  };
}

const contr = new Controller();
contr.loop();