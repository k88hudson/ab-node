requirejs.config({
  baseUrl: '../bower_components',
  paths: {
    main: '../src/main',
    nunjucks: 'nunjucks/browser/nunjucks',
    templates: '../templates',
    jquery: 'jquery/jquery',
    gaLoader: '../ga-amd'
  }
});

require([
  'jquery',
  'templates',
  'nunjucks',
  'gaLoader'

], function(
  $,
  templates,
  nunjucks,
  gaLoader
) {

  gaLoader();

});
