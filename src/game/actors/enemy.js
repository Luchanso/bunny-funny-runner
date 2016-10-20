class Enemy extends Phaser.Sprite {
  constructor(game, x, y, name) {
    super(game, x, y, Engine.spritesheet, name)
  }

  die() {

  }
}

Engine.Enemy = Enemy
