define(function(require, exports, module){
  var Template = require('hbs!templates/edit');

  var AppModelEditView = Backbone.View.extend({
    initialize: function(options){
      this.app = options.app;
    },

    events: {
      "keyup input, textarea" : 'handleBoundValueChange',
      "click .done": 'done'
    },

    save: function(){
      // this.model.save();
    },
    done: function() {
      this.app.show(this.model.id);
    },

    handleBoundValueChange: function(e){
      var $source = $(e.currentTarget);
      var key = $source.attr('name').replace('note', '').split(/[\[\]]/)[1];
      this.model.set(key, $source.val());
    },

    render: function(){
      var _self = this;
      this.$el.html(Template(this.model.toJSON()));
    }
  });

  return AppModelEditView;
});