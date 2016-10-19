class Player {
  constructor(){
    this.props = {
      x: 1,
      y: 1,
      width: 1,
      height: 1,
      score: 0,
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

  movement(direction, map){

    if(Date.now() - this.lastMove <= 100)
        return;

    this.lastMove = Date.now();

    if (direction.up){
      if (map.map[this.props.y-1][this.props.x] === 9)
        return;
      this.props.y -= this.speed;
    }
    else if (direction.down){
      if (map.map[this.props.y+1][this.props.x] === 9)
        return;
      this.props.y += this.speed;
    }
    else if (direction.left){
      if (map.map[this.props.y][this.props.x-1] === 9)
        return;
      this.props.x -= this.speed;
    }
    else if (direction.right){
      if (map.map[Math.floor(this.props.y)][this.props.x+1] === 9)
        return;

      this.props.x += this.speed;
    }
  }

  score(score){
    this.props.score += (score === 1) ? 1 : (score === 2) ? 2:0;
  }

  get playerProps(){
    return {
      x: this.props.x,
      y: this.props.y,
      width: this.props.width,
      height: this.props.height,
      score: this.props.score,
    }
  }
}

module.exports = Player;
