require.config({
  deps: ['index', 'handlebars'],

  paths: {
    'backbone'   : '../../bower_components/backbone/backbone',
    'underscore' : '../../bower_components/underscore/underscore',
    'jquery'     : '../../bower_components/jquery/jquery',
    'uikit'      : '../../bower_components/uikit/dist/js/uikit',
    'handlebars' : '../../bower_components/handlebars/handlebars.min',
    'text'       : '../../bower_components/requirejs-text/text',
    'hbs'        : '../../bower_components/requirejs-hbs/hbs',
    'templates'  : '../templates'
  },

  shims: {
    'backbone': {
      'deps': ['jquery', 'underscore']
    },
    'uikit': {
      'deps':  ['jquery']
    },
    'handlebars': {
      'exports': 'Handlebars'
    },
    'jquery': {
      'exports': 'jQuery'
    }
  },

  config: {
    hbs: {},

    "uikit": {
      "base": "../../bower_components/uikit/dist"
    }
  }
});