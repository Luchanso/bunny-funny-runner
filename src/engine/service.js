class Service {
  static get(name) {
    return Service.list[name];
  }
}

Service.list = {
  Score: new Engine.Score(),
  Profiler: new Engine.Profiler()
};

Engine.Service = Service;
