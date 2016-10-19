class Canvas {
  constructor(){
    this.c = document.getElementById("myCanvas");
    this.ctx = this.c.getContext("2d");
    this.scale = 40;
  }

  clearRect(){
    this.ctx.clearRect(0,0,this.c.width, this.c.height);
  }

  draw(props) {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(props.x * this.scale, props.y * this.scale, props.width * this.scale, props.height * this.scale);
  }

  drawMap(mapLayout){
    mapLayout.map.forEach( (row, i) => {
      row.forEach((tile, j) => {
          this.drawTile(j,i, tile);
      })
    })
  }

  drawTile(x, y, tile){

    this.ctx.fillStyle = (tile === 9) ? "red" : (tile === 2) ? "green" : (tile === 1)? "#ccc" : "black" ;
    this.ctx.fillRect((x * this.scale), (y * this.scale), this.scale, this.scale);
  }

  get size(){
    return {
      cWidth: this.c.width,
      cHeight: this.c.height,
    }
  }
}

module.exports = Canvas;
