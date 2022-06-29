import './style.scss';
import Filter from '../blocks/filter/filter';
import NavMenu from '../blocks/nav-menu/nav-menu';

class Index {
  constructor() {
    this._init();
  }

  _init() {
    const { filter } = this._getElements();

    new NavMenu(document);
    filter.forEach((item) => new Filter(item));
  }

  _getElements() {
    return {
      filter: document.querySelectorAll('.js-filter-item'),
    };
  }
}
  
export default Index;

new Index();
