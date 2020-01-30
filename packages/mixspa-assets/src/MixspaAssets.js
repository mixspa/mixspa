import Asset from './model/Asset';
import DomUtils from './util/DomUtils';

class MixspaAssets {
  static createAsset(assetUrl) {
    if (assetUrl.endsWith('.css')) {
      return new Asset(assetUrl, DomUtils.createStyle(assetUrl));
    } else if (assetUrl.endsWith('.js')) {
      return new Asset(assetUrl, DomUtils.createScript(assetUrl));
    }
  }
}

export default MixspaAssets;
