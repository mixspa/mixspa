import MixspaStorage from './MixspaStorage';

describe('MixspaStorage', () => {
  let app = {
    id: 'test',
    tag: 'test'
  };

  beforeEach(() => {
    MixspaStorage.set('test-key', app);
  });

  it('should get value from global', () => {
    expect(MixspaStorage.get('test-key')).toEqual(app);
  });

  it('should has value in global', () => {
    expect(MixspaStorage.has('test-key')).toBeTruthy();
  });

  it('should get nothing from global when remove the key', () => {
    MixspaStorage.remove('test-key')
    expect(MixspaStorage.get('test-key')).not.toBeDefined();
  });
});
