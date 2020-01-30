import MixspaAssets from './MixspaAssets';

describe('MixspaAssets', () => {
  it('should create style asset', () => {
    let url = 'http://www.test.com/test.css';
    let asset = MixspaAssets.createAsset(url);
    expect(asset.getUrl()).toBe(url);
    expect(asset.getElement().type).toBe('text/css');
  });

  it('should create script asset', () => {
    let url = 'http://www.test.com/test.js';
    let asset = MixspaAssets.createAsset(url);
    expect(asset.getUrl()).toBe(url);
    expect(asset.getElement().type).toBe('text/javascript');
  });
});
