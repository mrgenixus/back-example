define(function(require, exports, module){
  var _ = require('underscore');
  var Router = Backbone.Router.extend({
    initialize: function(options){
      if (! options.app) {
        throw new Error('app not defined');
      } else {
        this.app = options.app;
      }
    },

    routes: {
      'notes': 'notesIndex',
      'notes/new': 'newNote',
      'notes/:id': 'showNote',
      'notes/:id/edit': 'editNote'
    },

    newNote: function(){
      this.app.new();
    },

    notesIndex: function(){
      this.app.index();
    },

    showNote: function(id) {
      this.app.show(id);
    },

    editNote: function(id) {
      this.app.edit(id);
    }

  });

  return Router;
});