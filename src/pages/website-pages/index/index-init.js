import IndexPage from './IndexPage';

const indexSelector = document.querySelectorAll('.js-index-main');
indexSelector.forEach((element) => new IndexPage(element));
