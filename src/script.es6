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
  }
  loop(){
    this.canvas.clearRect(); // clears canvas

    // Map
    // =============================================================================


    // draw
    // =============================================================================
    this.canvas.draw(this.player.playerProps);
    this.canvas.drawMap(this.map.mapLayout);


    // player
    // =============================================================================
    this.player.moveMent(this.keyModule.key, this.canvas.size);



    window.requestAnimationFrame(() => { // loops the main content
      this.loop();
    });
  };
}

const contr = new Controller();
contr.loop();