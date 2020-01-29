import DefaultStorage from './DefaultStorage';

describe('DefaultStorage', () => {
  let app = {
    id: 'test',
    tag: 'test'
  };

  beforeEach(() => {
    DefaultStorage.set('test-key', app);
  });

  it('should get value from global', () => {
    expect(DefaultStorage.get('test-key')).toEqual(app);
  });

  it('should get nothing from global when remove the key', () => {
    DefaultStorage.remove('test-key')
    expect(DefaultStorage.get('test-key')).not.toBeDefined();
  });
});
