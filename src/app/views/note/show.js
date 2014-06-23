define(function(require, exports, module){
  var Template = require('hbs!templates/show');

  var AppModelShowView = Backbone.View.extend({
    initialize: function(options){
      this.app = options.app;
    },

    events: {
      'click .edit': 'editItem',
      'click .index': 'index'
    },

    editItem: function() {
      this.app.edit(this.model.id);
    },
    index: function() {
      this.app.index();
    },

    render: function(){
      var _self = this;
      this.$el.html(Template(this.model.toJSON()));
    }
  });

  return AppModelShowView;
});