class Map {
  constructor(){
    this.mapBreed = 30;
    this.mapHoog = 20;
    // 30 breed
    // 20 hoog
    this.map = [
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
      [9,0,1,1,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
      [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
      [9,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,9],
      [9,1,1,1,1,1,1,1,9,9,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,9],
      [9,1,1,1,1,1,1,1,1,1,9,8,9,9,9,9,1,1,1,1,1,1,1,1,1,9,8,8,1,9],
      [9,1,1,1,1,1,1,1,1,1,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,9],
      [9,1,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,9],
      [9,1,9,9,8,9,8,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,9],
      [9,1,9,9,8,9,9,1,1,1,1,1,1,1,1,1,1,1,1,8,8,9,1,1,1,1,1,1,1,9],
      [9,1,9,8,8,9,9,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,9],
      [9,1,9,9,8,9,9,1,1,1,1,1,1,1,1,1,1,1,1,9,8,9,1,1,1,1,1,1,1,9],
      [9,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,9,8,8,1,1,1,1,1,1,1,9],
      [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,9],
      [9,1,9,9,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,9],
      [8,1,9,9,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,1,9],
      [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,9,9,1,1,1,1,1,9,1,9],
      [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,8,9,9,1,1,1,1,1,9,1,9],
      [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,9,9,1,1,1,1,1,9,1,9],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
    ];

    this.hidden = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];

    this.setPunten();
  }

  mapSpot(player) {
    this.clearHidden(player);

    // het loopgat graven + de punten telling van de stenen dat men op kan pakken
    if (this.map[player.y][player.x] === 2) {
      this.map[player.y][player.x] = 0;
      return {
        blocks: 1,
        soort: 1
      }; // Coal
    }

    if (this.map[player.y][player.x] === 3) {
      this.map[player.y][player.x] = 0;
      return {
        blocks: 1,
        soort: 2
      }; // bronz
    }

    if (this.map[player.y][player.x] === 4) {
      this.map[player.y][player.x] = 0;
      return {
        blocks: 1,
        soort: 3
      }; // silver
    }

    if (this.map[player.y][player.x] === 5) {
      this.map[player.y][player.x] = 0;
      return {
        blocks: 1,
        soort: 4
      }; // goud
    }


    if (this.map[player.y][player.x] === 1) {
      this.map[player.y][player.x] = 0;
      return {
        blocks: 1,
        soort: 0
      };
    }

    if (this.map[player.y][player.x] === 0) {
      return {
        blocks: 0,
        soort: 0
      };
    }
  }


  clearHidden(player){

    // verwijdert het zwarte vlak over het speelveld
    // was lastig om met for loops te werken omdat als je zodra buiten de array's kwam kwa getallen het fout ging.
    // dan verdween mijn speler

    this.hidden[player.y - 1][player.x + 1] = 0;
    this.hidden[player.y - 1][player.x - 1] = 0;
    this.hidden[player.y + 1][player.x + 1] = 0;
    this.hidden[player.y + 1][player.x - 1] = 0;

    // kijken of links vrij blokje is om te cleane
    if (player.y >= 1) {
      this.hidden[player.y - 1][player.x] = 0;

      if (player.y >= 2) {
        this.hidden[player.y - 2][player.x] = 0;
      }
    }

    // kijken of rechts vrij blokje is om te cleane
    if (player.y <= (this.mapHoog - 1)) {
      this.hidden[player.y + 1][player.x] = 0;

      if (player.y < (this.mapHoog - 2)) {
        this.hidden[player.y + 2][player.x] = 0;
      }
    }

    if (player.y <= (this.mapBreed -1)) {
      this.hidden[player.y][player.x + 1] = 0;

      if (player.y < (this.mapBreed -2)) {
        this.hidden[player.y][player.x + 2] = 0;
      }
    }

    if (player.x >= 1) {
      this.hidden[player.y][player.x - 1] = 0;

      if (player.x >= 2) {
        this.hidden[player.y][player.x - 2] = 0;
      }
    }
  }

  setPunten(){
    this.coal();
    this.bronze();
    this.ijzer();
    this.zilver();
  }

  coal(){
    let aantal = Math.floor((Math.random() * 6));
    this.randomPuntenSet(aantal, 2);
  }

  bronze(){
    let aantal = Math.floor((Math.random() * 6));
    this.randomPuntenSet(aantal, 3);
  }

  ijzer(){
    let aantal = Math.floor((Math.random() * 6));
    this.randomPuntenSet(aantal ,4);
  }

  zilver(){
    let aantal = Math.floor((Math.random() * 6));
    this.randomPuntenSet(aantal ,5);
  }

  randomPuntenSet(aantal, soort){
    for(var i = 0; i < aantal; i++){
      let randomBreed = Math.floor((Math.random() * 28) + 1);
      let randomHoog = Math.floor((Math.random() * 18) + 1);
      this.map[randomHoog][randomBreed] = soort;
    }
  }


  get mapLayout(){
    return {
      map: this.map,
      hidden: this.hidden,
    }
  }
}

module.exports = Map;



