// import '../pages/website-pages/login/login.scss'
// import '../pages/website-pages/registration/registration.scss'
// import '../pages/website-pages/room-details/roomDetails.scss'
// import '../pages/website-pages/search-room/searchRoom.scss'
// import '../pages/ui-kit/site-pages.sass'
// import '../pages/ui-kit/cards/cards.sass'
// import '../pages/ui-kit/colors-type/UI.sass'
// import '../pages/ui-kit/elements/elements.sass'
// import '../pages/ui-kit/header-footer/headerFooter.sass'

import '../assets/scss/datepicker.min.scss'
import '../assets/scss/nouislider.min.scss'
import '../assets/scss/range.scss'

// import '../pages/index.pug'
// import './jquery-3.6.0.min.js'
// import './click.js'
// import './clear.js'
// import './close.js'
// import './datepicker.min.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }

  importAll(require.context('../assets/image', true, /\.(jpg|png|svg|png)$/));
  importAll(require.context('../assets/scss', true, /\.(css|scss|)$/));
  // importAll(require.context('../pages/website-pages', true, /\.(css|scss|sass)$/));
  
  // importAll(require.context('./', true, /\.(js)$/));