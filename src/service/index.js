import Service from './service';

import Profiller from './profiler';
import Score from './score';
import Storage from './storage';

const list = {
  Score: new Score(),
  Profiler: new Profiller(),
  Storage: new Storage()
};

Object.keys(list).map(name => Service.create(name, list[name]));

export default Service;
