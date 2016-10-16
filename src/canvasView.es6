class Canvas {
  constructor(){
    this.c = document.getElementById("myCanvas");
    this.ctx = this.c.getContext("2d");
  }

  clearRect(){
    this.ctx.clearRect(0,0,this.c.width, this.c.height);
  }

  draw(props) {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(props.x, props.y, props.width, props.height);
  }

  drawMap(mapLayout){
    mapLayout.map.forEach( (row, i) => {
      row.forEach((tile, j) => {
        if (tile !== 0) {
          this.drawTile(j,i, mapLayout);
        }
      })
    })
  }

  drawTile(x, y, mapLayout){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect((x * mapLayout.tile), (y * mapLayout.tile), mapLayout.tile, mapLayout.tile);
  }

  get size(){
    return {
      cWidth: this.c.width,
      cHeight: this.c.height,
    }
  }
}

module.exports = Canvas;
