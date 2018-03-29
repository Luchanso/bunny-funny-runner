export default class Storage {
  save(key, value) {
    const { localStorage } = window;
    localStorage[key] = JSON.stringify(value);
  }

  load(key) {
    if (!localStorage[key]) {
      return undefined;
    }

    return JSON.parse(localStorage[key]);
  }
}
