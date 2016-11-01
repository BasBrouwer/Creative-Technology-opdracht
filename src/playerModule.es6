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
    if(Date.now() - this.lastMove <= 100)
        return;

    this.lastMove = Date.now();

    if (direction.up){
      if (map.map[this.props.y-1][this.props.x] === 9)
        return;
      this.props.y -= this.speed;
      this.props.richting = 2;
    }
    else if (direction.down){
      if (map.map[this.props.y+1][this.props.x] === 9)
        return;
      this.props.y += this.speed;
      this.props.richting = 4;
    }
    else if (direction.left){
      if (map.map[this.props.y][this.props.x-1] === 9)
        return;
      this.props.x -= this.speed;
      this.props.richting = 1;
    }
    else if (direction.right){
      if (map.map[this.props.y][this.props.x+1] === 9)
        return;
      this.props.x += this.speed;
      this.props.richting = 3;
    }
  }

  scoreModule(score){
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

  get playerProps(){
    return {
      x: this.props.x,
      y: this.props.y,
      width: this.props.width,
      height: this.props.height,
      richting: this.props.richting,
    }
  }

  get playerScore(){
    return this.score;
  }
}

module.exports = Player;
