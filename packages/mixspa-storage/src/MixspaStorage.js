import DefaultStorage from './storages/DefaultStorage';

class MixspaStorage {
  static storage = DefaultStorage;

  static use(value) {
    MixspaStorage.storage = value;
  }

  static set(key, value) {
    MixspaStorage.storage.set(key, value);
  }

  static get(key) {
    return MixspaStorage.storage.get(key);
  }

  static has(key) {
    return !!MixspaStorage.storage.get(key);
  }

  static remove(key) {
    return MixspaStorage.storage.remove(key);
  }
}

export default MixspaStorage;
