import Profiller from './profiler';
import Score from './score';

export default class Service {
  static get(name) {
    return Service.list[name];
  }
}

Service.list = {
  Score: new Score(),
  Profiler: new Profiller(),
};
