class KeyModule {
  constructor(){
    this.left  = false;
    this.right = false;
    this.up = false;
    this.down = false;

    document.addEventListener("keydown", (keyBoardDown) => {
      if(keyBoardDown.keyCode == 39) {
        this.right = true;
      }
      else if(keyBoardDown.keyCode == 37) {
        this.left = true;
      }
      else if(keyBoardDown.keyCode == 38) {
        this.up = true;
      }

      else if(keyBoardDown.keyCode == 40) {
        this.down = true;
      }

    });

    document.addEventListener("keyup", (keyBoardUp) => {
      if(keyBoardUp.keyCode == 39) {
        this.right = false;
      }
      else if(keyBoardUp.keyCode == 37) {
        this.left = false;
      }
      else if (keyBoardUp.keyCode == 38) {
        this.up = false;
      }
      else if (keyBoardUp.keyCode == 40){
        this.down = false;
      }
    })
  }

  get key (){
    return {
      left: this.left,
      right: this.right,
      down: this.down,
      up: this.up
    };
  }
}

module.exports = KeyModule;
