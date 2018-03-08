class Generator extends Phaser.Group {
  constructor(game, bunny) {
    super(game);

    this.bunny = bunny;
  }

  start() {}

  update() {
    super.update();

    this.checkDie();
  }

  generate() {}

  stop() {}

  checkDie() {
    this.children.forEach((item) => {
      if (
        !item.inCamera &&
        item.alive &&
        item.x < this.bunny.x - this.game.camera.deadzone.x
      ) {
        item.kill();
      }
    });
  }
}

Engine.Component = {};
Engine.Component.Generator = Generator;
