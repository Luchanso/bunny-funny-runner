import debug from 'debug';

export default sceneName => SceneClass =>
  class SceneWithLogger extends SceneClass {
    constructor(...props) {
      console.log('test');
      super(...props);
      this.log = debug(`scene:${sceneName}`);
      this.log('call constructor');

      this.preload = this.preload.bind(this);
      this.create = this.create.bind(this);
    }

    preload(...props) {
      this.log('call preload');
      super.preload(...props);
    }

    create(...props) {
      this.log('call create');
      super.create(...props);
    }
  };
