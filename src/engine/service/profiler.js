class Profiler {
  constructor() {
    this.array = [];
  }

  start(name) {
    this.array[name] = {
      start: Date.now()
    };
  }

  stop(name) {
    let data = this.array[name];

    data.stop = Date.now();
    data.time = data.stop - data.start;
  }

  time(name) {
    if (this.array[name] == null) return undefined;
    else return this.array[name].time;
  }
}

Engine.Profiler = Profiler;
