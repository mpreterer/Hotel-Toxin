// import '../pages/style.scss'
// import '../pages/index.pug'
// import '../assets/sass/datepicker.min.scss'
// import './jquery-3.6.0.min.js'
// import './click.js'
// import './clear.js'
// import './close.js'
// import './datepicker.min.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
  
  importAll(require.context('../image', true, /\.(jpg|png|svg|png)$/));
//   importAll(require.context('../static/favicons/', true, /\.(svg|png|ico|xml|json)$/));
  
  importAll(require.context('../styles', true, /\.(css|scss)$/));
  importAll(require.context('../blocks', true, /\.(css|scss|jpg|png|svg|png|ico|)$/));
  importAll(require.context('../pages', true, /\.(css|scss)$/));
  
  importAll(require.context('./', true, /\.(js)$/));
  importAll(require.context('../blocks', true, /\.(js)$/));