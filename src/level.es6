class LevelOpties {
  constructor(){
    this.dataOpdrachten = [];
    this.highscore = [];

    this.levelData();
    this.level = 1;
    this.maxLevel = 4;

    this.dataLoad = false;
    this.highsLoad = false;
    this.levelUpdate = false;

    this.opdracht = {
      coal: 0,
      bronze: 0,
      zilver: 0,
      goud: 0,
    };
  }

  // load de data van de opdrachten.
  // =============================================================================
  levelData(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        this.dataParse(xhttp.responseText);
      }
    };
    xhttp.open("GET", "http://bbrouwer6.acue.webpages.avans.nl/game/php/getLevel/", true);
    xhttp.send();
  }

  dataParse(data) {
    var item = JSON.parse(data);
    for (var i = 0; i < item.length; i++) {
      var newObject = {
        id: item[i].id,
        coal: item[i].coal,
        bronze: item[i].bronze,
        zilver: item[i].zilver,
        goud: item[i].goud
      };
      this.dataOpdrachten.push(newObject);
    }
    this.levelOpdracht();
  }

  // load de data van highscore
  // =============================================================================
  highscoreLoad(data){
    if(data.level === 1){
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          this.dataParseScore(xhttp.responseText);
        }
      };
      xhttp.open("GET", "http://bbrouwer6.acue.webpages.avans.nl/game/php/getPlayer/", true);
      xhttp.send();
    }
  }

  dataParseScore(data) {
    var item = JSON.parse(data);
    for (var i = 0; i < item.length; i++) {
      var newObject = {
        id: item[i].id,
        name: item[i].name,
        blocks: item[i].blocks,
      };
      this.highscore.push(newObject);
    }
    this.highsLoad = true;
  }

  // kijkt welk level we zitten en zo welke opdracht nodig is.
  // =============================================================================
  levelOpdracht(){
    if(this.level === 1){
      this.setLevel(this.dataOpdrachten[0]);
    }
    if(this.level === 2){
      this.setLevel(this.dataOpdrachten[1]);
    }
    if(this.level === 3){
      this.setLevel(this.dataOpdrachten[2]);
    }
  }

  setLevel(data){
    this.opdracht = {
      coal: data.coal,
      bronze: data.bronze,
      zilver: data.zilver,
      goud: data.goud,
    };
    this.dataLoad = true;
  }

  // kijkt of de level gecomplete is. of alle behaalde onderdelen zijn gehaald.
  // =============================================================================
  levelComplete(playerScore){
    if(this.opdracht.coal == playerScore.coal &&
      this.opdracht.bronze == playerScore.bronze &&
      this.opdracht.zilver == playerScore.zilver &&
      this.opdracht.goud == playerScore.goud){
      if(this.level < this.maxLevel){
        this.level += 1;
        return true;
      }
    }
  }

  get assign(){
    return  {
      levelData: this.opdracht,
      level: this.level,
      maxLevel: this.maxLevel,
      highscore: this.highscore,
      highsLoad: this.highsLoad,
    }
  }
}

module.exports = LevelOpties;
