import './style.scss';
import Filter from '../blocks/filter/filter.js'
import NavMenu from '../blocks/nav-menu/nav-menu.js';

class Index {
    constructor() {
      this._init();
    }
  
    _init() {
      const { filter } = this._get_elements();

      new NavMenu(document);
      filter.forEach((item) => new Filter(item));
    }
  
    _get_elements() {
      return {
        filter: document.querySelectorAll('.js-filter-item'),
      };
    }
}
  
export default Index;

new Index();
