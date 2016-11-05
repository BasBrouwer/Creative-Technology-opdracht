class LevelOpties {
  constructor(){
    this.dataOpdrachten = [];
    this.levelData();
    this.level = 1;

    this.dataLoad = false;
    this.levelUpdate = false;

    this.opdracht = {
      coal: 0,
      bronze: 0,
      zilver: 0,
      goud: 0,
    };
  }

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

  levelComplete(playerScore){
    if(this.opdracht.coal == playerScore.coal &&
      this.opdracht.bronze == playerScore.bronze &&
      this.opdracht.zilver == playerScore.zilver &&
      this.opdracht.goud == playerScore.goud){
      if(this.level < 4){
        this.level += 1;
        return true;
      }
    }
  }

  get assign(){
    return  {
      levelData: this.opdracht,
      level: this.level,

    }
  }
}

module.exports = LevelOpties;
