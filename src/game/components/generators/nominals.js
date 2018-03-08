class NominalGenerator extends Generator {
  constructor(game, bunny) {
    super(game, bunny);
  }

  generate(x, y, nominal) {
    let item = this.getFirstDead();

    if (item == null) {
      item = new Engine.Nominal(this.game, x, y, nominal);
      this.add(item);
    } else {
      item.reset(x, y, nominal);
    }

    return item;
  }
}

Engine.Component.NominalGenerator = NominalGenerator;
