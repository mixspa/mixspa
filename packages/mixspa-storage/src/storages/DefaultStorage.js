window.__mixspa__storage = window.__mixspa__storage || { };

class DefaultStorage {
  static set(key, value) {
    window.__mixspa__storage[key] = value;
  }

  static get(key) {
    return window.__mixspa__storage[key];
  }

  static remove(key) {
    delete window.__mixspa__storage[key];
  }
}

export default DefaultStorage;
