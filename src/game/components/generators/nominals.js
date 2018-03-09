import Generator from './generator';
import Nominal from '../../actors/nominal';

export default class NominalGenerator extends Generator {
  constructor(...props) {
    const [game, bunny] = props;
    super(game, bunny);
  }

  generate(x, y, nominal) {
    let item = this.getFirstDead();

    if (item == null) {
      item = new Nominal(this.game, x, y, nominal);
      this.add(item);
    } else {
      item.reset(x, y, nominal);
    }

    return item;
  }
}
