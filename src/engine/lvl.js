class Lvl {
  constructor(caller) {
    if (caller !== Lvl) {
      throw 'Its singleton class, try use Lvl.instance'
    }

    let rowData = window.localStorage.getItem('lvl');
    let data = null;

    if (rowData !== null) {
      data = JSON.parse(rowData);
    } else {
      data = {
        current: 1,
        opened: [1, 2, 3, 4],
        done: [],
      };

      window.localStorage.setItem('lvl', JSON.stringify(data));
    }

    this._current = data.current;
    this._opend = data.opened;
    this._done = data.done;
  }

  static get instance() {
    if (!Lvl._instance) {
      Lvl._instance = new Lvl(Lvl);
    }

    return Lvl._instance;
  }

  saveDataInStorage() {
    let data = {
      current: this._current,
      opend: this._opend,
      done: this._done,
    }

    window.localStorage.setImage('lvl', JSON.stringify(data));
  }

  get current() { return this._current; }
  set current(value) {
    this._current = value;
    this.saveDataInStorage();
  }

  get opend() { return this._opend; }
  set opend(value) {
    this._opend = value;
    this.saveDataInStorage();
  }

  get done() { return this._done; }
  set done(value) {
    this._done = value;
    this.saveDataInStorage();
  }
}

Engine.Lvl = Lvl;
