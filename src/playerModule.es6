class Player {
  constructor(){
    this.props = {
      x: 10,
      y: 10,
      width: 20,
      height: 20,
    };
    this.speed = 5;
  }
  moveMent(direction, size){
    if (direction.up && this.props.y > 20){
      this.props.y -= this.speed;
    }
    if (direction.down && this.props.y < size.cHeight - this.props.height - 20){
      this.props.y += this.speed;
    }
    if (direction.left && this.props.x > 20){
      this.props.x -= this.speed;
    }
    if (direction.right && this.props.x < size.cWidth - this.props.width - 20){
      this.props.x += this.speed;
    }
  }

  get playerProps(){
    return {
      x: this.props.x,
      y: this.props.y,
      width: this.props.width,
      height: this.props.height,
    }
  }
}

module.exports = Player;
