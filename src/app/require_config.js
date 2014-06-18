require.config({
  deps: ['index'],

  paths: {
    'backbone': '../../bower_components/backbone/backbone',
    'underscore': '../../bower_components/underscore/underscore',
    'jquery': '../../bower_components/jquery/jquery',
    'uikit' : '../../bower_components/uikit/dist/js/uikit',
    'handelbars' : '../../node_modules/grunt-contrib-handlebars/node_modules/handlebars/dist/handelbars.amd'
  },

  shims: {
    'backbone': {
      'deps': ['jquery', 'underscore']
    },
    'handlebars': {
      'exports': 'Handlebars'
    },
    'uikit': {
      'deps':  ['jquery']
    },
    'jquery': {
      'exports': 'jQuery'
    }
  },

  config: {
    "uikit": {
      "base": "../../bower_components/uikit/dist"
    }
  }
});