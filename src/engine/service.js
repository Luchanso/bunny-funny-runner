class Service {
  static get(name) {
    return Service.list[name]
  }
}

Service.list = {
  "Score": new Engine.Score()
}

Engine.Service = Service
