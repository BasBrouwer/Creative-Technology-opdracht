class Player {
  constructor(){
    this.props = {
      x: 1,
      y: 1,
      width: 1,
      height: 1,
      richting: 3
    };

    this.score = {
      name: "Bas",
      blocks: 0,
      coal: 0,
      bronze: 0,
      zilver: 0,
      goud: 0,
    };

    this.opdracht = {
      blocks: 0,
      coal: 0,
      bronze: 0,
      zilver: 0,
      goud: 0,
    };

    this.speed = 1;
    this.lastMove;
  }
  // movement(direction, map){
  //   if(Date.now() - this.lastMove <= 100)
  //     return;
  //
  //   this.lastMove = Date.now();
  //
  //   if (direction.up){
  //     if (map.map[this.props.y-1][this.props.x] === 1)
  //       return;
  //     this.props.y -= this.speed;
  //   }
  //   else if (direction.down){
  //     if (map.map[this.props.y+1][this.props.x] === 1)
  //       return;
  //     this.props.y += this.speed;
  //   }
  //   else if (direction.left){
  //     if (map.map[this.props.y][this.props.x-1] === 1)
  //       return;
  //     this.props.x -= this.speed;
  //   }
  //   else if (direction.right){
  //     if (map.map[this.props.y][this.props.x+1] === 1)
  //       return;
  //     this.props.x += this.speed;
  //   }
  //
  // }


  // Bewegen richting en de snelheid
  // =============================================================================
  movement(direction, map){
    // bepaald de snelheid in hoe vaak je per zoveel tijd een kant op mag lopen
    if(Date.now() - this.lastMove <= 50)
        return;

    this.lastMove = Date.now();

    // richting bepalen. kijken of je opstakel tegen komt of niet.
    if (direction.up){
      this.props.richting = 2;
      if (map.map[this.props.y-1][this.props.x] === 9)
        return;
      this.props.y -= this.speed;
    }
    else if (direction.down){
      this.props.richting = 4;
      if (map.map[this.props.y+1][this.props.x] === 9)
        return;
      this.props.y += this.speed;
    }
    else if (direction.left){
      this.props.richting = 1;
      if (map.map[this.props.y][this.props.x-1] === 9)
        return;
      this.props.x -= this.speed;
    }
    else if (direction.right){
      this.props.richting = 3;
      if (map.map[this.props.y][this.props.x+1] === 9)
        return;
      this.props.x += this.speed;
    }
  }


  // Score kijken welke blok je net hebt gehad en bij de juiste een punt bij doen
  // =============================================================================
  scoreModule(score){
    // kijken welke mineral je oppakt
    if(!(score === 'undefined')){
      if(score.blocks === 1) {
        this.score.blocks += 1;
      }
      if (score.soort === 1) {
        this.score.coal += 1;
      }
      if (score.soort === 2) {
        this.score.bronze += 1;
      }
      if (score.soort === 3) {
        this.score.zilver += 1;
      }
      if (score.soort === 4) {
        this.score.goud += 1;
      }
    }
  }

  opdracht(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        this.parseData(xhttp.responseText);
      }
    };
    xhttp.open("GET", "http://bbrouwer6.acue.webpages.avans.nl/game/php/getLevel/", true);
    xhttp.send();
  }

  parseData(data) {
    var item = JSON.parse(data);
    for (var i = 0; i < item.length; i++) {
      var newObject = {
        avatar: item[i].avatar,
        name: item[i].name,
        message: item[i].message,
        height: item[i].avatar_height,
        id: item[i].id
      };
      objectArray.push(newObject);
    }
  }

  // get functie voor de speler en de score
  // =============================================================================

  get playerProps(){
    return {
      name: this.props.name,
      x: this.props.x,
      y: this.props.y,
      width: this.props.width,
      height: this.props.height,
      richting: this.props.richting,
    }
  }

  get playerScore(){
    return {
      score: this.score,
      opdracht: this.opdracht
    }

  }
}

module.exports = Player;
