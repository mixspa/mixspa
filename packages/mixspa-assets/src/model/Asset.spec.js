import Asset from './Asset';
import { INIT, SUCCESS } from './AssetStatus'

describe('Asset', () => {
  describe('load asset success', () => {
    let url;
    let dom;

    beforeEach(() => {
      url = 'http://www.test.com';
      dom = document.createElement('script');
      document.body.appendChild = jest.fn().mockImplementation(dom => dom.onload());
    });

    it('should is init status wen init asset', () => {
      let asset = new Asset(url, dom);
      expect(asset.getUrl()).toBe(url);
      expect(asset.getStatus()).toBe(INIT);
      expect(asset.getElement()).toBe(dom);
    });

    it('should append once for load element', () => {
      return new Asset(url, dom).load().then((asset) => {
        expect(document.body.appendChild).toHaveBeenCalledTimes(1);
        expect(asset.getStatus()).toBe(SUCCESS);
      });
    });
  });
});
