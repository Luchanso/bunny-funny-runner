Engine.game = new Phaser.Game(Engine.width, Engine.height, Phaser.AUTO)

window.onresize = () => {
  Engine.game.scale.setGameSize(window.innerWidth, window.innerHeight)
}

Engine.game.state.add('Boot', Engine.Boot)
Engine.game.state.add('Game', Engine.Game)
// Engine.game.state.add('Menu', Engine.Menu)
Engine.game.state.add('Shop', Engine.Shop)
Engine.game.state.add('Settings', Engine.Settings)
Engine.game.state.add('Loader', Engine.Loader)

Engine.game.state.start('Boot')

CloudAPI.init({
  'id' : 291,
  'splash' : false
})
