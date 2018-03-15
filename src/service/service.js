const resolvers = {};

export default class Service {
  static list = {};

  static get(name) {
    return Service.list[name];
  }

  static isInitializated(name) {
    return !!Service.get(name);
  }

  static asyncGet(name) {
    return new Promise(res => {
      if (Service.isInitializated(name)) {
        res(Service.get(name));
      }

      if (!resolvers[name]) {
        resolvers[name] = [res];
      } else {
        resolvers[name].push(res);
      }
    });
  }

  static create(name, service) {
    Service.list[name] = service;

    const resolverList = resolvers[name];
    if (resolverList) {
      resolverList.map(resolver => resolver(service));
      delete resolvers[name];
    }
  }
}
