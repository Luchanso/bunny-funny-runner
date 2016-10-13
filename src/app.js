Engine.game = new Phaser.Game(Engine.maxWidth, Engine.maxHeight, Phaser.AUTO)

window.onresize = () => {
  Engine.game.scale.setGameSize(window.innerWidth, window.innerHeight)
}

Engine.game.state.add('Boot', Engine.Boot)
Engine.game.state.add('Game', Engine.Game)
Engine.game.state.add('Loader', Engine.Loader)

Engine.game.state.start('Boot')
