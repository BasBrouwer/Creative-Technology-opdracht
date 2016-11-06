const Canvas = require("./canvasView.es6");
const Player = require("./playerModule.es6");
const KeyModule = require("./keyModule.es6");
const Map = require("./map.es6");
const LevelOpties = require("./level.es6");



// Waar kan ik het spel spelen.
// http://bbrouwer6.acue.webpages.avans.nl/game/



class Controller {
  constructor() {
    this.canvas = new Canvas();
    this.keyModule = new KeyModule();
    this.player = new Player();
    this.map = new Map();
    this.level = new LevelOpties();

    this.levelUpdate = false;

    this.keyModule.keyPress((data)=> {
      this.handleKey(data);
    });
  }

  handleKey(data) {
    this.player.movement(data, this.map.mapLayout);
  }

  loop() {
    this.canvas.clearRect(); // clears canvas

    // Map
    // =============================================================================
    this.canvas.drawMap(this.map.mapLayout);
    // this.canvas.drawHiddenMap(this.map.mapLayout);
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
    if (this.levelUpdate) {
      this.levelSet();
    }

    window.requestAnimationFrame(() => { // loops the main content
      this.loop();
    });
  };

  // setMineralsMap functie om de minerals plaatsing te starten
  // =============================================================================
  setMineralsMap() {
    this.map.setPunten(this.level.assign);
    if(this.level.level === 4){
      window.requestAnimationFrame(() => { // loops the main content
        this.setMineralsMap();
      });
    }
  }

  // reset/gaat naar volgend level. zorgt voor dat de juiste onderdelen vervangen worden
  // =============================================================================
  levelSet() {
    this.level.levelOpdracht();
    this.player.levelUpdate();
    this.map.levelUpdate(this.level.assign);
    this.setMinerals();
    this.player.sendScore(this.level.assign);
    this.level.highscoreLoad(this.level.assign);
    this.levelUpdate = false;
  }

  // start het spel wanneer de databse geladen is. en repeat de functie zolang de database nog niet gealden is.
  setMinerals() {
    if (this.level.dataLoad) {
      this.setMineralsMap();
      this.loop();

      //beetje jammer met prompt... maar lukte mij niet om vie een form een functie te starten... weet niet of dat door babel komt of iets anders.
      // in een class geprobeert buiten class in een window onload... elke keer kreeg ik de foutmelding is geen functie. () => of function start() gebruikt.
      // in form gebruik gemaakt van action, onsubmit en onclick functie in js. werkte niet....
      this.player.setPlayerName(prompt("what is your name"));
    }

    if (!this.level.dataLoad) {
      window.requestAnimationFrame(() => { // loops the main content
        this.setMinerals();
      });
    }
  }
}


window.onload = function() {
  const contr = new Controller();
  contr.setMinerals();
};

