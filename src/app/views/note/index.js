define(function(require, exports, module){
  var Template = require('hbs!templates/index');

  var NoteIndexView = Backbone.View.extend({
    initialize: function(options){
      this.app = options.app;
    },

    events: {
      'click [data-id]': 'itemClick'
    },

    itemClick: function(e){
      console.log($(e.currentTarget).data('id'));
      this.app.show($(e.currentTarget).data('id'));
    },

    render: function(){
      this.$el.html(Template(this.collection.toJSON()));
    }
  });

  return NoteIndexView;
});