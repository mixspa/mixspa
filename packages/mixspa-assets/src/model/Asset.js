import { INIT, LOADING, SUCCESS, ERROR } from './AssetStatus';

class Asset {
  constructor(url, element) {
    this.url = url;
    this.status = INIT;
    this.element = element;
  }

  load(parentEl = document.body) {
    this.status = LOADING;
    return new Promise((resolve, reject) => {
      this.element.onload = () => {
        this.status = SUCCESS;
        resolve(this);
      };
      this.element.onerror = (msg) => {
        this.status = ERROR;
        reject(msg, this);
      };
      parentEl.appendChild(this.element);
    });
  }

  getUrl() {
    return this.url;
  }

  getStatus() {
    return this.status;
  }

  getElement() {
    return this.element;
  }

  isLoading() {
    return this.status == LOADING;
  }

  isLoad() {
    return this.status == SUCCESS || this.status == ERROR;
  }
}

export default Asset;
