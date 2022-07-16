import './elements.scss';
import '../blocks/ui-header.scss';
import '../../style.scss';
import '../../../assets/styles/reset.scss';

import '../../../blocks/text-input';
import '../../../blocks/alone-calendar';
import '../../../blocks/checkbox-list';
import '../../../blocks/stars-rating';
import '../../../blocks/button-like';
import '../../../blocks/button';
import '../../../blocks/slider-range';
import '../../../blocks/pagination';
import '../../../blocks/dropDown';
import '../../../blocks/toggle';
import '../../../blocks/radio-input';
import '../../../blocks/custom-checkbox';
import '../../../blocks/checkbox-double-name';
import '../../../blocks/range-date-calendar';
import '../../../blocks/sub-text-input';
import '../../../blocks/room-orders';
import '../../../blocks/about-room';
import '../../../blocks/user-reviews';

import Elements from './Elements';

const elementsNodes = document.querySelector('.js-ui-card');
new Elements(elementsNodes);
