define(function(require, exports, module){
  var Template = require('hbs!templates/edit');

  var AppModelEditView = Backbone.View.extend({
    initialize: function(options){
    },

    events: {
      "keyup input, textarea" : 'handleBoundValueChange',
      "click .save": 'save'
    },

    save: function(){
      this.model.save();
    },

    handleBoundValueChange: function(e){
      var $source = $(e.currentTarget);
      var key = $source.attr('name').replace('app_model', '').split(/[\[\]]/)[1];      
      this.model.set(key, $source.val());
    },

    render: function(){
      var _self = this;
      this.$el.html(Template(this.model.toJSON()));
    }
  });

  return AppModelEditView;
});